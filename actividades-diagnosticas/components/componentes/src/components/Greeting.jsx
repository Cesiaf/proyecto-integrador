function Greeting({ nombre }) {
    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
                ¡Hola, {nombre}!
            </h2>
        </div>
    );
}

export default Greeting;

