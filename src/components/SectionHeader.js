import React from "react";
import "./SectionHeader.scss";



function SectionHeader(props) {
  // Render nothing if no title or subtitle
  if (!props.title && !props.subtitle) {
    return null;
  }

  return (
    <header
      className={
        "SectionHeader" + (props.className ? ` ${props.className}` : "")
      }
    >
        {props.title && (
          <h1
            className={
              "font-weight-bold font-bold" + 
              (props.subtitle && props.spaced ? " mb-4" : "") +
              (!props.subtitle ? " mb-0" : "") +
              (props.size ? ` h${props.size}` : "")
            }
          >
            {props.title}
          </h1>
        )}

        {props.subtitle && (
          <p className="mb-0 SectionHeader__subtitle">{props.subtitle}</p>
        )}
    </header>
  );
}

export default SectionHeader;
