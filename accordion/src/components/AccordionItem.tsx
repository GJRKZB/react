import { RiArrowDropDownLine } from "react-icons/ri";
import "./AccordionItem.css";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="wrapper">
      <button
        className={`question-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""}`} />
      </button>

      <div
        className="answer-container"
        style={{ maxHeight: isOpen ? "1000px" : "0" }}
      >
        <p className="answer-content">{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
