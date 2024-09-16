import Card from "./Card";

export default function CardContainer({ list, setJourney }) {
  return list?.map((item, index) => (
    <Card key={index} text={item} setJourney={setJourney} />
  ));
}
