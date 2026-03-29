import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

// Tech Stack Icons
export const ReactIcon = () => <FaReact size={40} />;
export const JavaScriptIcon = () => <SiJavascript size={40} />;
export const NodeJsIcon = () => <FaNodeJs size={40} />;
export const Html5Icon = () => <FaHtml5 size={40} />;
export const Css3Icon = () => <FaCss3Alt size={40} />;

const Icons = {
  ReactIcon,
  JavaScriptIcon,
  NodeJsIcon,
  Html5Icon,
  Css3Icon,
};

export default Icons;
