import {BoldStyleElement} from './BoldStyleElement';
import {ItalicStyleElement} from './ItalicStyleElement';
import {UnderlineStyleElement} from './UnderlineStyleElement';
import {StyleElement} from './StyleElement';
/**
 * Clase que pretende devolver el estilo aplicado a un nodo en el formato de JsonToPdf.
 */
class StyleFactory{
    constructor(){}

    getStyles(viewElement:any):StyleElement{
        let styleElem = null;
        /**
         * Elementos de estilo.
         */
        if(viewElement){
            switch(viewElement.name){
                case 'strong':
                    styleElem = new BoldStyleElement(viewElement);
                    break;
                case 'i':
                    styleElem = new ItalicStyleElement(viewElement);
                    break;
                case 'u':
                    styleElem = new UnderlineStyleElement(viewElement);
                    break;
            }
        }
        // @ts-ignore: this.prop is really assigned before being used
        return styleElem;
    }

}
export {StyleFactory}
