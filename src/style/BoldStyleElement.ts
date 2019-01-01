import {StyleElement} from './StyleElement';
/**
 * Constante para la negrita.
 */
let BOLD_LITERAL='bold'; 
let STYLE_TYPE='STYLE'; 
/**
 * Elemento de texto.
 */
class BoldStyleElement extends StyleElement{

    constructor(viewElement: any){
        super(viewElement);
        this.elementType= STYLE_TYPE;
        this.elementValue= BOLD_LITERAL;
    }
 
}

export {BoldStyleElement}
