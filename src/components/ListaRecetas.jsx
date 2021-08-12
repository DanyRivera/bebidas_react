import React, {useContext} from 'react';
import Receta from './Receta';
import { RecetasContext } from '../context/Recetas.context';

const ListaRecetas = () => {

    const { recetas } = useContext(RecetasContext)

    return ( 
        <div className="row mt-4">
            { recetas.map( receta => (
                <Receta 
                    key={receta.idDrink}
                    receta={receta}
                />
            ) ) }
        </div>
    );
}
 
export default ListaRecetas;
