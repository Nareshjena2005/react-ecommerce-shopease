import React, { useContext } from 'react';
import { MyStore } from '../context/MyContext';

const Carddata = ({ product }) => {
let {removeButton} = useContext(MyStore)
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center">

      {/* Product Image */}
      <div className="flex h-36 w-full items-center justify-center rounded-xl bg-gray-50 p-4 sm:w-40">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
          {product.category}
        </p>

        <h2 className="line-clamp-2 text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        <p className="line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        {/* Price + Quantity UI */}
        <div className="mt-1 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xl font-bold text-gray-900">
            ${product.price}
          </p>

          {/* Quantity stepper — UI only */}
          <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 p-1">
            <button
              type="button"
              aria-label="Decrease quantity"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-lg font-bold text-gray-700 shadow-sm transition hover:bg-gray-100"
            >
              −
            </button>

            <span className="w-10 text-center text-sm font-semibold text-gray-800 tabular-nums">
             {product.quanity}
            </span>

            <button
              type="button"
              aria-label="Increase quantity"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-lg font-bold text-gray-700 shadow-sm transition hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Action Button — UI only */}
      <div className="flex items-center sm:ml-4">
        <button
        onClick={()=>{
          removeButton(product.id)
        }}
          type="button"
          className="w-full rounded-xl bg-red-50 px-5 py-2.5 font-semibold text-red-600 transition hover:bg-red-100 sm:w-auto"
        >
          Remove
        </button>
      </div>

    </div>
  );
};

export default Carddata;