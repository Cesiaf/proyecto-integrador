
function Button({ onClick, children }) {
    return (
        <button
            onClick={onClick} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            {children}
        </button>
            
    );
    
}

export default Button;
