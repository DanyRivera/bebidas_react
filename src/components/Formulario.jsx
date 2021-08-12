import React, { useContext , useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/Recetas.context';

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, setConsultar } = useContext(RecetasContext)
    // console.log(categorias)

    //Leer lo que pone el usuario
    const obtenerDatosReceta = e => {
        e.preventDefault();

        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })

    }

    return ( 
        <form
            className="col-12"
            onSubmit={e => {
                e.preventDefault();
                buscarRecetas(busqueda)
                setConsultar(true) 
            }}
        >
            <fieldset className="text-center">
                <legend>Busca Bebidas por Categoría o Ingrediente</legend>
            </fieldset>
        
            <div className="row mt-2">
                <div className="col-md-4 mt-4">
                    <input 
                        type="text"
                        name="nombre" 
                        className="form-control"
                        placeholder="Buscar por ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4 mt-4">
                    <select 
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">-- Seleccione Categoria --</option>
                        { categorias.map( categoria => (
                            <option 
                                key={categoria.strCategory} 
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ) ) }
                    </select>
                </div>
                <div className="col-md-4 mt-4">
                    <input 
                        type="submit" 
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>

        </form>
    );
}
 
export default Formulario;
