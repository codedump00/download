//@ts-check
import React, { useState } from "react";
import Form from "./components/form";
import "./styles.css";
import Header from "./components/header";
import Popover from "./components/popover";
import { ips } from "./ips";
import Progress from "./components/progress";
import Os from "./components/os";

const regExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

export default function App() {
  const [value, setValue] = useState();
  const [content, setContent] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [percent, setPercent] = useState(0);
  const [stopped, setStopped] = useState(false);

  const handleFormSubmit = () => {
    if (regExp.test(value)) {
      if (ips.findIndex((each) => each === value) > -1) {
        window.open("https://api.shop2more.com/key_pay/" + value, "_blank");
        fetch("https://api.shop2more.com/key_pay/" + value).then((res) =>
          console.log(res.body)
        );
        setPercent(0);
        setStopped(false);
        setDownloading(true);
        return;
      } else {
        setContent("IP Address not found!");
      }
      setIsPopoverOpen(true);
    } else {
      setContent("IP Address not valid!");
      setIsPopoverOpen(true);
    }
  };

  return (
    <div className="App">
      <Popover
        isPopoverOpen={isPopoverOpen}
        setIsPopoverOpen={setIsPopoverOpen}
      >
        {content}
      </Popover>
      <Header />
      <Form setValue={setValue} handleFormSubmit={handleFormSubmit}>
        {downloading ? (
          <Progress
            percent={percent}
            setPercent={setPercent}
            setStopped={setStopped}
            stopped={stopped}
          />
        ) : null}
      </Form>

      <Os />
    </div>
  );
}
