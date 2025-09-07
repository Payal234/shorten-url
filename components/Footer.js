"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-purple-100 text-slate-700 pt-8 pb-4 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-purple-600 mb-2">BitLinks</h2>
          <p className="text-sm leading-relaxed text-slate-600">
            A modern, secure, and reliable URL shortener built for speed and simplicity.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-purple-700">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:text-purple-500 transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-purple-500 transition">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-purple-500 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-purple-700">Connect</h3>
          <div className="flex space-x-5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-purple-600 text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-purple-600 text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:contact@bitlinks.com"
              className="text-slate-500 hover:text-purple-600 text-xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="border-t border-purple-200 mt-8 pt-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} BitLinks. Created by <span className="text-purple-600 font-medium">Payal Dhobale</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
