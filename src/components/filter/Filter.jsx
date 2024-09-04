import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Filter() {
    const context = useContext(myContext)
    const { mode, searchKey, setSearchKey, filterType, setFilterType, filterPrice, setFilterPrice, product } = context;

    const resetFilters = () => {
      setSearchKey('');
      setFilterType('');
      setFilterPrice(null);
    };
    return (
        <div>
  <div className="container mx-auto px-4 mt-5">
    <div
      className="p-5 rounded-lg bg-white shadow-lg border border-gray-300"
      style={{
        backgroundColor: mode === 'dark' ? '#1f2933' : '#fafafa',
        color: mode === 'dark' ? '#e0e0e0' : '#333',
      }}
    >
      <div className="relative">
        <div className="absolute flex items-center ml-3 h-full">
          <svg
            className="w-5 h-5 fill-current text-green-600"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              color: mode === 'dark' ? '#9ae6b4' : '#2f855a', // Adjusting icon color for dark mode
            }}
          >
            <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
          </svg>
        </div>
        <input
        value={searchKey}
        onChange={(e)=> setSearchKey(e.target.value)}
          type="text"
          name="searchkey"
          id="searchkey"
          placeholder="Search for rice varieties"
          className="px-10 py-3 w-full rounded-full border border-green-200 focus:ring-2 focus:ring-green-300 outline-none text-sm"
          style={{
            backgroundColor: mode === 'dark' ? '#374151' : '#e6fffa',
            color: mode === 'dark' ? '#e5e7eb' : '#333',
            borderColor: mode === 'dark' ? '#4b5563' : '#d1d5db',
          }}
        />
      </div>
      <div className="flex items-center justify-between mt-4">
        <p className="font-semibold text-green-700" style={{ color: mode === 'dark' ? '#a7f3d0' : '#2f855a' }}>
          Filters
        </p>
        <button
        className="px-5 py-2 bg-green-100 hover:bg-green-200 text-green-900 text-sm font-medium rounded-full transition-colors duration-200"
        style={{
          backgroundColor: mode === 'dark' ? '#2d3748' : '#f0fff4',
          color: mode === 'dark' ? '#e0e0e0' : '#2d3748',
        }}
        onClick={resetFilters}
      >
        Reset Filter
      </button>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          <select
          value={filterType}
          onChange={(e)=> setFilterType(e.target.value)}
            className="px-4 py-3 w-full rounded-full border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-300 text-sm"
            style={{
              backgroundColor: mode === 'dark' ? '#2d3748' : '#e6fffa',
              color: mode === 'dark' ? '#e0e0e0' : '#333',
              borderColor: mode === 'dark' ? '#4b5563' : '#d1d5db',
            }}
          >
            {product.map((item, index) =>{
              return <option key={index} value={item.category}>{item.category}</option>
            })}
          </select>
          <select
          value={filterPrice}
          onChange={(e)=> setFilterPrice(e.target.value)}
            className="px-4 py-3 w-full rounded-full border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-300 text-sm"
            style={{
              backgroundColor: mode === 'dark' ? '#2d3748' : '#e6fffa',
              color: mode === 'dark' ? '#e0e0e0' : '#333',
              borderColor: mode === 'dark' ? '#4b5563' : '#d1d5db',
            }}
          >
            {product.map((item, index) =>{
              return <option key={index} value={item.price}>{item.price}</option>
            })}
          </select>
        </div>
      </div>
    </div>
  </div>
</div>


    )
}

export default Filter
