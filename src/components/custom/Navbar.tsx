import Link from 'next/link';

const Navbar: React.FC = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <div className="mx-auto transition-all bg-white/60 w-full h-20 relative top-0 border-b border-gray-200 z-50 ">
      <nav className="relative flex justify-around items-center px-4 md:px-12 py-4 max-w-7xl bg-white/60 w-full h-20 m-auto lg:py-2.5">
        <div className="grid gap-1">
          <Link href={'/'} className="text-lg font-extralight">
            teenage engineering
          </Link>
          <span className="text-xs text-gray-700">
            {new Date().getFullYear()} {months[new Date().getMonth()]}
          </span>
        </div>
        <div className="flex justify-center items-center gap-1">
          <img
            src={'/images/homepage/svg-image-21.svg'}
            alt=""
            loading="lazy"
            className=" brightness-0 size-20"
          />
          <div>
            <Link href={'/products'} className="text-lg font-extralight">
              teenage engineering
            </Link>

            <span className="grid *:text-xs">
              <Link href={'/store'}>store</Link>
              <Link href={'/store'}>visit store</Link>
              <Link href={'/store/checkout'}>checkout</Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
