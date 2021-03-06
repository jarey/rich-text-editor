import {StyleElement} from './StyleElement';
/**
 * Constante para la negrita.
 */
const BOLD_LITERAL = 'bold';
/**
 * Elemento de texto.
 */
class BoldStyleElement extends StyleElement{

    constructor(viewElement: any){
        super(viewElement);
        this.elementValue = BOLD_LITERAL;
    }
}

export {BoldStyleElement};
