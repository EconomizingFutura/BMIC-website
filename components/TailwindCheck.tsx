const TailwindCheck = () => {
  return (
    <div className="p-4">
      <div className="text-center text-2xl font-bold text-primary mb-4">
        Tailwind Setup is Working!
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-red-500 text-white p-4 rounded-xl shadow-md">
          <p className="font-semibold">Mobile</p>
          <p className="text-sm">1 Column (≤640px)</p>
        </div>

        <div className="bg-green-500 text-white p-4 rounded-xl shadow-md">
          <p className="font-semibold">Tablet</p>
          <p className="text-sm">2 Columns (≥640px)</p>
        </div>

        <div className="bg-blue-500 text-white p-4 rounded-xl shadow-md">
          <p className="font-semibold">Desktop</p>
          <p className="text-sm">3 Columns (≥768px)</p>
        </div>
      </div>
    </div>
  );
};

export default TailwindCheck;
