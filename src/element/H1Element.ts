import { StructureElement } from "./StructureElement";

/**
 * Constante para el párrafo.
 */
let H1_LITERAL='chunk';

/**
 * Elemento de párrafo.
 */
class H1Element extends StructureElement{


    constructor(viewElement:any){
        super(viewElement);
        this.elementValue=H1_LITERAL;
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

export {H1Element}
