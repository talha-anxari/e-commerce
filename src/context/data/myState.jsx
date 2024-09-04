import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { addDoc, collection, doc, setDoc, deleteDoc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/FirebaseConfig';
import { onSnapshot, QuerySnapshot, Timestamp, query, orderBy } from 'firebase/firestore';
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
    title: '',
    price: '',
    imgUrl: '',
    category: '',
    kg: '',
    time: Timestamp.now(),
    date: new Date().toLocaleString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    }),
  });
  const addProduct = async (e) => {
    e.preventDefault();
  
    // Check if all fields are filled
    if (!products.title || !products.price || !products.imgUrl || !products.category || !products.kg) {
      return toast.error('Please fill all the fields');
    } else {
      setLoading(true);
      try {
        const productRef = collection(db, 'products');
        await addDoc(productRef, products);
        toast.success('Add Product Successfully');
        setTimeout(() => {
          window.location.href = '/dashboard'
        }, 800);
        getProductData(); // Fetch the updated product list
      } catch (error) {
        toast.error('Error adding product: ' + error.message);
        console.log('Error adding product:', error);
      } finally {
        setLoading(false);
      }
    }
  };

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
  
      console.log(products);
    } catch (error) {
      console.log("Error fetching product data:", error);
      setLoading(false)
    }
  };
     useEffect(() => {
      getProductData();
     }, []);

  const editHandle = (item) => {
    setProducts(item)
  }
  // update product
  const updateProduct = async (item) => {
    setLoading(true)
    try {
      await setDoc(doc(db, "products", products.id), products);
      toast.success("Product Updated successfully")
      getProductData();
      setLoading(false)
      setTimeout(() => {window.location.href = '/dashboard'}, 800)
      
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    setProducts("")
  }

  const deleteProduct = async (item) => {

    try {
      setLoading(true)
      await deleteDoc(doc(db, "products", item.id));
      toast.success('Product Deleted successfully')
      setLoading(false)
      getProductData()
    } catch (error) {
      // toast.success('Product Deleted Falied')
      setLoading(false)
    }
  }
  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true);
    try {
      const result = await getDoc(collection(db, 'orders'))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false);
      });
      setOrder(ordersArray);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(()=> {
    getOrderData();
  });

  const [searchKey, setSearchKey] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterPrice, setFilterPrice] = useState('');


  return (
    <MyContext.Provider value={{mode, toggleMode, loading, setLoading, product, products, setProducts, addProduct, editHandle, updateProduct, deleteProduct, order, searchKey, setSearchKey, filterType, setFilterType, filterPrice, setFilterPrice}}>
        {props.children}
    </MyContext.Provider>
  )
};

export default myState;

