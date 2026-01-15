"use client";

import { useState } from "react";

export default function OrderPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [medicines, setMedicines] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = () => {
    if (!name || !phone) {
      alert("Please enter your name and phone number");
      return;
    }

    if (!medicines && !file) {
      alert("Please enter medicine names or upload a prescription");
      return;
    }

    let message = `New Medicine Request:%0A
Name: ${name}%0A
Phone: ${phone}%0A
`;

    if (medicines) {
      message += `%0AMedicines Requested:%0A${medicines}%0A`;
    }

    if (file) {
      message += `%0APrescription image uploaded by customer.%0A`;
    }

    message += `%0APlease call the customer to confirm availability.`;

    const whatsappUrl = `https://wa.me/916006286695?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="pt-20 pb-24 bg-gradient-to-b from-green-50 via-white to-white">
      <div className="max-w-2xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-green-100 text-green-700
                           px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Easy Medicine Ordering
          </span>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Order Medicines
          </h1>

          <p className="text-gray-600 text-lg">
            Enter medicine names or upload a prescription.
            Our team will{" "}
            <span className="font-semibold text-green-600">
              personally call you
            </span>{" "}
            to confirm availability and delivery.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-green-200 p-8">

          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-semibold text-gray-900">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-white text-gray-900 placeholder-gray-400
                        border border-green-300 p-3 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-green-500
                        focus:border-green-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-semibold text-gray-900">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full bg-white text-gray-900 placeholder-gray-400
                        border border-green-300 p-3 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-green-500
                        focus:border-green-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Medicines */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-semibold text-gray-900">
              Medicine Names (Optional)
            </label>
            <textarea
              placeholder="Example: Crocin, Azithromycin, Vitamin D3"
              className="w-full bg-white text-gray-900 placeholder-gray-400
                        border border-green-300 p-3 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-green-500
                        focus:border-green-500"
              value={medicines}
              onChange={(e) => setMedicines(e.target.value)}
            />
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-500 text-sm font-medium">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Upload Prescription (FIXED) */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold text-gray-900">
              Upload Prescription
            </label>

            <div className="flex items-center gap-4">
              {/* Hidden input */}
              <input
                type="file"
                id="prescription"
                accept="image/*"
                className="hidden"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />

              {/* Button */}
              <label
                htmlFor="prescription"
                className="cursor-pointer bg-green-100 text-green-800
                           px-4 py-2 rounded-lg font-medium
                           hover:bg-green-200 transition"
              >
                Choose File
              </label>

              {/* File name */}
              <span
                className={`text-sm ${
                  file ? "text-gray-900" : "text-gray-400"
                }`}
              >
                {file ? file.name : "No file chosen"}
              </span>
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full bg-green-600 text-white py-3 rounded-lg
                       text-lg font-semibold hover:bg-green-700 transition"
          >
            Submit Medicine Request
          </button>

          {/* Trust Note */}
          <p className="text-center text-sm text-gray-500 mt-4">
            ✔ We do not sell online. ✔ Our team will call you personally.
          </p>
        </div>
      </div>
    </section>
  );
}
