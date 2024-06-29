import { useState, useRef, useEffect } from "react";
import Chevron from "./../../Assets/down-chevron.png";

export default function DropdownHousing({ title, content }) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const toggleState = () => {
    setToggle(!toggle);
  };

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  return (
    <div className="collapse">
      <div onClick={toggleState} className="collapse__visible">
        <h3>{title}</h3>
        <img
          className={toggle ? "chevron rotated" : "chevron"}
          src={Chevron}
          alt="chevron"
        />
      </div>
      <div
        ref={refHeight}
        className="collapse__toggle"
        style={{ height: toggle ? `${heightEl}` : "0px" }}
      >
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}
