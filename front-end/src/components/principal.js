
import { Link } from 'react-router-dom';

const paginaPrincipal =  () => {

    return(

        <div>
            <Link to={`/gestion`}>
                <button>HISTORIAL</button>
            </Link>
            
            <Link to={`/calendario`}>
                <button>CALENDARIO</button>
            </Link>

            <Link to={'/correo'}>
                <button>CORREO</button>
            </Link>

        </div>

    );
}

export default paginaPrincipal;