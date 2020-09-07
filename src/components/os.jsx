//@ts-check
import React from "react";
import { AiOutlineApple, AiFillAndroid, AiFillWindows } from "react-icons/ai";
import { DiLinux } from "react-icons/di";
import { isAndroid, isMacOs, isWindows, isIOS } from "react-device-detect";

const Os = (props) => {
  return (
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
  );
};

export default Os;
