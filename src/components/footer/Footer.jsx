import { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/data/myContext";

export default function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  


  return (
    <footer
      className="text-gray-600 body-font bg-gray-300"
      style={{
        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
        color: mode === "dark" ? "white" : "",
      }}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {/* Categories Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              RICE CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  to={"/basmati"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Basmati Rice
                </Link>
              </li>
              <li>
                <Link
                  to={"/sonamasoori"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Sona Masoori
                </Link>
              </li>
              <li>
                <Link
                  to={"/brownrice"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Brown Rice
                </Link>
              </li>
              <li>
                <Link
                  to={"/organicrice"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Organic Rice
                </Link>
              </li>
            </nav>
          </div>

          {/* Customer Service Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              CUSTOMER SERVICE
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  to={"/returnpolicy"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Contact Us
                </Link>
              </li>
            </nav>
          </div>

          {/* Services Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Shop Info
            </h2>
            <nav className="list-none mb-10">
              <li>
              <h4
              className="title-font font-medium text-gray-900 tracking-widest text-sm"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Shop Keeper
            </h4>
                <Link
                  to={"/privacypolicy"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Usman Ahmad
                </Link>
              </li>
              <li>
              <h4
              className="title-font font-medium text-gray-900 tracking-widest text-sm"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Address
            </h4>
                <Link
                  to={"/shipping"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Hussainabad
                </Link>
              </li>
              <li>
                <Link
                  to={"/faq"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  FAQs
                </Link>
              </li>
            </nav>
          </div>

          {/* Payment Options */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <img
              src="https://ecommerce-sk.vercel.app/pay.png" // Replace with a rice-themed payment image
              alt="Payment Methods"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="bg-gray-200"
        style={{
          backgroundColor: mode === "dark" ? "rgb(55 57 61)" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
          <Link to={"/"} className="flex">
            <div className="flex">
              <h1
                className="text-2xl font-bold text-black px-2 py-1 rounded"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Rice World
              </h1>
            </div>
          </Link>
          <p
            className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            © 2024 Rice World —{" "}
            <a
              href="https://www.riceworld.com"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              www.riceworld.com
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
