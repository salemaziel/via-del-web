import React, { useState } from "react";
import "./FaqItemNav.scss";
import {Link} from 'gatsby'

function FaqItemNav(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="FaqItemNav " onClick={() => setExpanded(!expanded)}>
      <span className="mr-4 sub">
        {/*<span className="text-primary m-auto">
          <i
            className={
              "fas" +
              (expanded ? " fa-minus" : "") +
              (!expanded ? " fa-plus" : "")
            }
          />
        </span>*/}
        {props.question}
      </span>

      {/*{expanded && <div className="mt-3">{props.answer}</div>}*/}
      {expanded && <div className="mt-3">
        <ul>
          <li>{props.listItem1}</li>
          <li>{props.listItem2}</li>
         

        </ul>
        <div className="py-2 subMenu">
          <Link to={props.link1} >{props.linkTitle1}</Link>
      </div>
      <div className="py-2 subMenu">
          <Link to={props.link2} >{props.linkTitle2}</Link>
      </div>
      <div className="py-2 subMenu">
          <Link to={props.link3} >{props.linkTitle3}</Link>
      </div>
      {/*<div className="py-2 subMenu">
          <Link to={props.link4} >{props.linkTitle4}</Link>
      </div>*/}

        
        
        {props.answer}</div>}
    </article>
  );
}

export default FaqItemNav;
