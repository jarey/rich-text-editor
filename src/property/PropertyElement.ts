
import { StyleElement } from '../style/StyleElement'


/**
 * Constantes para el chunk.
 */ 
let PROPERTY_TYPE= 'PROPERTY';
let CHUNK_STYLES_SUBSET= ['bold','italic','underline'];
let CHUNK_SUPER_SUBSET=['super'];
let CHUNK_SUB_SUBSET=['sub']
let CHUNK_FAMILY_SUBSET=['family'];
let CHUNK_SIZE_SUBSET=['size'];
let CHUNK_COLOR_SUBSET=['color'];
/**
 * Elemento de texto simple..
 */
abstract class PropertyElement extends StyleElement{

    elementType = PROPERTY_TYPE;
    elementLiteral = '';
    elementContent : any;

    constructor(viewElement:any, elementValue: string){
        super(viewElement);
        this.elementValue = elementValue;
        if(viewElement.is('text') && viewElement.data ){
            this.elementContent = viewElement.data;
        }
    }

    getElement(){
        return this;
    }

    /**
     * 
     * A partir del contenido del objeto devuelve el JSON correspondiente adaptado a json-to-pdf
     */
    getJson(){
    }
}

export {PropertyElement}
