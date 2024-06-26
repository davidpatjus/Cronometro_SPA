import React, { useState, useEffect } from 'react';
import '../stylesheets/contador.css';
import Boton from './boton';

function Contador() {
    // Estado para almacenar el contador y si está corriendo o no
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // Efecto que se ejecuta cuando cambia el estado de isRunning
    useEffect(() => {
        let interval;
        if (isRunning) {
            // Iniciar intervalo para aumentar el contador cada segundo
            interval = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
        } else {
            // Detener el intervalo si no está corriendo
            clearInterval(interval);
        }
        // Limpiar el intervalo al desmontar el componente o cuando isRunning cambie
        return () => clearInterval(interval);
    }, [isRunning]);

    // Función para alternar entre iniciar y detener el contador
    const toggleTimer = () => {
        if (!isRunning) {
            // Reiniciar el contador a cero si está detenido
            setCount(0);
        }
        setIsRunning(prev => !prev); // Alternar entre true y false
    };

    // Función para reiniciar el contador manualmente
    const resetTimer = () => {
        setIsRunning(false); // Detener el contador
        setCount(0); // Reiniciar el contador a cero
    };

    // Renderizar el componente Contador
    return (
        <div className="contador">
            <div className="contador-numero">{count} segundos</div>
            <div className="botones">
                {/* Botón para iniciar o detener el contador */}
                <Boton texto={isRunning ? 'Detener' : 'Iniciar'} controlclick={toggleTimer} />
                {/* Botón para reiniciar el contador */}
                <Boton texto="Reiniciar" controlclick={resetTimer} />
            </div>
        </div>
    );
}

export default Contador;
