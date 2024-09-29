import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import DetailAkomodasi from "./ui/DetailAkomodasi";
import { useParams } from "react-router-dom";
import Payment from "./ui/Payment";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/:id" element={<DetailWrapper />} />
        <Route path="/payment/:id" element={<PaymentWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

function DetailWrapper() {
  const { id } = useParams();
  return <DetailAkomodasi id={id} />;
}

function PaymentWrapper() {
  const { id } = useParams();
  return <Payment id={id} />;
}
