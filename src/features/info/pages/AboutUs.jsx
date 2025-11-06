// src/pages/AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 dark:bg-[#1a1a1a] text-gray-800 dark:text-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* === HEADER === */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About <span className="text-secondary dark:text-primary">Us</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Welcome to <strong>meem</strong> — your trusted destination for
            quality, creativity, and exceptional service. We combine design,
            technology, and heart to make online shopping personal again.
          </p>
        </section>

        {/* === OUR MISSION === */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold text-secondary dark:text-primary">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            At <strong>meem</strong>, our mission is simple yet powerful:
          </p>
          <blockquote className="italic border-l-4 border-indigo-500 pl-4 text-lg text-gray-700 dark:text-gray-200">
            “To deliver a seamless and inspiring shopping experience through
            quality, authenticity, and innovation.”
          </blockquote>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We’re not just another e-commerce platform — we’re a community.
            Every decision we make revolves around <strong>you</strong>, our
            customer.
          </p>
        </section>

        {/* === WHAT WE OFFER === */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold text-secondary dark:text-primary">
            What We Offer
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>
              🛍️ <strong>Fashion & Apparel:</strong> Contemporary clothing for
              every style.
            </li>
            <li>
              💻 <strong>Electronics & Gadgets:</strong> Reliable tech to keep
              you connected.
            </li>
            <li>
              🏠 <strong>Home & Living:</strong> Modern essentials to elevate
              your everyday comfort.
            </li>
            <li>
              🎁 <strong>Lifestyle Accessories:</strong> Small details that make
              a big impact.
            </li>
          </ul>
        </section>

        {/* === OUR PROMISE === */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold text-secondary dark:text-primary">
            Our Promise
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We stand by our products and our customers. Every item in our store
            is chosen with care to meet our standards of:
          </p>
          <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Quality: Only the best materials and craftsmanship.</li>
            <li>Transparency: Clear information and honest pricing.</li>
            <li>Sustainability: A commitment to eco-friendly practices.</li>
            <li>Customer Care: Responsive support, anytime.</li>
          </ul>
        </section>

        {/* === THE TEAM === */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold text-primary">
            The People Behind the Brand
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Behind every order, design, and feature is a passionate team devoted
            to making your experience exceptional. From creative curators to
            developers and support heroes — we all share one mission:
            <strong> your satisfaction.</strong>
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Integrity and purpose in everything we do.</li>
            <li>Meaningful relationships with our customers.</li>
            <li>Continuous innovation and improvement.</li>
            <li>Giving back to the community that supports us.</li>
          </ul>
        </section>

        {/* === OUR STORY === */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold text-secondary dark:text-primary">
            Our Story So Far
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            It all started with a simple frustration — endless browsing, poor
            quality, and impersonal shopping experiences. We wanted to change
            that.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            From a small home office to a thriving online marketplace, our
            journey has been built on{" "}
            <strong>trust, creativity, and connection.</strong> Today, we’re
            proud to serve thousands of customers worldwide — and we’re just
            getting started.
          </p>
        </section>

        {/* === JOIN US === */}
        <section className="text-center space-y-4 pt-8">
          <h2 className="text-3xl font-semibold text-secondary dark:text-primary">
            Join Our Journey
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            At <strong>meem</strong>, you’re more than a customer — you’re part
            of our story. Follow us, share your experience, and help redefine
            what online shopping feels like.
          </p>
          <div className="space-y-2">
            <p>
              📧 <strong>Email:</strong> support@meem.com
            </p>
            <p>
              🌐 <strong>Website:</strong> www.meem.com
            </p>
            <p>
              📍 <strong>Headquarters:</strong> Cairo, Egypt
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
