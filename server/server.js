const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { WebhookClient } = require("dialogflow-fulfillment");

// Import models
const Attraction = require("./models/attractionSchema.js");
const Booking = require("./models/bookingSchema.js");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Use body-parser to parse incoming JSON requests
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
    process.exit(1); // Exit the process if DB connection fails
  });

// Route to handle Dialogflow fulfillment
app.post("/api/dialogflow", (req, res) => {
  const agent = new WebhookClient({ request: req, response: res });

  // Test intent to check the connection
  function testConnection(agent) {
    agent.add("The server is connected to Dialogflow successfully!");
  }

  // Intent for finding available attractions
  async function findAttractions(agent) {
    const attractions = await Attraction.find(); // Get all attractions from DB
    if (attractions.length === 0) {
      agent.add("Sorry, there are no available attractions at the moment.");
    } else {
      let responseText = "Here are the available attractions: ";
      attractions.forEach((attraction) => {
        responseText += `${attraction.name} at ${attraction.location} for $${attraction.price}. `;
      });
      agent.add(responseText);
    }
  }

  // Intent for booking tickets
  async function bookTickets(agent) {
    const { name, attraction, tickets } = agent.parameters;
    const attractionData = await Attraction.findOne({ name: attraction });

    if (!attractionData || attractionData.availableTickets < tickets) {
      agent.add(
        `Sorry, we do not have enough tickets available for ${attraction}.`
      );
    } else {
      const totalPrice = attractionData.price * tickets;
      const booking = new Booking({
        userName: name,
        attractionId: attractionData._id,
        tickets: tickets,
        totalPrice: totalPrice,
      });

      await booking.save();
      attractionData.availableTickets -= tickets; // Update available tickets
      await attractionData.save();

      agent.add(
        `Your booking for ${tickets} tickets to ${attraction} is confirmed! Total price: $${totalPrice}.`
      );
    }
  }

  // Intent to cancel the booking (responding to "no" for booking)
  function cancelBooking(agent) {
    agent.add(
      "It seems like you don't want to book the ticket! Your booking procedure has been cancelled. If you have any doubt, feel free to ask me anytime."
    );
  }

  // Map intents to functions
  let intentMap = new Map();
  intentMap.set("TestConnection", testConnection); // New intent for connection test
  intentMap.set("Find Attractions", findAttractions); // Dialogflow intent name
  intentMap.set("Book Tickets", bookTickets); // Dialogflow intent name
  intentMap.set("Booking - no", cancelBooking); // Dialogflow intent name for cancelling booking

  // Handle the request based on the matched intent
  agent.handleRequest(intentMap);
});

// Route for adding a new attraction (admin or manual use)
app.post("/api/attractions", async (req, res) => {
  const { name, location, price, availableTickets } = req.body;

  try {
    const attraction = new Attraction({
      name,
      location,
      price,
      availableTickets,
    });
    await attraction.save();
    res
      .status(201)
      .json({ message: "Attraction added successfully", attraction });
  } catch (err) {
    res.status(500).json({ message: "Error adding attraction", error: err });
  }
});

// Route for retrieving all bookings (admin view)
app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("attractionId");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving bookings", error: err });
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
