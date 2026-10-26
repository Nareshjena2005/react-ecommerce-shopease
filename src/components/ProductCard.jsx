import React, { useContext } from "react";
import { ShoppingCart, Heart } from "lucide-react";
import { MyStore } from "../context/MyContext";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
const ProductCard = ({ product, setCardIteam,isCardIteam}) => {
  const{addIteam,decrement}=useContext(MyStore)
  const Navigate = useNavigate();
  if (!product) {
    return <p>Loading product...</p>;
  }
  const AddToCard = ()=>{
     setCardIteam((prev) => [...prev,{...product,quanity:1}]);
      toast.success("Product added to cart! 🛒");
  }
  return (
    <div className="group relative w-full max-w-[280px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Wishlist Button */}
      <button className="absolute right-3 top-3 z-10 rounded-full bg-white p-2 shadow-md transition hover:bg-red-50">
        <Heart
          size={19}
          className="text-gray-500 transition hover:text-red-500"
        />
      </button>

      {/* Product Image */}
      <div className="flex h-60 items-center justify-center bg-gray-50 p-6">
        <img
          onClick={() => Navigate(`/main/about/${product.id}`)}
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
          {product.category}
        </p>

        <h2 className="mb-3 line-clamp-2 h-12 text-sm font-semibold text-gray-800">
          {product.title}
        </h2>

        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">${product.price}</p>

         {
          isCardIteam && isCardIteam.quanity > 0 ?(
            <button>
              <span
              onClick={()=>{
                decrement(product.id)
                toast.success("Remove sucessfully")
              }
            }
              >-</span>
              <span>{isCardIteam.quanity}</span>
              <span onClick={()=>{
                addIteam(product.id)
                toast.success("one more Iteam add succeful")
              }}
              
              >+</span>
            </button>
          ):(
             <button
            onClick={AddToCard}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <ShoppingCart size={17} />
            Add
          </button>
          )
         }
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
