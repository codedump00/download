import React, { useState } from "react";
import { BiPlayCircle } from "react-icons/bi";
import { AiOutlineApple, AiFillAndroid, AiFillWindows } from "react-icons/ai";
import { DiLinux } from "react-icons/di";
import { isAndroid, isMacOs, isWindows, isIOS } from "react-device-detect";

import "./styles.css";

const regExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

export default function App() {
  const [value, setValue] = useState();
  const [content, setContent] = useState();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleFormSubmit = () => {
    if (regExp.test(value)) {
      setContent("IP Address not found!");
      setIsPopoverOpen(true);
    } else {
      setContent("IP Address not valid!");
      setIsPopoverOpen(true);
    }
  };

  return (
    <div className="App">
      <div
        className="popup"
        style={{
          display: isPopoverOpen ? "flex" : "none"
        }}
        onClick={() => setIsPopoverOpen(false)}
      >
        <div className="content">{content}</div>
      </div>

      <div className="recommended">
        <BiPlayCircle fontSize={30} />
        <h2>Recommended Software Download</h2>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          onInput={(value) => setValue(value.currentTarget.value)}
          placeholder="Enter your IP address"
        />
        <button onClick={handleFormSubmit}>Download</button>
      </form>
      <div className="os">
        {isMacOs ? (
          <>
            <AiOutlineApple fontSize={30} />
            <h4>MacOS</h4>
          </>
        ) : isAndroid ? (
          <>
            <AiFillAndroid fontSize={30} />
            <h4>Android</h4>
          </>
        ) : isWindows ? (
          <>
            <AiFillWindows fontSize={30} />
            <h4>Windows</h4>
          </>
        ) : isIOS ? (
          <>
            <AiOutlineApple fontSize={30} />
            <h4>iOS</h4>
          </>
        ) : (
          <>
            <DiLinux fontSize={30} />
            <h4>Linux</h4>
          </>
        )}
      </div>
    </div>
  );
}
