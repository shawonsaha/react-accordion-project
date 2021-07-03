import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  // console.log(question);

  const [isHidden, setIsHidden] = useState(true);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      <p>{isHidden ? info.substr(0, 0) : info}</p>
    </article>
  );
};

export default Question;
