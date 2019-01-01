import {PropertyElement} from './PropertyElement'
import {PropertyFactory} from './PropertyFactory'
/**
 * Constantes para el color.
 */
let PROPERTY_TYPE= 'PROPERTY';
let SPAN_LITERAL= 'SPAN';

/**
 * Elemento de texto simple..
 */
class SpanPropertyElement extends PropertyElement{

    propertyMap : Map<String, PropertyElement>;

    constructor(viewElement:any){
        super(viewElement,SPAN_LITERAL);
        this.elementContent=true;
        this.propertyMap = viewElement._styles;
    }

    /**
     * Devuelve los objetos de propiedades del elemento span, que pueden ser varias.
     */
    getProperties(){
        debugger;
        let elems = [];
        let factory = new PropertyFactory();
        for(const prop of this.propertyMap){
            let custElem = {name: prop[0], value: prop[1]};
            elems.push(factory.getProperties(custElem));
        }
        return elems;
    }

    getElement():any{
        return this.getProperties();
    }

}

export {SpanPropertyElement}
