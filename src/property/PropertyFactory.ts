import {SubPropertyElement} from './SubPropertyElement'
import {SuperPropertyElement} from './SuperPropertyElement'
import {SizePropertyElement} from './SizePropertyElement'
import {ColorPropertyElement} from './ColorPropertyElement'
import {SpanPropertyElement} from './SpanPropertyElement'
import {FamilyPropertyElement} from './FamilyPropertyElement'
import {PropertyElement} from './PropertyElement'

/**
 * Clase que pretende devolver el estilo aplicado a un nodo en el formato de JsonToPdf.
 */
class PropertyFactory{
    constructor(){}

    getProperties(viewElement:any):PropertyElement{
        var propertyElem : PropertyElement;
        
        /**
         * Elementos de estilo.
         */
        if(viewElement){
            switch(viewElement.name){
                case 'span':
                    propertyElem = new SpanPropertyElement(viewElement);
                    break;
                case 'color':
                    propertyElem = new ColorPropertyElement(viewElement);
                    break;
                case 'font-family':
                    propertyElem = new FamilyPropertyElement(viewElement);
                    break;
                case 'font-size':
                    propertyElem = new SizePropertyElement(viewElement);
                    break;
                case 'sub':
                    propertyElem = new SubPropertyElement(viewElement);
                    break;
                case 'super':
                    propertyElem = new SuperPropertyElement(viewElement);
                    break;
                default:
                    //propertyElem = null;
                break;
            }
        }
        // @ts-ignore: this.prop is really assigned before being used
        return propertyElem;
    }

}
export {PropertyFactory}
