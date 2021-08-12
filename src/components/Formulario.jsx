import React, {useContext} from 'react';
import { CategoriasContext } from '../context/CategoriasContext';

const Formulario = () => {

    const { categorias } = useContext(CategoriasContext);
    console.log(categorias)

    return ( 
        <form
            className="col-12"
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
                    />
                </div>
                <div className="col-md-4 mt-4">
                    <select 
                        className="form-control"
                        name="catgoria"
                    >
                        <option value="">-- Seleccione Categoria --</option>
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
