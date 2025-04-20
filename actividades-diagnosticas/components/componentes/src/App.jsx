import './App.css'
import { useState } from "react";
import Button from "./components/button";
import Saludo from "./components/greeting";

function App() {
    const [nombre, setNombre] = useState("");
    const [showGreeting, setShowGreeting] = useState(false);
    const [edad, setEdad] = useState("");
    const [profesion, setProfesion] = useState("");
    const [showPresentation, setShowPresentation] = useState(false);

    const HandleGreeting = () => {
        if (nombre.trim() !== "") {
            setShowGreeting(true);
        }
    };

    const HandlePresentation = () => {
        if (nombre.trim() !== "" && edad.trim() !== "" && profesion.trim() !== "") {
            setShowPresentation(true);
        }
    }
    const HandleChange = (e) => {
        setNombre(e.target.value);
        setShowGreeting(false);
    } 
    const HandleChangeEdad = (e) => {
        setEdad(e.target.value);
        setShowGreeting(false);
    }
    const HandleChangeProfesion = (e) => {
        setProfesion(e.target.value);
        setShowGreeting(false);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Escribe tu nombre</h1>
            <input
                type="text"
                placeholder="Tu nombre"
                className="border border-gray-300 p-2 rounded mb-4 w-64"
                value={nombre}
                onChange={(e) => {
                    setNombre(e.target.value);
                    setShowGreeting(false);
                }}
            />
            <Button onClick={HandleGreeting}>Saludar</Button>
            {showGreeting && <Saludo nombre={nombre} />}

            {/* <Presentation nombre={nombre} edad={edad} profesion={profesion} /> */}
            <h1 className='text-2xl font-bold mb-4'>Presentación</h1>
            <input 
                type="text"
                placeholder='Tu edad'
                className='border border-gray-300 p-2 rounded mb-4 w-64'
                value={edad}
                onChange={(e) => {
                    setEdad(e.target.value);
                    setShowPresentation(false);
                }}
              />
            <input 
                type="text"
                placeholder='Tu profesion'
                className='border border-gray-300 p-2 rounded mb-4 w-64'
                value={profesion}
                onChange={(e) => {
                    setProfesion(e.target.value);
                    setShowPresentation(false);
                }}
              />
            <Button onClick={HandlePresentation}>Presentar</Button>
            {showPresentation && (
                <div className='text-xl font-semibold text-gray-800 mt-4'>
                    <p>Hola, mi nombre es {nombre}, tengo {edad} años y soy {profesion}.</p>
                </div>
            )}
              
            
        </div>
    
    );
}

export default App;
