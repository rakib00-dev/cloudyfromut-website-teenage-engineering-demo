import ProductsNavbar from '@/components/custom/products/ProductsNavbar';
import ProductsFooter from '@/components/custom/products/ProductsFooter';
import React from 'react';

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ProductsNavbar />
      {children}
      <ProductsFooter />
    </>
  );
}
