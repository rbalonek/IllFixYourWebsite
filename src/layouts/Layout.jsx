import React from "react";
import Header from "../components/Header";

export default function Layout(props) {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
    </div>
  );
}