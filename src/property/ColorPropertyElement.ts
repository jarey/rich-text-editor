import {PropertyElement} from './PropertyElement'

/**
 * Constantes para el color.
 */
let COLOR_LITERAL='color'; 

/**
 * Elemento de color, por defecto aplicamos color negro.
 */
class ColorPropertyElement extends PropertyElement{

    constructor(viewElement: any){
        super(viewElement,COLOR_LITERAL);
        if(!this.elementContent){
            this.elementContent='black';
        }
    }

}

export {ColorPropertyElement}
