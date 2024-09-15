/* eslint-disable react/prop-types */
import Card from "./Card";

export default function CardContainer({ list, setJourney }) {
  return (
    <>
        {list?.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <Card text={item} setJourney={setJourney}></Card>
        ))}
    </>
  );
}
