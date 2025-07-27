"use client";

// import { Link } from "lucide-react";
import React from "react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-screen px-4 py-12 bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8 sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
          Welcome to <span className="font-semibold text-purple-600">BitLinks</span>, your go-to URL shortener designed for simplicity, speed, and reliability. Whether you re a developer, marketer, or just a casual internet user, BitLinks helps you shorten, manage, and track links effortlessly.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
          Our mission is to make sharing long URLs easy and efficient. We aim to offer a secure and responsive experience with a clean and user-friendly interface. Our system is backed by MongoDB and built using modern frameworks to ensure performance and scalability.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed text-justify">
          We believe in open access, privacy, and speed. Whether you are managing links for your portfolio, products, or personal blog — BitLinks is made to serve you.
        </p>

        <div className="mt-10 text-center">
          <span className="text-purple-600 font-semibold">Need help?</span>
          <Link
            href="/contact"
            className="text-purple-700 font-medium hover:underline"
          >
            Contact us here →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
