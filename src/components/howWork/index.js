"use client";

export default function HowItWorks() {
  const steps = [
    {
      title: "Register Your Content",
      description:
        "Upload your digital creations to the NAXY platform. Our AI-driven verification system analyzes and records the authenticity of your content.",
      step: "Step 01.",
    },
    {
      title: "Secure with Blockchain",
      description:
        "Once verified, your intellectual property is securely stored on the blockchain. This decentralized ledger ensures that your rights are immutable and transparent.",
      step: "Step 02.",
    },
    {
      title: "Real-Time Monitoring",
      description:
        "NAXY continuously scans digital platforms for potential IP infringements. Our advanced monitoring system provides instant alerts, helping you protect your creations promptly.",
      step: "Step 03.",
    },
    {
      title: "Manage and Enforce",
      description:
        "Easily manage your digital assets through our user-friendly interface. Take swift action against infringements and maintain control over your intellectual property.",
      step: "Step 04.",
    },
  ];

  return (
     <div className=" py-16 px-6 text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {steps.map((item, index) => (
          <div
            key={index}
            className="border border-[#7ce8ec] rounded-xl px-7 py-6 bg-[#000000] relative overflow-hidden group"
          >
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0c242e] to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />
            <p className="text-gray-400 text-sm mb-3">{item.step}</p>
            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
            <p className="text-gray-300 text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
