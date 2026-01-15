"use client";

import { useEffect, useState } from "react";

type Review = {
  name: string;
  text: string;
  rating: number;
};

const initialReviews: Review[] = [
  {
    name: "Rohit Sharma",
    text: "Very reliable pharmacy. Medicines are genuine and service is fast.",
    rating: 5,
  },
  {
    name: "Anjali Verma",
    text: "Helpful staff and quick response. They always call and confirm availability.",
    rating: 5,
  },
  {
    name: "Suresh Patil",
    text: "Easy ordering process and timely delivery. Highly recommended.",
    rating: 5,
  },
  {
    name: "Neha Kulkarni",
    text: "Good experience every time. Trusted pharmacy in this area.",
    rating: 5,
  },
  {
    name: "Amit Singh",
    text: "Staff is polite and availability is confirmed before delivery.",
    rating: 5,
  },
];

export default function Home() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [startIndex, setStartIndex] = useState(0);

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const visibleReviews = [
    reviews[startIndex],
    reviews[(startIndex + 1) % reviews.length],
    reviews[(startIndex + 2) % reviews.length],
  ];

  const addReview = () => {
    if (!name || !text) {
      alert("Please enter your name and review");
      return;
    }

    setReviews((prev) => [...prev, { name, text, rating }]);
    setName("");
    setText("");
    setRating(5);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-16">
        <div
          className="h-[70vh] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/pharmacy1.jpg')" }}
        >
          <div className="h-full w-full bg-gradient-to-r from-green-900/80 via-green-800/70 to-black/60 flex items-center">
            <div className="max-w-4xl mx-auto px-4 text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Infinity Plus Chemist & Druggist
              </h1>

              <p className="text-base md:text-lg mb-6 text-gray-200">
                Trusted local pharmacy in Vagator, Anjuna.
                Submit your medicine request and our team will call you
                to confirm availability and delivery.
              </p>

              <a
                href="/order"
                className="inline-block bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-lg font-medium"
              >
                Submit Medicine Request
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-green-600">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-4 justify-between text-white text-center md:text-left">
          <span className="font-semibold">✔ Genuine & Verified Medicines</span>
          <span className="font-semibold">✔ Personal Call Confirmation</span>
          <span className="font-semibold">✔ Trusted Local Pharmacy</span>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="bg-gradient-to-b from-green-50 via-white to-white pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              Customer Ratings & Reviews
            </h2>
            <p className="text-gray-600 text-lg">
              <span className="font-semibold text-green-600">4.8 ★</span> average rating
            </p>
          </div>

          {/* Reviews */}
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {visibleReviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-green-100
                           shadow-sm hover:shadow-lg hover:border-green-300 transition"
              >
                <div className="flex gap-1 text-yellow-500 text-lg mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <span key={i} className="text-gray-300">★</span>
                  ))}
                </div>

                <p className="text-gray-800 leading-relaxed mb-6">
                  “{review.text}”
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-700
                                  flex items-center justify-center font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-gray-900">
                    {review.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ADD REVIEW */}
          <div className="max-w-xl mx-auto bg-green-50 p-10 rounded-2xl shadow-md border border-green-200">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
              Add Your Review
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white text-gray-900 caret-green-600
                         border border-gray-300 p-3 rounded-lg mb-4
                         placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-green-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <textarea
              placeholder="Write your review"
              className="w-full bg-white text-gray-900 caret-green-600
                         border border-gray-300 p-3 rounded-lg mb-4
                         placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-green-500"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <div className="flex justify-center gap-2 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setRating(i + 1)}
                  className={`text-3xl ${
                    i + 1 <= rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>

            <button
              onClick={addReview}
              className="w-full bg-green-600 text-white py-3 rounded-lg
                         font-semibold hover:bg-green-700 transition"
            >
              Submit Review
            </button>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="bg-green-50 pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-8">
            <span className="inline-block bg-green-100 text-green-700
                             px-4 py-1 rounded-full text-sm font-semibold mb-3">
              Store Location
            </span>

            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Visit Our Store
            </h2>

            <p className="text-gray-600">
              Easily find us in Vagator, Anjuna
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-green-200 bg-white">
            <iframe
              src="https://www.google.com/maps?q=Infinity+Plus+Chemist+%26+Druggist+Vagator&output=embed"
              className="w-full h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>
    </>
  );
}
