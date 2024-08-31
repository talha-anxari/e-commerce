import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { addDoc, collection } from 'firebase/firestore/lite';
import { db } from '../../firebase/FirebaseConfig';
import { onSnapshot, QuerySnapshot, Timestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
function myState (props) { 

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#111827';
      document.body.style.color = 'white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  const [loading , setLoading] = useState(false);
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imgUrl: null,
    category: null,
    kg: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      'en-US',
      {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        }
    )
  });

  const addProduct = async () => {
    if(products.title == null || products.price || products.imgUrl || products.category || products.kg){
      return toast.error('Please fill all the fields');
    }
    setLoading(true);
    try{
      const productRef = collection(db, 'products');
      await addDoc(productRef, products)
      toast.success('Add Product Successfully');
      getProductData()
      // closeModal()
      setLoading(false);
    }catch(error){
      console.log(error)
      setLoading(false);
    }
    
  }

  const [product, setProduct] = useState([]);
const getProductData = async () => {
  setLoading(true);
  try {
    const q = query(
      collection(db, 'products'),
      orderBy('time')
    );
    const data = onSnapshot(q, (QuerySnapshot) => {
      let productArray = [];
      QuerySnapshot.forEach((doc) => {
        productArray.push({...doc.data(), id: doc.id})
      });
      setProduct(productArray);
      setLoading(false);
    });
    return () => data;

//     console.log(products);
  } catch (error) {
    // console.log("Error fetching product data:", error);
    setLoading(false)
  }
};
   useEffect(() => {
    getProductData();
   }, []);

  
  return (
    <MyContext.Provider value={{mode, toggleMode, loading, setLoading, products, setProducts, addProduct, product}}>
        {props.children}
    </MyContext.Provider>
  )
}

export default myState;

// import React, { useState } from 'react';
// import MyContext from './myContext';
// // import { toast } from 'react-toastify';
// // import { addDoc, collection, query, getDocs, orderBy, Timestamp } from 'firebase/firestore';
// // import { db } from '../../firebase/FirebaseConfig' // Correct imports from Firestore
//  // Ensure correct import of Firebase configurations

// const MyState = (props) => {
//   const [mode, setMode] = useState('light');

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = '#111827';
//       document.body.style.color = 'white';
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       document.body.style.color = 'black';
//     }
//   };

//   const [loading, setLoading] = useState(false);
//   const [products, setProducts] = useState({
//     title: '',
//     price: '',
//     imgUrl: '',
//     category: '',
//     kg: '',
//     time: Timestamp.now(),
//     date: new Date().toLocaleString('en-US', {
//       month: 'short',
//       day: '2-digit',
//       year: 'numeric',
//     }),
//   });

  // const addProduct = async () => {
  //   if (
  //     !products.title ||
  //     !products.price ||
  //     !products.imgUrl ||
  //     !products.category ||
  //     !products.kg
  //   ) {
  //     return toast.error('Please fill all the fields');
  //   }
  //   setLoading(true);
  //   try {
  //     const productRef = collection(db, 'products');
  //     await addDoc(productRef, products);
  //     toast.success('Product added successfully');
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error('Failed to add product');
  //     setLoading(false);
  //   }
  // };
  // const addProduct = async () => {
  //   if (products.title == null || products.price == null || products.imgUrl == null || products.category == null || products.kg == null) {
  //     return toast.error('Please fill all fields')
  //   }
  //   const productRef = collection(db, "products")
  //   setLoading(true)
  //   try {
  //     await addDoc(productRef, products)
  //     toast.success("Product Add successfully")
  //     getProductData()
  //     closeModal()
  //     setLoading(false)
  //   } catch (error) {
  //     console.log(error)
  //     setLoading(false)
  //   }
  //   setProducts("")
  // }

  // const [product, setProduct] = useState([]);

  // const getProductData = async () => {
  //   try {
  //     const q = query(collection(db, 'products'), orderBy('time'));

  //     // Fetch the products from Firestore
  //     const querySnapshot = await getDocs(q);
  //     const fetchedProducts = querySnapshot.docs.map((doc) => doc.data());

  //     // Set the fetched products to state
  //     setProductList(fetchedProducts);
  //     console.log(fetchedProducts);
  //   } catch (error) {
  //     console.log('Error fetching product data:', error);
  //   }
  // };

    // ****** get product
    // const getProductData = async () => {
    //   setLoading(true)
    //   try {
    //     const q = query(
    //       collection(fireDb, "products"),
    //       orderBy("time"),
    //       // limit(5)
    //     );
    //     const data = onSnapshot(q, (QuerySnapshot) => {
    //       let productsArray = [];
    //       QuerySnapshot.forEach((doc) => {
    //         productsArray.push({ ...doc.data(), id: doc.id });
    //       });
    //       setProduct(productsArray)
    //       setLoading(false);
    //     });
    //     return () => data;
    //   } catch (error) {
    //     console.log(error)
    //     setLoading(false)
    //   }
    // }
  
    // useEffect(() => {
    //   getProductData();
    // }, []);

  // return (
  //   <MyContext.Provider
  //     value={{
  //       mode,
  //       toggleMode,
  //       loading,
  //       setLoading,
  //       addProduct,
  //       products,
  //       setProducts,
  //       getProductData,
  //       productList,
  //     }}
  //   >
  //     {props.children}
  //   </MyContext.Provider>
  // );
