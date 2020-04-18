import Link from "next/link";

const Header = () => (
  <nav className="flex items-center justify-between flex-wrap p-8 container mx-auto">
    <div className="flex items-center flex-shrink-0 mr-8">
      <span className="font-bold text-2xl tracking-tight">Project YCRO</span>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-dark border-gray-700 hover:text-dark hover:border-dark">
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-lg lg:flex-grow">
        <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-dark mr-4">
          <Link href="/home">Home</Link>
        </div>
        <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-dark">
          <Link href="/about">About</Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
