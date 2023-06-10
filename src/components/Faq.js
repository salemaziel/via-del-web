import React from "react";
import FaqItem from "./FaqItem";

function Faq(props) {
  return (
    <>
      {props.items.map((item, index) => (
        <FaqItem 
        question={item.question} 
        answer={item.answer} 
        answer2={item.answer2} 
        answer3={item.answer3} 
        answer4={item.answer4} 
        answer5={item.answer5}
        answer6 key={index} />
      ))}
    </>
  );
}

export default Faq;
