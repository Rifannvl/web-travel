import React, { useState } from "react";
const faqs = [
  {
    question: "Apa itu FAQ dalam konteks travel?",
    answer:
      "FAQ travel adalah daftar pertanyaan yang sering diajukan terkait perjalanan, termasuk informasi tentang destinasi, akomodasi, dan transportasi.",
  },
  {
    question: "Bagaimana cara membatalkan pemesanan tiket?",
    answer:
      "Anda dapat membatalkan pemesanan tiket melalui situs web kami atau menghubungi layanan pelanggan kami.",
  },
  {
    question: "Apakah ada kebijakan pengembalian dana?",
    answer:
      "Ya, kami memiliki kebijakan pengembalian dana yang berlaku dalam waktu 14 hari setelah tanggal pemesanan.",
  },
  {
    question:
      "Apa yang harus saya lakukan jika kehilangan paspor saat bepergian?",
    answer:
      "Segera laporkan kehilangan paspor Anda ke kedutaan atau konsulat terdekat dan ikuti prosedur yang mereka tetapkan.",
  },
  {
    question: "Bagaimana cara menemukan akomodasi yang sesuai?",
    answer:
      "Anda dapat menggunakan filter pencarian di situs kami untuk menemukan akomodasi berdasarkan anggaran, lokasi, dan fasilitas.",
  },
  {
    question: "Apakah asuransi perjalanan diperlukan?",
    answer:
      "Meskipun tidak wajib, sangat dianjurkan untuk memiliki asuransi perjalanan untuk melindungi diri Anda dari risiko yang tidak terduga.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-2">
            <button
              className="w-full text-left text-lg font-semibold text-gray-800 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
