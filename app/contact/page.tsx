export default function Contact() {
  return (
    <main className="bg-[#f8faf9]">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-600">
        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-extrabold mb-4">
            Contact Infinity Plus
          </h1>
          <p className="text-green-100 text-lg">
            We’re here to help with medicines, availability, and delivery
            details. Reach out anytime.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* LEFT INFO */}
          <div className="space-y-6 border-l-4 border-green-600 pl-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Get in Touch
            </h2>

            <p className="text-gray-700">
              Infinity Plus Chemist & Druggist is a trusted local pharmacy
              in Vagator, Anjuna. Call us or visit the store for quick
              assistance.
            </p>

            <div className="space-y-4 text-gray-700">
              <p>
                <strong className="text-gray-900">📍 Address:</strong>
                <br />
                Charvi Reemz, Dmello Vaddo,<br />
                Anjuna, Goa 403509
              </p>

              <p>
                <strong className="text-gray-900">📞 Phone:</strong>
                <br />
                <a
                  href="tel:9699520383"
                  className="text-green-700 font-medium hover:underline"
                >
                  96995 20383
                </a>
              </p>

              <p>
                <strong className="text-gray-900">🕒 Store Hours:</strong>
                <br />
                Open daily · Closes at 11:30 PM
              </p>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="tel:9699520383"
                className="bg-green-600 hover:bg-green-700
                           text-white px-6 py-3 rounded-lg
                           font-semibold transition"
              >
                Call Now
              </a>

              <a
                href="/order"
                className="bg-white border-2 border-green-600
                           text-green-700 px-6 py-3 rounded-lg
                           font-semibold hover:bg-green-50 transition"
              >
                Order Medicines
              </a>
            </div>
          </div>

          {/* MAP */}
          <div className="rounded-xl overflow-hidden shadow-lg border">
            <iframe
              title="Infinity Plus Chemist & Druggist Location"
              src="https://www.google.com/maps?q=Infinity+Plus+Chemist+%26+Druggist+Vagator+Anjuna+Goa&output=embed"
              className="w-full h-[350px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* SUPPORT CTA */}
      <section className="py-20 bg-green-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help With Medicines?
          </h2>
          <p className="text-gray-600 mb-6">
            Submit your medicine request online and our team will contact
            you to confirm availability and delivery details.
          </p>

          <a
            href="/order"
            className="inline-block bg-green-600 hover:bg-green-700
                       text-white px-8 py-3 rounded-lg
                       font-semibold transition"
          >
            Submit Medicine Request
          </a>
        </div>
      </section>
    </main>
  );
}
