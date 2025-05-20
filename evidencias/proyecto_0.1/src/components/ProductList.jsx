function ProductList({ productos }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {productos.map(p => (
                <div
                    key={p.id}
                    className="group border p-4 text-center flex flex-col aspect-square transition duration-200
                     hover:shadow-lg hover:scale-105 animate-fadeIn hover:border-blue-600"
                > 
                    <h2 className="font-bold mb-4 truncate h-10 overflow-hidden">{p.title}</h2>
                    <div className="flex-1 flex items-center justify-center mb-4">
                        <img
                            src={p.thumbnail}
                            alt={p.title}
                            className="max-w-full max-h-full object-contain rounded transition-transform duration-300 group-hover:rotate-3"
                        />
                    </div>
                    <p className="mt-auto mb-0">{`$${p.price}`}</p>
                </div>
            ))}
        </div>
    );
}
export default ProductList;