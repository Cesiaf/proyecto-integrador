//Crear otro componente llamado Presentacion que reciba nombre , edad y profesion ,
//  y renderice un párrafo con la información.


function Presentation({ nombre, edad, profesion }) {


    return (
        <>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
                Hola, mi nombre es {nombre}, tengo {edad} años y soy {profesion}.
            </h2>
        
        </>      
    );
    
}

export default Presentation;
