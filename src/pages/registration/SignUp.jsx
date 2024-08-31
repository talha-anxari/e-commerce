import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/data/myContext";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/FirebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const context = useContext(myContext);

  const signUp = async () => {
    setLoading(true); // Set loading before starting the async operation
    // Fixed the validation logic to check for empty values
    if (!name || !email || !password) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      // Creating user with email and password
      const users = await createUserWithEmailAndPassword(auth, email, password);
      // console.log(users);
      const user = {
                name: name,
                uid: users.user.uid,
                email: users.user.email,
                time: Timestamp.now(),

              }
              const userRef = collection(db, 'users')
              await addDoc(userRef, user);
      toast.success("Sign Up Successful!");
      setName('');
      setEmail('');
      setPassword('');
      setLoading(false)
    } catch (error) {
      // Handling errors and showing a toast notification
      toast.error(error.message || "An error occurred");
      // console.error(error);
    } finally {
      // Ensures loading state is reset regardless of success or failure
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 px-10 py-10 rounded-xl">
        <div>
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Sign Up
          </h1>
        </div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
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
            onClick={signUp}
            className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg w-full lg:w-[20em] flex items-center justify-center"
            disabled={loading} // Disable the button while loading to prevent multiple requests
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
                Signing Up...
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </div>
        <div>
          <h2 className="text-white text-center">
            Have an account?{" "}
            <Link className="text-red-500 font-bold" to={"/signIn"}>
              Sign In
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
