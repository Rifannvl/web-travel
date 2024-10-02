import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Detail from "./pages/Detail";

import Payment from "./ui/Payment";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/:id" element={<Detail />} />
        <Route path="/payment/:id" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

// function DetailWrapper() {
//   const { id } = useParams();
//   return <DetailAkomodasi id={id} />;
// }

// function PaymentWrapper() {
//   const { id } = useParams();
//   return <Payment id={id} />;
// }
