import {PropertyElement} from './PropertyElement'
/**
 * Constantes para el color.
 */
let SUPER_LITERAL='super'; 

/**
 * Elemento de subindice.
 */
class SuperPropertyElement extends PropertyElement{

    constructor(viewElement:any){
        super(viewElement,SUPER_LITERAL);
        this.elementContent=true;
    }
}

export {SuperPropertyElement}
