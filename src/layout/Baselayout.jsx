import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Baselayout({ children }) {
  return (
    <div className="container mx-auto flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
