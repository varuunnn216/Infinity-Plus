export default function About() {
  return (
    <main className="bg-[#f8faf9]">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-600">
        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-extrabold mb-4">
            About Infinity Plus
          </h1>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            A trusted neighborhood pharmacy serving Vagator and Anjuna
            with genuine medicines, reliable service, and personal care.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="border-l-4 border-green-600 pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Infinity Plus Chemist & Druggist is a locally owned pharmacy
              located in Vagator, Anjuna, Goa. We provide authentic medicines,
              healthcare essentials, and dependable support to our community.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to make healthcare access easy while ensuring
              safety, transparency, and a personal touch in every interaction.
            </p>
          </div>

          <div className="bg-green-600 text-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-semibold text-xl mb-4">
              Our Promise
            </h3>
            <ul className="space-y-3 text-green-100">
              <li>✔ Genuine & verified medicines</li>
              <li>✔ Honest pricing & clear communication</li>
              <li>✔ Personal assistance for every order</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">
            How We Help You
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Simple Ordering",
                text: "Submit your medicine request online or contact us directly without complicated steps.",
              },
              {
                title: "Personal Confirmation",
                text: "Our team personally verifies medicine availability and contacts you to confirm details.",
              },
              {
                title: "Trusted Delivery",
                text: "Medicines are delivered safely and on time with complete transparency.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border-t-4 border-green-600 p-6 rounded-xl shadow-md"
              >
                <h3 className="font-semibold text-lg mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">
            Why Choose Infinity Plus
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Genuine and verified medicines",
              "Experienced and helpful staff",
              "Local pharmacy you can trust",
              "Clear communication and honest service",
              "Focused on long-term customer relationships",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-green-50 p-4 rounded-lg border border-green-100"
              >
                <span className="text-green-700 text-lg">✔</span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-700">
        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Your Health, Our Priority
          </h2>
          <p className="text-green-100 mb-6">
            Whether you need daily medicines or healthcare essentials,
            Infinity Plus is here to support you.
          </p>

          <a
            href="/order"
            className="inline-block bg-white text-green-700
                       px-8 py-3 rounded-lg font-semibold
                       hover:bg-green-100 transition"
          >
            Order Medicines
          </a>
        </div>
      </section>
    </main>
  );
}
