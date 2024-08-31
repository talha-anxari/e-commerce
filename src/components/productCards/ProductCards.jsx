import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function ProductCards() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <section
      className={`body-font ${mode === "dark" ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            className={`sm:text-3xl text-2xl font-semibold title-font mb-2 ${
              mode === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Our Finest Rice Collection
          </h1>
          <div className="h-1 w-20 bg-green-600 rounded"></div>
        </div>

        <div className="flex flex-wrap -m-4">
          {/* Card 1 */}
          <div className="p-4 md:w-1/4 drop-shadow-lg">
            <div
              className={`h-full border-2 transition-shadow duration-300 ease-in-out border-opacity-60 rounded-2xl overflow-hidden ${
                mode === "dark"
                  ? "bg-gray-800 border-gray-700 hover:shadow-gray-700"
                  : "bg-white border-gray-200 hover:shadow-gray-200"
              }`}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className="rounded-2xl w-full h-80 p-2 hover:scale-105 transition-transform duration-300 ease-in-out"
                  src="https://img.freepik.com/free-photo/dish-with-rice_144627-18114.jpg?t=st=1724903466~exp=1724907066~hmac=64eb752d5b96ffc8b8d9974e6bb752ca6dd039f180ccc06dd09cd725dd8ce520&w=900" // Replace with your rice image URL
                  alt="Organic Basmati Rice"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className={`tracking-widest text-xs title-font font-medium mb-1 ${
                    mode === "dark" ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  Premium Rice
                </h2>
                <h1
                  className={`title-font text-lg font-medium mb-3 ${
                    mode === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Organic Basmati Rice
                </h1>
                <p
                  className={`leading-relaxed mb-3 ${
                    mode === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Price 500 / kg
                </p>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-4 md:w-1/4 drop-shadow-lg">
            <div
              className={`h-full border-2 transition-shadow duration-300 ease-in-out border-opacity-60 rounded-2xl overflow-hidden ${
                mode === "dark"
                  ? "bg-gray-800 border-gray-700 hover:shadow-gray-700"
                  : "bg-white border-gray-200 hover:shadow-gray-200"
              }`}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className="rounded-2xl w-full h-80 p-2 hover:scale-105 transition-transform duration-300 ease-in-out"
                  src="https://img.freepik.com/premium-photo/free-creative-rice-plate-recipe-collection_984027-115165.jpg?w=2000" // Replace with your rice image URL
                  alt="Brown Rice"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className={`tracking-widest text-xs title-font font-medium mb-1 ${
                    mode === "dark" ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  Healthy Choice
                </h2>
                <h1
                  className={`title-font text-lg font-medium mb-3 ${
                    mode === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Brown Rice
                </h1>
                <p
                  className={`leading-relaxed mb-3 ${
                    mode === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Price 450 / kg
                </p>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-4 md:w-1/4 drop-shadow-lg">
            <div
              className={`h-full border-2 transition-shadow duration-300 ease-in-out border-opacity-60 rounded-2xl overflow-hidden ${
                mode === "dark"
                  ? "bg-gray-800 border-gray-700 hover:shadow-gray-700"
                  : "bg-white border-gray-200 hover:shadow-gray-200"
              }`}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className="rounded-2xl w-full h-80 p-2 hover:scale-105 transition-transform duration-300 ease-in-out"
                  src="https://img.freepik.com/free-psd/close-up-rice-isolated_23-2151656293.jpg?t=st=1724903764~exp=1724907364~hmac=0d5a253af3d417b32eb9d07eca8f010144490f052ca482e9dd18912696fb1b7c&w=740" // Replace with your rice image URL
                  alt="Sona Masoori Rice"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className={`tracking-widest text-xs title-font font-medium mb-1 ${
                    mode === "dark" ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  Popular Choice
                </h2>
                <h1
                  className={`title-font text-lg font-medium mb-3 ${
                    mode === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Sona Masoori Rice
                </h1>
                <p
                  className={`leading-relaxed mb-3 ${
                    mode === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Price 400 / kg
                </p>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-4 md:w-1/4 drop-shadow-lg">
            <div
              className={`h-full border-2 transition-shadow duration-300 ease-in-out border-opacity-60 rounded-2xl overflow-hidden ${
                mode === "dark"
                  ? "bg-gray-800 border-gray-700 hover:shadow-gray-700"
                  : "bg-white border-gray-200 hover:shadow-gray-200"
              }`}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className="rounded-2xl w-full h-80 p-2 hover:scale-105 transition-transform duration-300 ease-in-out"
                  src="https://img.freepik.com/premium-photo/bowl-with-cooked-rice-table_1195965-11127.jpg?w=2000" // Replace with your rice image URL
                  alt="Jasmine Rice"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className={`tracking-widest text-xs title-font font-medium mb-1 ${
                    mode === "dark" ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  Aromatic Delight
                </h2>
                <h1
                  className={`title-font text-lg font-medium mb-3 ${
                    mode === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Jasmine Rice
                </h1>
                <p
                  className={`leading-relaxed mb-3 ${
                    mode === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Price 550 / kg
                </p>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCards;
