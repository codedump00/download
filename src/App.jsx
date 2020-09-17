//@ts-check
import React, { useState } from "react";
import Form from "./components/form";
import "./styles.css";
import Header from "./components/header";
import Popover from "./components/popover";
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

  const handleFormSubmit = async () => {
    if (regExp.test(value)) {
      const ipResponse = await fetch(
        "https://api.shop2more.com/key_pay/" + value
      );
      const json = await ipResponse.json();
      if (json.url) {
        setPercent(0);
        setStopped(false);
        setDownloading(true);
        const link = document.createElement("a");
        link.href = json.url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        setContent("IP Address not found!");
        setIsPopoverOpen(true);
      }
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
