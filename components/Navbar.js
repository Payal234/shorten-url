'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // install if not done: npm install lucide-react

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='bg-purple-700 text-white px-4 py-3'>
      <div className='flex justify-between items-center h-16'>
        <div className='font-bold text-lg'>
          <Link href="/">BitLinks</Link>
        </div>

        {/* Mobile menu button */}
        <div className='md:hidden' onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </div>

        {/* Desktop menu */}
        <ul className='hidden md:flex gap-5 items-center'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/shorten">Shorten</Link></li>
          <li><Link href="/contact">Contact us</Link></li>
          <li className='flex gap-2'>
            <Link href="/shorten">
              <button className='bg-purple-500 rounded-lg shadow-md px-3 py-1 font-bold cursor-pointer'>Try Now</button>
            </Link>
            <Link href="/github">
              <button className='bg-purple-500 rounded-lg shadow-md px-3 py-1 font-bold cursor-pointer'>Github</button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu items */}
      {open && (
        <ul className='flex flex-col gap-4 mt-4 md:hidden'>
          <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link href="/shorten" onClick={() => setOpen(false)}>Shorten</Link></li>
          <li><Link href="/contact" onClick={() => setOpen(false)}>Contact us</Link></li>
          <li className='flex gap-2'>
            <Link href="/shorten">
              <button onClick={() => setOpen(false)} className='bg-purple-500 rounded-lg shadow-md px-3 py-1 font-bold'>Try Now</button>
            </Link>
            <Link href="/github">
              <button onClick={() => setOpen(false)} className='bg-purple-500 rounded-lg shadow-md px-3 py-1 font-bold'>Github</button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
