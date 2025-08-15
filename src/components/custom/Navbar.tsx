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
      <nav className="relative flex justify-between items-center px-4 md:px-12 py-4 max-w-7xl bg-white/60 w-full h-20 m-auto lg:py-2.5">
        <Link href={'/'} className="grid gap-1">
          <h3 className="text-lg">teenage engineering</h3>
          <span className="text-gray-400">
            {new Date().getFullYear()} {months[new Date().getMonth()]}
          </span>
        </Link>
        <Link href={'/'} className="grid gap-1">
          <h3 className="text-lg">teenage engineering</h3>
          <span>
            {new Date().getFullYear()} {months[new Date().getMonth()]}
          </span>
        </Link>
        <Link href={'/'} className="grid gap-1">
          <h3 className="text-lg">teenage engineering</h3>
          <span>
            {new Date().getFullYear()} {months[new Date().getMonth()]}
          </span>
        </Link>
        <Link href={'/'} className="grid gap-1">
          <h3 className="text-lg">teenage engineering</h3>
          <span>
            {new Date().getFullYear()} {months[new Date().getMonth()]}
          </span>
        </Link>
        <Link href={'/'} className="grid gap-1">
          <h3 className="text-lg">teenage engineering</h3>
          <span>
            {new Date().getFullYear()} {months[new Date().getMonth()]}
          </span>
        </Link>
        <Link href={'/'} className="grid gap-1">
          <h3 className="text-lg">teenage engineering</h3>
          <span>
            {new Date().getFullYear()} {months[new Date().getMonth()]}
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