//   return (
//     <MyContext.Provider value={{ 
//       mode, toggleMode, loading,setLoading }}>
//       {props.children}
//     </MyContext.Provider>
//   )
// };

// export default MyState;


// import React, { useEffect, useState } from 'react'
// import MyContext from './myContext';
// import { db } from '../../firebase/FirebaseConfig';
// import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
// import { toast } from 'react-toastify';


// function MyState(props) {
//   const [mode, setMode] = useState('light');  
//   const [loading, setLoading] = useState(false); 

//   const toggleMode = () => {
//     if(mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor = '#111827';
//       document.body.style.color = 'white';
//     }
//     else{
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       document.body.style.color = 'black';
//     }
//   }

//   const [products, setProducts] = useState({
//     title: null,
//     price: null,
//     imageUrl: null,
//     category: null,
//     kg: null,
//     time: Timestamp.now(),
//     date: new Date().toLocaleString(
//       "en-US",
//       {
//         month: "short",
//         day: "2-digit",
//         year: "numeric",
//       }
//     )

//   })

//   // ********************** Add Product Section  **********************
//   const addProduct = async () => {
//     if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.kg == null) {
//       return toast.error('Please fill all fields')
//     }
//     const productRef = collection(db, "products")
//     setLoading(true)
//     try {
//       await addDoc(productRef, products)
//       toast.success("Product Add successfully")
//       getProductData()
//       closeModal()
//       setLoading(false)
//     } catch (error) {
//       console.log(error)
//       setLoading(false)
//     }
//     setProducts("")
//   }

//   const [product, setProduct] = useState([]);

//   // ****** get product
//   const getProductData = async () => {
//     setLoading(true)
//     try {
//       const q = query(
//         collection(db, "products"),
//         orderBy("time"),
//         // limit(5)
//       );
//       const data = onSnapshot(q, (QuerySnapshot) => {
//         let productsArray = [];
//         QuerySnapshot.forEach((doc) => {
//           productsArray.push({ ...doc.data(), id: doc.id });
//         });
//         setProduct(productsArray)
//         setLoading(false);
//       });
//       return () => data;
//     } catch (error) {
//       console.log(error)
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     getProductData();
//   }, []);


//   return (
//     <MyContext.Provider value={{ 
//       mode, toggleMode, loading,setLoading,
//       products, setProducts,addProduct, product }}>
//       {props.children}
//     </MyContext.Provider>
//   )
// }

// export default MyState;

