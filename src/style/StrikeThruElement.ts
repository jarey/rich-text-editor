import {StyleElement} from './StyleElement';
/**
 * Constante para la negrita.
 */
const STRIKETHRU_LITERAL = 'strikethru';
/**
 * Elemento de texto.
 */
class StrikeThruElement extends StyleElement{

    constructor(viewElement: any){
        super(viewElement);
        this.elementValue = STRIKETHRU_LITERAL;
    }
}

export {StrikeThruElement};
