import { useState } from "react";
import AccordionItem from "./AccordionItem";
import data from "../data/AccordionData";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
    console.log(activeIndex);
  };

  return (
    <div className="container">
      {data.map((data, index) => (
        <AccordionItem
          key={index}
          question={data.question}
          answer={data.answer}
          isOpen={activeIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
