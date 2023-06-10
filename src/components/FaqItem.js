import React, { useState } from "react";
import "./FaqItem.scss";

import {
  FaPlus, FaMinus
} from "react-icons/fa"

function FaqItem(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="FaqItem py-2" onClick={() => setExpanded(!expanded)}>
      <h4>
        <span className="text-primary mr-3">
          {expanded ? <FaMinus /> : <FaPlus /> }
        </span>
        {props.question}
      </h4>

      {expanded && (
      <div className="mt-3">
        <p>
        {props.answer}
        </p>
        <p>
          {props.answer2}
        </p>
        {props.answer3 && (
        <p>
          {props.answer3}
        </p>
)}
    {props.answer4 && (
        <p>
          {props.answer4}
        </p>
)}
    {props.answer5 && (
        <p>
          {props.answer5}
        </p>
)}
{props.answer6 && (
        <p>
          {props.answer6}
        </p>
)}
        {props.answer7 && (
        <p>
          {props.answer7}
        </p>
)}
        {props.answer8 && (
        <p>
          {props.answer8}
        </p>
)}
        </div>
      )}
    </article>
  );
}

export default FaqItem;
