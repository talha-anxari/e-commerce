import React, { useContext, useState } from "react";
import myContext from "../../../context/data/myContext";
// import { db } from '../../../firebase/FirebaseConfig'
// import { addDoc, collection } from 'firebase/firestore';
// import { onSnapshot, QuerySnapshot, Timestamp, query, orderBy } from 'firebase/firestore';
// import { toast } from 'react-toastify';
// import DashboardTab from "../dashboard/DashboardTab";

function AddProduct() {
  const context = useContext(myContext);
  const { products, setProducts, addProduct } = context;
  const [mode, setMode] = useState('light');

  // const toggleMode = () => {
  //   if(mode === 'light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#111827';
  //     document.body.style.color = 'white';
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     document.body.style.color = 'black';
  //   }
  // }
  // const [loading , setLoading] = useState(false);
  // const [products, setProducts] = useState({
  //   title: null||'',
  //   price: null||'',
  //   imgUrl: null||'',
  //   category: null||'',
  //   kg: null||'',
  //   time: Timestamp.now(),
  //   date: new Date().toLocaleString(
  //     'en-US',
  //     {
  //       month: 'short',
  //       day: '2-digit',
  //       year: 'numeric',
  //       }
  //   )
  // });
  // const [products, setProducts] = useState({
  //   title: '',
  //   price: '',
  //   imgUrl: '',
  //   category: '',
  //   kg: '',
  //   time: Timestamp.now(),
  //   date: new Date().toLocaleString('en-US', {
  //     month: 'short',
  //     day: '2-digit',
  //     year: 'numeric',
  //   }),
  // });


  // const addProduct = async (e) => {
  //   e.preventDefault()
  //   if(products.title == ' ' || products.price || products.imgUrl || products.category || products.kg){
  //    return toast.error('Please fill all the fields');
  //   }else{
  //     setLoading(true);
  //   try{
  //     const productRef = collection(db, 'products')
  //     let a = await addDoc(productRef, products).catch(e => {
  //     toast.error(e);

  //     }).then(e=>{
  //       toast.success('Add Product Successfully');
  //       console.log(a)
  //       getProductData()
  //     })
  //     setLoading(false);
  //   }catch(error){
  //     console.log(error)
  //     setLoading(false);
  //   }
  //   }
    
    
  // }
  // const addProduct = async (e) => {
  //   e.preventDefault();
  
  //   // Check if all fields are filled
  //   if (!products.title || !products.price || !products.imgUrl || !products.category || !products.kg) {
  //     return toast.error('Please fill all the fields');
  //   } else {
  //     setLoading(true);
  //     try {
  //       const productRef = collection(db, 'products');
  //       await addDoc(productRef, products);
  //       toast.success('Add Product Successfully');
  //       setTimeout(() => {
  //         window.location.href = '/dashboard'
  //       }, 800);
  //       getProductData(); // Fetch the updated product list
  //     } catch (error) {
  //       toast.error('Error adding product: ' + error.message);
  //       console.log('Error adding product:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  // };

  // const [product, setProduct] = useState([]);
  // const getProductData = async () => {
  //   setLoading(true);
  //   try {
  //     const q = query(
  //       collection(db, 'products'),
  //       orderBy('time')
  //     );
  //     const data = onSnapshot(q, (QuerySnapshot) => {
  //       let productArray = [];
  //       QuerySnapshot.forEach((doc) => {
  //         productArray.push({...doc.data(), id: doc.id})
  //       });
  //       setProduct(productArray);
  //       setLoading(false);
  //     });
  //     return () => data;
  
  //     console.log(products);
  //   } catch (error) {
  //     console.log("Error fetching product data:", error);
  //     setLoading(false)
  //   }
  // };
  //    useEffect(() => {
  //     getProductData();
  //    }, []);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg px-8 py-10 rounded-xl w-full max-w-md">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Add New Product
        </h1>
      
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
          onClick={addProduct}
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg w-full transition duration-300"
          >
            Add Product
          </button>
    
      </div>
    </div>

  );
}

export default AddProduct;


// import React, { useContext } from "react";
// import myContext from "../../../context/data/myContext";

// function AddProduct() {
//   const context = useContext(myContext);
//   const { products, setProducts, addProduct } = context;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addProduct(products); // Assuming addProduct is a function to add the product
//     setProducts({ title: "", price: "", imageUrl: "" }); // Resetting the form after submission
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg px-8 py-10 rounded-xl w-full max-w-md">
//         <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
//           Add New Product
//         </h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <input
//               type="text"
//               name="title"
//               value={products.title}
//               onChange={(e) => setProducts({ ...products, title: e.target.value })}
//               className="bg-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-400 transition duration-300 mb-2 px-3 py-2 w-full rounded-lg text-gray-800 placeholder-gray-500 outline-none"
//               placeholder="Product Title"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               name="price"
//               value={products.price}
//               onChange={(e) => setProducts({ ...products, price: e.target.value })}
//               className="bg-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-400 transition duration-300 mb-2 px-3 py-2 w-full rounded-lg text-gray-800 placeholder-gray-500 outline-none"
//               placeholder="Product Price"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               name="imageUrl"
//               value={products.imageUrl}
//               onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
//               className="bg-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-400 transition duration-300 mb-2 px-3 py-2 w-full rounded-lg text-gray-800 placeholder-gray-500 outline-none"
//               placeholder="Product Image URL"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
//           >
//             Add Product
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddProduct;
