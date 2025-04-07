"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: "01",
    question: "What is Satochain and its core mission?",
    answer:
      "Satochain is a decentralized platform aiming to bring blockchain to real-world utility with strong focus on AI and governance.",
  },
  {
    id: "02",
    question: "What makes Satochain Blockchain unique?",
    answer:
      "Satochain combines AI features with smart contracts and institutional-grade adoption strategies.",
  },
  {
    id: "03",
    question: "What are details of Satochain presale?",
    answer:
      "The presale details are available on our website. It includes token distribution, phases, and audit info.",
  },
  {
    id: "04",
    question: "When can I claim $SATO",
    answer:
      "You will be able to claim $SATO tokens after the presale ends and smart contract is verified.",
  },
  {
    id: "05",
    question: "Where can I sell my $SATO tokens",
    answer:
      "You will be able to sell $SATO on major DEXs once liquidity is added post launch.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-12 px-4 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10 font-mono">Faqs</h2>
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="bg-[#0a0a0a] border border-[#222] rounded-lg overflow-hidden"
          >
            <div
              className="flex items-center justify-between p-4 cursor-pointer bg-[#0f0f0f]"
              onClick={() => toggle(index)}
            >
              <span className="text-orange-500 font-semibold mr-4">{faq.id}</span>
              <span className="flex-1 text-left text-white font-medium">
                {faq.question}
              </span>
              <div className="bg-[#1f2a38] p-1.5 rounded">
                {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </div>
            {openIndex === index && (
              <div className="p-4 bg-[#111] border-t border-[#222] text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}