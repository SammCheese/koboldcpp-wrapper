import React from "react";
import { Checkbox, Divider, Flex, Select, TextItem } from "../../components";
import "./LaunchOptions.css";

const LaunchOptions = () => {
  const opts = [
    {
      name: "CuBLAS",
      value: "are you doing?",
    },
    {
      name: "CLBlast",
      value: "woah",
    },
    {
      name: "OpenBLAS",
      value: "really?",
    },
  ];

  return (
    <div className="lo-page">
      <TextItem fontSize="h1" className="page-header">
        Options
      </TextItem>
      <div className="option-grid">
        <Checkbox title="Disable MMap" onChange={(e) => console.log(e)} />
        <Checkbox title="Streaming" onChange={(e) => console.log(e)} />
        <Checkbox title="Launch Bowser" onChange={(e) => console.log(e)} />
        <Checkbox title="Unban Tokens" onChange={(e) => console.log(e)} />
        <Checkbox title="Use Smart Context" onChange={(e) => console.log(e)} />
        <Checkbox title="High Priority" onChange={(e) => console.log(e)} />
        <Select options={opts} />
      </div>
    </div>
  );
};

export default LaunchOptions;
