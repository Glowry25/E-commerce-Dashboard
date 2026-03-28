import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  if (!product) return null;

  const unitsSold = product.rating?.count || 0;
  const stockLevel = Math.floor((product.id * 7) % 100); 

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="group bg-white border border-gray-100 p-5 rounded-2xl cursor-pointer hover:shadow-2xl hover:border-blue-200 transition-all duration-300 flex flex-col h-full"
    >
      
      <div className="relative w-full h-44 mb-5 bg-gray-50 rounded-2xl overflow-hidden border border-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
        />
      
        <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full shadow-sm border border-white/50">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            {product.category}
          </p>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <p className="text-lg font-black text-gray-900">${product.price}</p>
          <div className="flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded-md">
            <span className="text-[10px] font-bold text-green-600">★ {product.rating?.rate}</span>
          </div>
        </div>
      </div>

   
      <div className="mt-auto pt-4 border-t border-gray-50 space-y-3">
      
        <div className="flex justify-between items-center">
          <span className="text-xs font-medium text-gray-400">Total Sales</span>
          <span className="text-xs font-bold text-gray-700">{unitsSold} units</span>
        </div>

      
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-tighter">Inventory</span>
            <span className={`text-[11px] font-bold ${stockLevel < 20 ? 'text-red-500' : 'text-blue-600'}`}>
              {stockLevel}%
            </span>
          </div>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${stockLevel < 20 ? 'bg-red-500' : 'bg-blue-600'}`}
              style={{ width: `${stockLevel}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;