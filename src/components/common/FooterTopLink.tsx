import Link from 'next/link';

interface FooterTopLinkTypes {
  text: string;
  href?: string;
}

const FooterTopLink = ({ text, href = '/newsletter' }: FooterTopLinkTypes) => {
  return (
    <Link
      href={href}
      className="text-[clamp(1rem,3vw,4rem)] hover:underline hover:opacity-70 pb-10 flex justify-center items-center"
    >
      {text}
    </Link>
  );
};

export default FooterTopLink;
