import React from 'react';

const SingalCard = ({ product }) => {
  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 rounded-2xl border p-6 shadow-md md:flex-row">
      <div className="flex items-center justify-center bg-gray-50 p-6 md:w-1/2">
        <img
          src={product.image}
          alt={product.title}
          className="h-72 w-full object-contain"
        />
      </div>

      <div className="flex flex-col justify-center md:w-1/2">
        <p className="mb-2 text-sm uppercase text-blue-600">
          {product.category}
        </p>

        <h1 className="mb-4 text-2xl font-bold">
          {product.title}
        </h1>

        <p className="mb-4 text-gray-600">
          {product.description}
        </p>

        <p className="mb-6 text-3xl font-bold">
          ${product.price}
        </p>

        <button className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingalCard;
