// import React from 'react';

// function UpdateProduct() {
//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//             <div className="bg-white shadow-lg px-8 py-10 rounded-xl w-full max-w-md">
//                 <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">Update Product</h1>
//                 <form>
//                     <div className="mb-4">
//                         <input
//                             type="text"
//                             name="title"
//                             className="bg-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-400 transition duration-300 mb-2 px-3 py-2 w-full rounded-lg text-gray-800 placeholder-gray-500 outline-none"
//                             placeholder="Product Title"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <input
//                             type="text"
//                             name="price"
//                             className="bg-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-400 transition duration-300 mb-2 px-3 py-2 w-full rounded-lg text-gray-800 placeholder-gray-500 outline-none"
//                             placeholder="Product Price"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <input
//                             type="text"
//                             name="imageurl"
//                             className="bg-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-400 transition duration-300 mb-2 px-3 py-2 w-full rounded-lg text-gray-800 placeholder-gray-500 outline-none"
//                             placeholder="Image URL"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <input
//                             type="text"
//                             name="category"
//                             className="bg-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-400 transition duration-300 mb-2 px-3 py-2 w-full rounded-lg text-gray-800 placeholder-gray-500 outline-none"
//                             placeholder="Product Category"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <textarea
//                             name="description"
//                             rows="5"
//                             className="bg-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-400 transition duration-300 mb-2 px-3 py-2 w-full rounded-lg text-gray-800 placeholder-gray-500 outline-none"
//                             placeholder="Product Description"
//                         ></textarea>
//                     </div>
//                     <button
//                         type="submit"
//                         className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg w-full transition duration-300">
//                         Update Product
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default UpdateProduct;

import React, { useContext } from "react";
import myContext from "../../../context/data/myContext";

function UpdateProduct() {
  const context = useContext(myContext);
  const { products, setProducts, updateProduct } = context;
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg px-8 py-10 rounded-xl w-full max-w-md">
        <div className="">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Update Product
        </h1>
        </div>
          <div className="mb-4">
            <input
              type="text"
              name="title"
              value={products.title
                 || ''}
              onChange={(e) => setProducts({ ...products, title: e.target.value })}
              className="bg-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-400 transition duration-300 mb-2 px-3 py-2 w-full rounded-lg text-gray-800 placeholder-gray-500 outline-none"
              placeholder="Product Title"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="price"
              value={products.price || ''}
              onChange={(e) => setProducts({ ...products, price: e.target.value })}
              className="bg-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-400 transition duration-300 mb-2 px-3 py-2 w-full rounded-lg text-gray-800 placeholder-gray-500 outline-none"
              placeholder="Product Price"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="imgUrl"
              value={products.imgUrl || ''}
              onChange={(e) => setProducts({ ...products, imgUrl: e.target.value })}
              className="bg-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-400 transition duration-300 mb-2 px-3 py-2 w-full rounded-lg text-gray-800 placeholder-gray-500 outline-none"
              placeholder="Image URL"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="category"
              value={products.category || ''}
              onChange={(e) => setProducts({ ...products, category: e.target.value })}
              className="bg-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-400 transition duration-300 mb-2 px-3 py-2 w-full rounded-lg text-gray-800 placeholder-gray-500 outline-none"
              placeholder="Product Category"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="Kilogram"
              value={products.kg || ''}
              onChange={(e) => setProducts({ ...products, kg: e.target.value })}
              className="bg-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-400 transition duration-300 mb-2 px-3 py-2 w-full rounded-lg text-gray-800 placeholder-gray-500 outline-none"
              placeholder="Kilogram"
            />
          </div>
          <button
            onClick={() => updateProduct()}
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg w-full transition duration-300"
          >
            Update Product
          </button>
      </div>
    </div>
  );
}

export default UpdateProduct;
