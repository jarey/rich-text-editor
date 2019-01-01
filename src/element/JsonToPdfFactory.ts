import { ParagraphElement } from './ParagraphElement';
import { ChunkElement } from './ChunkElement';
import { StyleFactory } from '../style/StyleFactory';
import { PropertyFactory } from '../property/PropertyFactory';
import { ListElement } from './ListElement';
import { StructureElement } from './StructureElement';
import { StyleElement } from '../style/StyleElement';
import { PropertyElement } from '../property/PropertyElement';
import { JsonToPdfElementInterface } from './JsonToPdfElementInterface';
/**
 * Clase que pretende devolver el elemento correcto en formato json, aceptado por la librería JsonToPdf
 * a partir de elementos del contenido de un editor de texto ckeditor en Html.
 */
class JsonToPdfFactory{
    constructor(){}

    /**
     *  A partir del elemento argumento, determina el objeto que debe devolver.
     * @param {elemento} viewElement 
     */
    getJsonToPdfJson(viewElement:any,elements:any){
        console.log(viewElement);
        //Identificación del elemento inicial.
        let element = this.getElement(viewElement);
        if(element.elementType=='STYLE' 
            || element.elementType=='PROPERTY'){
            elements= elements.concat((<PropertyElement>element).getElement());
        }else if(element.elementType=='STRUCTURE'){
            let structureElement : StructureElement =(<StructureElement>element)
            structureElement.styles = structureElement.styles.concat(elements);
            elements.splice(0,elements.length);
        }
        //Procesado de los hijos del elemento.
        if(viewElement.getChildren){
            for ( const child of viewElement.getChildren() ) {
                if(element.elementType=='STYLE' 
                    || element.elementType=='PROPERTY'){
                    element = this.getJsonToPdfJson(child,elements);
                }else{
                    let structureElement : StructureElement =(<StructureElement>element)
                    structureElement.addChild(<StructureElement>this.getJsonToPdfJson(child,elements));
                    element = structureElement;
                }
            }
        }else{
            //Se ha llegado al final de esa rama y por consiguiente se debe ir retornando hacia arriba.

        }

        return element;
    }

    getElement(viewElement:any):JsonToPdfElementInterface{
        let element : JsonToPdfElementInterface;

        element = this.getStructureElement(viewElement,[]);

        if(!element){
            element = this.getStyleElement(viewElement);
        }

        if(!element){
            element = this.getPropertyElement(viewElement);
        }

        return element;
    }

    getStructureElement(viewElement:any, styles:StyleElement[]):StructureElement{
        let elem:StructureElement;
        //Variable local para pivotar:
        let pivote = null;
        if(viewElement.name){
            pivote = viewElement.name;
        } else if (viewElement.is('text')){
            pivote = 'text';
        }else{
            pivote = null;
        }
        /**
         * Elementos de estructura
         */
        switch(pivote){
            case 'p':
                elem = new ParagraphElement(viewElement);
                break;
            case 'text':
                elem = new ChunkElement(viewElement);
                break;
            case 'ol':
            case 'ul':        
                elem = new ListElement(viewElement, pivote == 'ol'? true : false);
                break;
            default:
                break;
        }
        // @ts-ignore: this.prop is really assigned before being used
        return elem;
    }

    getStyleElement(viewElement:any){
        let styleFactory = new StyleFactory();
        let style = styleFactory.getStyles(viewElement);
        return style;
    }

    getPropertyElement(viewElement:any){
        let propertyFactory = new PropertyFactory();
        return propertyFactory.getProperties(viewElement);
    }

}
export {JsonToPdfFactory}
