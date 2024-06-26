import './App.css';
import davidlogo from './Assets/david.png';
import Contador from './components/contador';

function App() {
    return (
        <div className='App'>
            <div className='david-logo-contenedor'>
                <img
                    className='david-logo'
                    src={davidlogo}
                    alt='logo de david'
                />
                <p className='text-ref'>CONTADOR DE CLICKS CON REACT HECHO POR:</p>
                <p className='text-name'>DAVID PATIÑO</p>
            </div>

            <div className='contenedor-principal'>
                <Contador />
                <div className="botones">
                </div>
            </div>
        </div>
    );
}

export default App;
