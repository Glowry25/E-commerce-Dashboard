function AuthCard({ title, icon, children }) {
  return (
    <div className="bg-white p-10 border-0.5 border-b-gray-100 rounded-lg shadow-2xl w-[420px] ">

      
      <div className="flex flex-col items-center">
        {icon}
        <h2 className="text-xl font-bold mt-2 text-center">{title}</h2>
      </div>

      {children}

    </div>
  );
}

export default AuthCard;





