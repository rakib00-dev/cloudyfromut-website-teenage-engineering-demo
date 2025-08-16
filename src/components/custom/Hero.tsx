import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className="grid place-items-center gap-15">
      <img
        src="/images/homepage/svg-image-10.svg"
        alt="svg-image-10.svg "
        className="w-3/5 mt-20"
      />
      <img
        src="/images/homepage/svg-image-11.svg"
        alt="svg-image-11.svg "
        className="w-4/5"
      />
      <img
        src="/images/homepage/free-pc-case.webp"
        alt="free-pc-case.webp "
        className="h-auto w-full"
      />
      <img
        src="/images/homepage/svg-image-12.svg"
        alt="svg-image-12.svg "
        className="px-10 md:px-40 w-full"
      />
      <img
        src="/images/homepage/svg-image-13.svg"
        alt="svg-image-13.svg "
        className="px-5 md:px-40 w-full"
      />
      <div className="grid gap-10 md:gap-20 md:py-20">
        <Link href={'/store/computer-1'}>
          <img
            src="/images/homepage/svg-image-14.svg"
            alt="svg-image-14.svg "
            className="px-25 md:px-40 w-full"
          />
        </Link>
        <Link
          href={
            'https://teenage.engineering/_img/689c82b9f8ec2b304f3a66dc_original.pdf'
          }
        >
          <img
            src="/images/homepage/svg-image-15.svg"
            alt="svg-image-15.svg "
            className="px-25 md:px-40 w-full"
          />
        </Link>
      </div>
      <img
        src="/images/homepage/svg-image-16.svg"
        alt="svg-image-16.svg "
        className="px-5 md:px-30 w-full md:pb-20"
      />
      <div className="w-full relative">
        <img
          src="/images/homepage/svg-image-17.svg"
          alt="svg-image-17.svg "
          className="w-1/45 absolute left-[35%] -top-[10%]"
        />
        <img
          src="/images/homepage/svg-image-19.svg"
          alt="svg-image-19.svg "
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
