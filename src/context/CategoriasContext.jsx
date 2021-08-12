import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react'

//Crear context
export const CategoriasContext = createContext();

//Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {

    //Crear el state del context
    const [categorias, setCategorias] = useState([])

    //Ejecutar llamado a la API
    useEffect( () => {

        const obtenerCategorias = async () => {

            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const resultado = await axios(url);

            setCategorias(resultado.data.drinks);

        }
        obtenerCategorias();

    }, [] );

    return (
        <CategoriasContext.Provider
        
            value={{
                //Aquí van los datos que van a estar disponibles en los distintos componentes
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
}

export default CategoriasProvider;