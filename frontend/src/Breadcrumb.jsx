import React from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "./Icons";

export default function Breadcrumb({ current }) {
  return (
    <div className="breadcrumb">
      <div className="container breadcrumb-inner">
        <Link to="/">Home</Link>
        <ChevronRightIcon width={14} height={14} />
        <span className="current">{current}</span>
      </div>
    </div>
  );
}
