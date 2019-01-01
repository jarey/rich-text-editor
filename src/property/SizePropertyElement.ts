import {PropertyElement} from './PropertyElement'
/**
 * Constantes para el tamaño de fuente.
 */
let SIZE_LITERAL='size'; 

/**
 * Elemento de tamaño de fuente.
 */
class SizePropertyElement extends PropertyElement{

    constructor(viewElement:any){
        super(viewElement,SIZE_LITERAL);
        this.elementContent=parseInt(viewElement.value.substring(0,viewElement.value.lastIndexOf('px')));
    }

}

export {SizePropertyElement}
