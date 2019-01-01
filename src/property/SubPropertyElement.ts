import {PropertyElement} from './PropertyElement'
/**
 * Constantes para el color.
 */
let SUB_LITERAL='sub'; 

/**
 * Elemento de subindice.
 */
class SubPropertyElement extends PropertyElement{

    constructor(viewElement:any){
        super(viewElement,SUB_LITERAL);
        this.elementContent=true;
    }
}

export {SubPropertyElement}
