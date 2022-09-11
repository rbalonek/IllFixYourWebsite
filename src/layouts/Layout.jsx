import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout(props) {
  return (
    <div className="bg-cyan-900">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}