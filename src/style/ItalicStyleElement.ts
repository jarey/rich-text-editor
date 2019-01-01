import {StyleElement} from './StyleElement';
/**
 * Constante para la cursiva..
 */
let ITALIC_LITERAL='italic';
/**
 * Elemento de estilo asociado a la cursiva..
 */
class ItalicStyleElement extends StyleElement{

    constructor(viewElement: any){
        super(viewElement);
        this.elementValue= ITALIC_LITERAL;
    }

}

export {ItalicStyleElement}
