import React, {useState} from "react";
import "./Accordion.css";

const Accordion = ({name, placeholder}) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="accordion-item">
      <div 
        className="accordion-title"
        onClick={() => setIsActive(!isActive)}
      >
        <div>{name}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion-body">
        <input type="text" id={name} name={name} placeholder={placeholder}></input>
      </div>}
    </div>
  );
}

export default Accordion;
