'use client';
import React from 'react';

const partnerLogos = [
  '/logos/microsoft.png',
  '/logos/gda.png',
  '/logos/sheready.png',
  '/logos/bullblockchain.png',
  '/logos/archipel.png',
  '/logos/tangany.png',
  '/logos/swissmoney.png',
  '/logos/cashlink.png',
  '/logos/snowball.png',
];

export default function TrustedPartners() {
  return (
    <section className="bg-[#031419] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-3xl p-10 md:p-14 text-white"
          style={{
            background:
              'linear-gradient(135deg, #000000 70%, rgba(58, 157, 166, 0.3))',
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Trusted Partners
          </h2>

          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-10">
            At Naxy, we collaborate with industry-leading organizations to bring
            innovative solutions to the forefront of blockchain and digital
            asset protection. Our partners play a crucial role in enhancing our
            platform's capabilities, ensuring that we deliver top-tier security
            and AI-driven verification for your intellectual property. Together,
            we are building a more secure and transparent digital landscape,
            empowering creators and businesses to protect and manage their
            assets with confidence. Explore our partnerships and see how we’re
            shaping the future of IP management in the crypto space.
          </p>

          {/* Partner Logos Grid */}
          <div className="">
              <img
                src="./icons-B564mlt8.svg"
                alt="abc"
                className=""
              />
          </div>
        </div>
      </div>
    </section>
  );
}
