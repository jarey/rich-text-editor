
import { JsonToPdfElementInterface } from '../element/JsonToPdfElementInterface'

/**
 * Constantes para el estilo.
 */ 
const STYLE_TYPE = 'STYLE';
/**
 * Clase base para representación de estilos.
 */
abstract class StyleElement implements JsonToPdfElementInterface{

    elementType = STYLE_TYPE;
    elementValue: string = '';
    elementLiteral: string = '';
    elementContent: string = '';

    constructor(viewElement: any){
        this.elementValue = '';
    }

    getJson(){}

    getElement(){
        return this;
    }
}

export {StyleElement};
