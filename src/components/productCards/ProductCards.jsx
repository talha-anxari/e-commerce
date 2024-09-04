import React, { useContext, useEffect } from "react";
import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/CartSlice";
import { toast } from "react-toastify";

function ProductCards() {
  const context = useContext(myContext);
  const { mode, product, searchKey, setSearchKey, filterType, setFilterType, filterPrice, setFilterPrice } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  const addCart = (product) =>{
    dispatch(addToCart(product));
    toast.success('Add To Cart');
  };
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
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
          {/* {product.filter((obj) => obj.title.toLowerCase().includes(searchKey)).filter((obj) => obj.category.toLowerCase().includes(filterType)).map((item, index) => {
            const { title, price, category, imgUrl, kg } = item;
            return (
              <div key={index} className="p-4 md:w-1/4 drop-shadow-lg">
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
                      src={imgUrl} // Replace with your rice image URL
                      alt="Organic Basmati Rice"
                    />
                  </div>
                  <div className="p-5 border-t-2">
                    <h2
                      className={`tracking-widest text-xs title-font font-medium mb-1 ${
                        mode === "dark" ? "text-gray-400" : "text-gray-700"
                      }`}
                    >
                      {category}
                    </h2>
                    <h1
                      className={`title-font text-lg font-medium mb-3 ${
                        mode === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {title}
                    </h1>
                    <p
                      className={`leading-relaxed mb-3 ${
                        mode === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {price} <span className="font-semibold">/ {kg} kg</span>
                    </p>

                    <div className="flex justify-center">
                      <button
                      onClick={() => addCart(item)}
                        type="button"
                        className="focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full py-2"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })} */}
          {product
  .filter((obj) => {
    // Search filter
    const searchMatch = obj.title.toLowerCase().includes(searchKey.toLowerCase());

    // Category filter
    const categoryMatch = filterType ? obj.category.toLowerCase() === filterType.toLowerCase() : true;

    // Price filter - assuming you have a price filter, replace 'priceFilter' with your actual filter variable
    const priceMatch = filterPrice ? obj.price <= filterPrice : true;

    // Return true if all conditions are met
    return searchMatch && categoryMatch && priceMatch;
  })
  .map((item, index) => {
    const { title, price, category, imgUrl, kg } = item;
    return (
      <div key={index} className="p-4 md:w-1/4 drop-shadow-lg">
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
              src={imgUrl}
              alt="Organic Basmati Rice"
            />
          </div>
          <div className="p-5 border-t-2">
            <h2
              className={`tracking-widest text-xs title-font font-medium mb-1 ${
                mode === "dark" ? "text-gray-400" : "text-gray-700"
              }`}
            >
              {category}
            </h2>
            <h1
              className={`title-font text-lg font-medium mb-3 ${
                mode === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {title}
            </h1>
            <p
              className={`leading-relaxed mb-3 ${
                mode === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {price} <span className="font-semibold">/ {kg} kg</span>
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => addCart(item)}
                type="button"
                className="focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full py-2"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  })}

        </div>
      </div>
    </section>
  );
}

export default ProductCards;
