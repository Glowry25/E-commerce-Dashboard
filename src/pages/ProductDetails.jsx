import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center font-medium text-gray-500">Loading Product Details...</div>;
  if (!product) return <div className="min-h-screen flex items-center justify-center text-red-500 font-bold">Product not found</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
  
      <div className="max-w-3xl w-full mx-auto bg-white p-8 rounded-2xl shadow-sm">
        
     
        <div className="mb-4">
          <span className="bg-blue-50 text-blue-600 text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-widest">
            {product.category}
          </span>
        </div>

     
        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-72 mx-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>


        <h1 className="text-2xl text-gray-900 font-bold mb-2">
          {product.title}
        </h1>

    
        <div className="flex items-center gap-4 mb-4">
          <p className="text-2xl font-black text-blue-600">${product.price}</p>
          <div className="h-4 w-[1px] bg-gray-200"></div>
          <p className="text-sm font-bold text-yellow-500">
            ★ {product.rating?.rate} <span className="text-gray-400 font-normal">({product.rating?.count} reviews)</span>
          </p>
        </div>


        <p className="text-gray-600 mb-8 leading-relaxed">
          {product.description}
        </p>


        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-100 transition active:scale-[0.98]">
          ADD TO CART
        </button>
        
      
        <button 
          onClick={() => navigate(-1)} 
          className="mt-4 w-full text-gray-400 text-sm font-medium hover:text-gray-600 transition"
        >
          ← Back to home
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;