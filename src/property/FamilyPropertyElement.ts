import {PropertyElement} from './PropertyElement'

/**
 * Constantes para la familia de fuente.
 */
let FAMILY_LITERAL='family'; 

/**
 * Elemento de texto simple..
 */
class FamilyPropertyElement extends PropertyElement{

    constructor(viewElement: any){
        super(viewElement,FAMILY_LITERAL);
        this.elementContent=viewElement.value;
    }

}

export {FamilyPropertyElement}
