import {StyleElement} from './StyleElement';

/**
 * Constante para el subrayado.
 */
let UNDERLINE_LITERAL='underline'; 
/**
 * Elemento de estilo de subrayado.
 */
class UnderlineStyleElement extends StyleElement{

    constructor(viewElement:any){
        super(viewElement)
        this.elementValue= UNDERLINE_LITERAL;
    }
    
}

export {UnderlineStyleElement}
