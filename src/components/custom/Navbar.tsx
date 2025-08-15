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
    <div className="mx-auto transition-all w-full h-20 relative top-0 z-50 ">
      <nav className="relative flex justify-around items-start top-0 px-4 md:px-12 py-4 max-w-7xl w-full h-20 m-auto lg:py-2.5">
        <div className="grid gap-1">
          <Link href={'/'} className="text-xl font-extralight">
            teenage engineering
          </Link>
          <span className="text-xs text-gray-700">
            {new Date().getFullYear()} {months[new Date().getMonth()]}
          </span>
        </div>
        <div className="grid gap-1">
          <Link href={'/products'} className="text-xl font-extralight">
            products
          </Link>

          <span className="grid *:text-xs">
            <Link href={'/products/audio-&-synthesizers'}>
              audio & synthesizers designs
            </Link>
            <Link href={'/products/wireless-speakers'}>
              audio & synthesizers
            </Link>
            <Link href={'/designs'}>designs</Link>
          </span>
        </div>
        <div className="flex justify-center items-start gap-1">
          <img
            src={'/images/homepage/svg-image-21.svg'}
            alt=""
            loading="lazy"
            className=" brightness-0 size-20"
          />
          <div>
            <Link href={'/products'} className="text-xl font-extralight">
              store
            </Link>

            <span className="grid *:text-xs">
              <Link href={'/store'}>visit store</Link>
              <Link href={'/store/checkout'}>checkout</Link>
            </span>
          </div>
        </div>
        <div className="flex justify-center items-start gap-1 ">
          <div className="h-40 w-30">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 80">
              <path
                className="fill"
                d="M75,70H25V10h50V70z M70,15H30v37.5h40V15z"
              ></path>
              <path
                className="line"
                fill="none"
                stroke-width="0.5"
                stroke-miterlimit="10"
                d="M75,70H25V10h50V70z M70,15H30v37.5h40V15z"
              ></path>
            </svg>
          </div>

          <div>
            <Link href={'/now'} className="text-xl font-extralight">
              now
            </Link>

            <span className="grid *:text-xs">
              <Link href={'/newsletter'}>newsletter</Link>
              <Link href={'instagram.com/teenageengineering'}>instagram</Link>
              <Link href={'/now'}>bog</Link>
            </span>
          </div>
        </div>

        <div className="flex justify-center items-start gap-1 ">
          <div className="h-40 w-30">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 40">
              <path
                className="fill"
                d="M47.5,10H75v27.5H47.5V10z M18.878,37.5h27.5V10h-27.5V37.5z"
              />
              <path
                className="line"
                fill="none"
                stroke="none"
                strokeWidth="0.5"
                strokeMiterlimit="10"
                d="M75,37.5H18.878V10H75V37.5z M46.939,10v27.5"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 40">
              <path
                className="fill head_c8b"
                d="M63.525,23.973c-1.324,0.221-2.096,1.434-1.986,2.648c0.221,1.324,1.434,2.096,2.648,1.986 c1.324-0.221,2.096-1.434,1.986-2.648C65.952,24.635,64.738,23.753,63.525,23.973z M68.931,14.043 c0.221,1.324,1.434,2.096,2.648,1.986c1.324-0.221,2.096-1.434,1.986-2.648c-0.221-1.324-1.434-2.096-2.648-1.986 C69.593,11.506,68.71,12.719,68.931,14.043z M66.835,10.402c0.772,0.993,2.317,1.103,3.31,0.331 c0.993-0.772,1.103-2.317,0.331-3.31s-2.317-1.103-3.31-0.331S65.952,9.409,66.835,10.402z M63.083,8.417 c1.214,0.441,2.538-0.11,2.979-1.324c0.441-1.214-0.11-2.538-1.324-2.979c-1.214-0.441-2.538,0.11-2.979,1.324 C61.318,6.651,61.87,7.975,63.083,8.417z M58.891,8.527c1.324-0.221,2.096-1.434,1.986-2.648c-0.221-1.324-1.434-2.096-2.648-1.986 c-1.324,0.221-2.096,1.434-1.986,2.648C56.464,7.865,57.677,8.747,58.891,8.527z M55.36,10.733c0.993-0.772,1.103-2.317,0.331-3.31 c-0.772-0.993-2.317-1.103-3.31-0.331c-0.993,0.772-1.103,2.317-0.331,3.31C52.933,11.395,54.367,11.506,55.36,10.733z M53.374,14.374c0.441-1.214-0.11-2.538-1.324-2.979c-1.214-0.441-2.538,0.11-2.979,1.324c-0.441,1.214,0.11,2.538,1.324,2.979 C51.499,16.14,52.933,15.588,53.374,14.374z M53.485,18.567c-0.221-1.324-1.434-2.096-2.648-1.986 c-1.324,0.221-2.096,1.434-1.986,2.648c0.11,1.214,1.434,2.096,2.648,1.986C52.823,20.994,53.705,19.781,53.485,18.567z M55.581,22.098c-0.772-0.993-2.317-1.103-3.31-0.331s-1.103,2.317-0.331,3.31c0.772,0.993,2.317,1.103,3.31,0.331 C56.353,24.635,56.464,23.091,55.581,22.098z M59.332,24.083c-1.214-0.441-2.538,0.11-2.979,1.324 c-0.441,1.214,0.11,2.538,1.324,2.979c1.214,0.441,2.538-0.11,2.979-1.324C61.097,25.959,60.546,24.525,59.332,24.083z M71.027,25.959c-1.986,1.986-4.524,3.42-7.503,3.862c-7.503,1.214-14.564-3.862-15.888-11.364 c-1.324-7.503,3.862-14.564,11.364-15.777s14.564,3.862,15.888,11.364c0.552,3.531-0.221,6.951-2.096,9.709l-0.441-0.331 c-0.221-0.11-0.441-0.11-0.662-0.11c-0.221,0.11-0.552,0.221-0.772,0.221c-1.324,0.221-2.648-0.441-3.2-1.545 c-0.11-0.221-0.331-0.331-0.552-0.221c-0.221,0.11-0.441,0.441-0.331,0.662C67.497,24.304,69.041,25.628,71.027,25.959z M63.525,15.919c-0.221-1.324-1.434-2.096-2.648-1.986c-1.324,0.221-2.096,1.434-1.986,2.648c0.221,1.324,1.434,2.096,2.648,1.986 C62.863,18.346,63.745,17.133,63.525,15.919z"
                fill="black"
                stroke="#000000"
                stroke-width="0.5"
              />

              <path
                className="line head_c8b"
                d="M63.558,24.204 c-1.192,0.199-1.887,1.291-1.787,2.383c0.199,1.192,1.291,1.887,2.383,1.787c1.192-0.199,1.887-1.291,1.787-2.383 C65.742,24.799,64.65,24.005,63.558,24.204z M69.162,14.01c0.199,1.192,1.291,1.887,2.383,1.787 c1.192-0.199,1.887-1.291,1.787-2.383c-0.199-1.192-1.291-1.887-2.383-1.787C69.757,11.726,68.963,12.819,69.162,14.01z M67.014,10.254c0.695,0.894,2.085,0.993,2.979,0.298s0.993-2.085,0.298-2.979c-0.695-0.894-2.085-0.993-2.979-0.298 C66.419,7.97,66.22,9.36,67.014,10.254z M63.166,8.201c1.092,0.397,2.284-0.099,2.681-1.192c0.397-1.092-0.099-2.284-1.192-2.681 c-1.092-0.397-2.284,0.099-2.681,1.192C61.577,6.613,62.074,7.804,63.166,8.201z M58.858,8.296 c1.192-0.199,1.887-1.291,1.787-2.383c-0.199-1.192-1.291-1.887-2.383-1.787c-1.192,0.199-1.887,1.291-1.787,2.383 C56.673,7.701,57.765,8.495,58.858,8.296z M55.211,10.551c0.894-0.695,0.993-2.085,0.298-2.979 c-0.695-0.894-2.085-0.993-2.979-0.298c-0.894,0.695-0.993,2.085-0.298,2.979C53.027,11.147,54.318,11.246,55.211,10.551z M53.159,14.292c0.397-1.092-0.099-2.284-1.192-2.681c-1.092-0.397-2.284,0.099-2.681,1.192c-0.397,1.092,0.099,2.284,1.192,2.681 C51.471,15.88,52.762,15.384,53.159,14.292z M53.254,18.6c-0.199-1.192-1.291-1.887-2.383-1.787 c-1.192,0.199-1.887,1.291-1.787,2.383s1.291,1.887,2.383,1.787C52.658,20.785,53.453,19.692,53.254,18.6z M55.403,22.246 c-0.695-0.894-2.085-0.993-2.979-0.298c-0.894,0.695-0.993,2.085-0.298,2.979c0.695,0.894,2.085,0.993,2.979,0.298 C56.098,24.53,56.197,23.14,55.403,22.246z M59.249,24.299c-1.092-0.397-2.284,0.099-2.681,1.192 c-0.397,1.092,0.099,2.284,1.192,2.681c1.092,0.397,2.284-0.099,2.681-1.192C60.838,25.987,60.342,24.696,59.249,24.299z M71.027,25.959c-1.986,1.986-4.524,3.42-7.503,3.862c-7.503,1.214-14.564-3.862-15.888-11.364 c-1.324-7.503,3.862-14.564,11.364-15.777s14.564,3.862,15.888,11.364c0.552,3.531-0.221,6.951-2.096,9.709l-0.441-0.331 c-0.221-0.11-0.441-0.11-0.662-0.11c-0.221,0.11-0.552,0.221-0.772,0.221c-1.324,0.221-2.648-0.441-3.2-1.545 c-0.11-0.221-0.331-0.331-0.552-0.221c-0.221,0.11-0.441,0.441-0.331,0.662C67.497,24.304,69.041,25.628,71.027,25.959z M63.294,15.952c-0.199-1.192-1.291-1.887-2.383-1.787c-1.192,0.199-1.887,1.291-1.787,2.383c0.199,1.192,1.291,1.887,2.383,1.787 C62.698,18.137,63.493,17.044,63.294,15.952z"
                fill="none"
                stroke="#000000"
                stroke-width="0.5"
                stroke-miterlimit="10"
              />
            </svg>
          </div>

          <div>
            <Link href={'/guides'} className="text-xl font-extralight">
              support
            </Link>

            <span className="grid *:text-xs">
              <Link href={'/guides'}>guides</Link>
              <Link href={'/downloads'}>downloads</Link>
              <Link href={'https://suprot.teeange.engineering'}>
                support port
              </Link>
            </span>
          </div>
        </div>
        <div className="flex justify-center items-start gap-1 ">
          <span className="grid *:text-[.4rem]">
            <span className="s jp jph">10代工学は未来の製品と</span>
            <span className="s jp jph">コミュニケーションを生</span>
            <span className="s jp jph">み出すスタジオです。</span>
            <span className="s jp jph">私たちのミッションは</span>
            <span className="s jp jph">先端工学を用いて上質で</span>
            <span className="s jp jph">機能的なデザインの</span>
            <span className="s jp jph">製品を作り出すことです。</span>
            <span className="s jp jph">是非、新たなスタイルで</span>
            <span className="s jp jph">音楽をお楽しみください。</span>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
