import { useEffect, useState } from "react";
import "../../../../public/donation.json";
import SingleCard from "../SingleCard/SingleCard";

const Cards = () => {
  const [cards, setCards] = useState();

  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-32 ">
      {cards?.map((card, idx) => (
        <SingleCard key={idx} card={card}></SingleCard>
      ))}
    </div>
  );
};

export default Cards;
