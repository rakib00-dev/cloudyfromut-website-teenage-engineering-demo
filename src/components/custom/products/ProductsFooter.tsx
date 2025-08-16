'use client';

import Link from 'next/link';
import React from 'react';
import FooterTopLink from '../../common/FooterTopLink';

const ProductsFooter = () => {
  const countries = [
    'united states',
    'portugal',
    'puerto rico',
    'qatar',
    'romania',
    'saudi arabia',
    'serbia',
    'singapore',
    'slovakia',
    'slovenia',
    'south africa',
    'spain',
    'sweden',
    'switzerland',
    'taiwan',
    'thailand',
    'türkiye',
    'united arab emirates',
    'united kingdom',
    'uruguay',
    'new',
  ];

  const links = [
    { text: 'newsletter', to: '/newsletter' },
    { text: 'retailers', to: '/retailers' },
    { text: 'store', to: '/store' },
    { text: 'terms', to: '/terms' },
    { text: 'press', to: '/press' },
    { text: 'contact', to: '/contact' },
  ];

  return (
    <div className="w-full">
      <FooterTopLink text="join our newsletter" />
      <div className="flex place-items-center justify-between md:items-center mx-2 md:mx-12 py-2 md:py-6 border-t border-gray-500 gap-2 ">
        <span className="text-sm text-gray-600">
          <select
            name="countries"
            id="countries"
            className="text-[clamp(.4rem,1vw,1rem)]"
          >
            {countries.map((e) => (
              <option value={e} className="capitalize text-gray-800" key={e}>
                {e}
              </option>
            ))}
          </select>
        </span>
        <div className="text-sm flex gap-0.5 md:gap-4 text-[clamp(.1rem,1vw,1rem)]">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.to}
              className="text-gray-600 hover:underline"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <span className="flex gap-5 text-gray-800 font-bold text-[clamp(.2rem,1vw,1rem)]">
          ©{new Date().getFullYear()} teenage engineering
        </span>
      </div>
    </div>
  );
};

export default ProductsFooter;
