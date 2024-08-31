// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import myContext from "../../context/data/myContext";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase/FirebaseConfig";
// import { toast } from "react-toastify";
// // Import Loader if you have it
// // import Loader from '../path/to/Loader';

// function SignIn() {
//   const context = useContext(myContext);
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const signIn = async () => {
//     setLoading(true);
//     try {
//         const result = await signInWithEmailAndPassword(auth, email, password);
//         toast.success('Sign In Successful');
//         localStorage.setItem('user', JSON.stringify(result));
//         navigate('/');
//         setLoading(false);
//     } catch (error) {
//         console.log(error);
//         setLoading(false);
//     }
// };


//   return (
//     <div className="flex justify-center items-center h-screen">
//       {loading && <Loader />} {/* Ensure Loader is defined or imported */}
//       <div className="bg-gray-800 px-10 py-10 rounded-xl">
//         <div>
//           <h1 className="text-center text-white text-xl mb-4 font-bold">
//             Login
//           </h1>
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
//             placeholder="Email"
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
//             placeholder="Password"
//           />
//         </div>
//         <div className="flex justify-center mb-3">
//           <button
//             onClick={signIn}
//             className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg w-full lg:w-[20em]"
//           >
//             Login
//           </button>
//         </div>
//         <div>
//           <h2 className="text-white text-center">
//             Don't have an account?{" "}
//             <Link className="text-yellow-500 font-bold" to={"/signUp"}>
//               SignUp
//             </Link>
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignIn;

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/data/myContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";

function SignIn() {
  const context = useContext(myContext);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Sign In Successful",
        {
          position: "top-right",            // Position of the toast
          autoClose: 2000,                  // Automatically close after 2 seconds
          hideProgressBar: false,           // Show progress bar for a visual cue
          closeOnClick: true,               // Close on click
          pauseOnHover: true,               // Pause timer on hover
          draggable: true,                  // Allow the toast to be draggable
          progress: undefined,              // Progress bar will auto-calculate
          theme: "colored",                 // Use colored theme for a vibrant look
          icon: true,                       // Adds relevant icon based on type (success/error)
          style: {                          // Custom styling to enhance look
            backgroundColor: "#1E293B",     // Dark gray background for better contrast
            color: "#F3F4F6",               // Light text color
            fontWeight: "bold",             // Bold text for better readability
            borderRadius: "10px",           // Slightly rounded corners
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Adding subtle shadow for depth
          },
          limit: 3,                         // Limit the number of visible toasts to 3
        }
      );
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } catch (error) {
      toast.error(error.message || "An error occurred");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 px-10 py-10 rounded-xl">
        <div>
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Login
          </h1>
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center mb-3">
          <button
            onClick={signIn}
            className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg w-full lg:w-[20em]"
            disabled={loading} // Disable button while loading to prevent multiple requests
          >
            {loading ? "Signing In..." : "Login"} {/* Change button text when loading */}
          </button>
        </div>
        <div>
          <h2 className="text-white text-center">
            Don't have an account?{" "}
            <Link className="text-yellow-500 font-bold" to={"/signUp"}>
              Sign Up
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
