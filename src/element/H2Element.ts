import { StructureElement } from "./StructureElement";

/**
 * Constante para el párrafo.
 */
let H2_LITERAL='chunk';

/**
 * Elemento de párrafo: en json-to-pdf simplemente lo modelamos como un chunk con estilos por defecto para que salga más grande.
 */
class H2Element extends StructureElement{


    constructor(viewElement:any){
        super(viewElement);
        this.elementValue=H2_LITERAL;
    }

    /**
     * Compone el JSON a devolver para el objeto.
     */
    getJson():any{
        //lógica de composición del objeto.
        let jsonReturn = [];
        jsonReturn.push(this.elementValue);

        //Computar los estilos de la forma que aplique al tipo de elemento.
        if(this.styles){
            //jsonReturn.push();
        }

        //Añadir los hijos.
        if(this.children){

        }

    }

    getAttributes(viewElement:any):any{
        let value = null;
        for ( const [ key, value ] of viewElement.getAttributes() ) {
            //json.attributes[ key ] = value;
        }
        return value;
    }

}

export {H2Element}
