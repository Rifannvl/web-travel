import React from "react";
import Baselayout from "../layout/Baselayout";
import AllHotels from "../ui/AllHotels";
import Breadcrumbs from "../components/Breadcrumbs";

const breadcrumbItems = [
  { label: "Home", path: "/" },
  { label: "Penginapan", path: "/penginapan" },
];

export default function Penginapan() {
  return (
    <div>
      <Baselayout>
        <Breadcrumbs items={breadcrumbItems} />
        <AllHotels />
      </Baselayout>
    </div>
  );
}
