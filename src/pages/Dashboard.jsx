import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import NavigationBar from "../components/NavigationBar";
import ProductCard from "../components/ProductCard";
import { Users, Globe, Package } from "lucide-react";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=25")
      .then((res) => res.json())
      .then((data) => {
        const formattedProducts = data.map((item) => ({
          id: item.id,
          title: item.title,
          image: item.image,
          category: item.category,
          price: item.price,
          rating: item.rating.rate,
        }));
        setProducts(formattedProducts);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="flex-1 flex flex-col p-4 md:p-10 overflow-x-hidden">
        <NavigationBar setIsOpen={setIsOpen} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-10">
          <StatCard
            title="Total Customers"
            value="12,850"
            icon={<Users className="text-blue-600" size={24} />}
            trend="+18% Global Growth"
          />
          <StatCard
            title="Active Countries"
            value="42"
            icon={<Globe className="text-cyan-600" size={24} />}
            trend="New: UK, Nigeria, UAE"
          />
        </div>

        <div className="bg-white p-6 md:p-10 rounded-[2rem] shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                <Package size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 leading-tight">
                  Product Inventory
                </h3>
                <p className="text-gray-400 text-sm font-medium">
                  Real-time global stock levels
                </p>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-32">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-gray-400 font-bold">
                Fetching International Catalog...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function StatCard({ title, value, icon, trend }) {
  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex items-center justify-between group hover:border-blue-200 transition-all">
      <div className="flex items-center gap-6">
        <div className="p-5 bg-gray-50 rounded-2xl group-hover:bg-blue-50 transition-colors">
          {icon}
        </div>
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">
            {title}
          </p>
          <h4 className="text-4xl font-black text-gray-900 leading-none">
            {value}
          </h4>
        </div>
      </div>
      <div className="text-right">
        <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
          {trend}
        </span>
      </div>
    </div>
  );
}

export default Dashboard;
