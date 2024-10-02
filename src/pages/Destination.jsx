import React from "react";
import AllAkomodasi from "../ui/AllAkomodasi";
import Baselayout from "../layout/Baselayout";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Akomodasi() {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Destinations", path: "/destination" },
  ];
  return (
    <div className=" bg-gray-100">
      <Baselayout>
        <Breadcrumbs items={breadcrumbItems} className="pt-[100px]" />
        <AllAkomodasi />
      </Baselayout>
    </div>
  );
}
