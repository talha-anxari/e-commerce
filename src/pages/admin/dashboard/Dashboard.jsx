import React, { useContext } from 'react';
import { FaSeedling, FaShoppingCart, FaUsers, FaBoxOpen } from 'react-icons/fa'; // Updated icons to match rice theme
import myContext from '../../../context/data/myContext';
import Layout from '../../../components/layout/Layout';
import DashboardTab from './DashboardTab';

function Dashboard() {
  const context = useContext(myContext);
  const { mode } = context;

  // Define a theme based on the rice website, with more natural and green tones
  const darkModeStyles = {
    backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
    color: mode === 'dark' ? 'white' : '',
  };

  return (
    <Layout>
      <section className="text-gray-600 body-font mt-10 mb-10">
        <div className="container px-5 mx-auto mb-10">
          <div className="flex flex-wrap -m-4 text-center">
            {/* Total Products Card */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className="border-2 hover:shadow-green-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-white border-gray-300 px-4 py-5 rounded-xl transition-transform transform hover:scale-105"
                style={darkModeStyles}
              >
                <div className="text-green-600 w-12 h-12 mb-3 inline-block">
                  <FaSeedling size={50} /> {/* Icon to match rice theme */}
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black"
                  style={{ color: mode === 'dark' ? 'white' : '' }}
                >
                  10
                </h2>
                <p
                  className="font-bold text-green-600"
                  style={{ color: mode === 'dark' ? 'white' : '' }}
                >
                  Total Products
                </p>
              </div>
            </div>

            {/* Total Orders Card */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className="border-2 hover:shadow-green-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-white border-gray-300 px-4 py-5 rounded-xl transition-transform transform hover:scale-105"
                style={darkModeStyles}
              >
                <div className="text-green-600 w-12 h-12 mb-3 inline-block">
                  <FaShoppingCart size={50} /> {/* Icon representing orders */}
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black"
                  style={{ color: mode === 'dark' ? 'white' : '' }}
                >
                  10
                </h2>
                <p
                  className="font-bold text-green-600"
                  style={{ color: mode === 'dark' ? 'white' : '' }}
                >
                  Total Orders
                </p>
              </div>
            </div>

            {/* Total Users Card */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className="border-2 hover:shadow-green-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-white border-gray-300 px-4 py-5 rounded-xl transition-transform transform hover:scale-105"
                style={darkModeStyles}
              >
                <div className="text-green-600 w-12 h-12 mb-3 inline-block">
                  <FaUsers size={50} /> {/* User icon */}
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black"
                  style={{ color: mode === 'dark' ? 'white' : '' }}
                >
                  20
                </h2>
                <p
                  className="font-bold text-green-600"
                  style={{ color: mode === 'dark' ? 'white' : '' }}
                >
                  Total Users
                </p>
              </div>
            </div>

            {/* Total Shipments Card */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className="border-2 hover:shadow-green-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-white border-gray-300 px-4 py-5 rounded-xl transition-transform transform hover:scale-105"
                style={darkModeStyles}
              >
                <div className="text-green-600 w-12 h-12 mb-3 inline-block">
                  <FaBoxOpen size={50} /> {/* Icon for shipments or similar */}
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black"
                  style={{ color: mode === 'dark' ? 'white' : '' }}
                >
                  20
                </h2>
                <p
                  className="font-bold text-green-600"
                  style={{ color: mode === 'dark' ? 'white' : '' }}
                >
                  Total Shipments
                </p>
              </div>
            </div>
          </div>
        </div>

        <DashboardTab />
      </section>
    </Layout>
  );
}

export default Dashboard;

