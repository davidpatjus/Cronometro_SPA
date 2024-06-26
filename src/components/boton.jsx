import '../stylesheets/boton.css';

function Boton({ texto,  controlclick }) {
    return (
        <button onClick={controlclick}>
            {texto}
        </button>
    );
}

export default Boton;
