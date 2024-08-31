import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import SignIn from "./pages/registration/SignIn";
import SignUp from "./pages/registration/SignUp";
import ProductInfo from "./pages/productInfo/ProductInfo";
import UpdateProduct from "./pages/admin/page/UpdateProduct";
import AddProduct from './pages/admin/page/AddProduct'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <MyState>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={
          <ProtectedRoute>
            <Order />
          </ProtectedRoute>
        } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        } />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/productInfo/:id" element={<ProductInfo />} />
        <Route path="/updateProduct" element={
          <AdminRoute>
            <UpdateProduct />
          </AdminRoute>
        } />
        <Route path="/addProduct" element={
          <AdminRoute>
            <AddProduct />
          </AdminRoute>
        } />
        <Route path="/*" element={<NoPage />} />
      </Routes>
      <ToastContainer />
    </Router>
    </MyState>
    
  );
}

export default App;

// user
export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if(user){
    return children
  }else{
    return <Navigate to="/signIn" />
  }
}

// admin
export const AdminRoute = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'));
  if(admin.user.email === 'talha@gmail.com'){
    return children
    }else{
      return <Navigate to="/signIn" />
      }
}