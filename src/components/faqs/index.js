"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
  {
    id: "01",
    question: "What is NAXY?",
    answer:
      "NAXY is an innovative platform leveraging AI and blockchain technology to protect and manage digital intellectual property securely.",
  },
  {
    id: "02",
    question: "How does NAXY verify the authenticity of digital content?",
    answer:
      "NAXY uses advanced AI algorithms to analyze and verify digital content, ensuring its originality and authenticity.",
  },
  {
    id: "03",
    question: "What benefits does blockchain technology provide to NAXY users?",
    answer:
      "Blockchain ensures transparent and immutable records of intellectual property rights, preventing tampering and ensuring trust.",
  },
  {
    id: "04",
    question: "How does NAXY monitor digital platforms for IP infringements?",
    answer:
      "NAXY employs real-time monitoring systems that scan digital platforms continuously. Users receive instant alerts upon detecting potential infringements.",
  },
  {
    id: "05",
    question: "How can I get started with NAXY?",
    answer:
      "You can get started by signing up on the NAXY platform, uploading your digital content, and following the verification process.",
  },
    {
    id: "06",
    question: "Is my data secure on NAXY?",
    answer:
      "Yes, NAXY prioritizes data security. We use advanced encryption and follow stringent security protocols to protect user data.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div 
    id="faqs"
    className=" text-white py-12 px-4 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10 font-mono">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className=" border border-white rounded-lg overflow-hidden"
          >
            <div
              className="flex items-center justify-between p-6 cursor-pointer bg-[#02131a]"
              onClick={() => toggle(index)}
            >
              <span className="flex-1 text-left text-white font-medium">
                {faq.question}
              </span>
              <div className="bg-[#1f2a38] p-1.5 rounded">
                {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
            </div>
            {openIndex === index && (
              <div className="p-4  border-t border-[#222] text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}