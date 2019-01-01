
import { JsonToPdfElementInterface } from './JsonToPdfElementInterface'
import { StyleElement } from '../style/StyleElement';
import { PropertyElement} from '../property/PropertyElement'
/**
 * Chunk
tag "chunk":

optional metadata:

"sub": boolean sets chunk to subscript
"super": boolean sets chunk to superscript
font metadata (refer to Font section for details)

"family":
"size":
"style":
"color":
["chunk", {"style":"bold"}, "small chunk of text"]

["chunk", {"super":true}, "5"]

["chunk", {"sub":true}, "2"]
 */
/**
 * @see https://github.com/yogthos/json-to-pdf#chunk
 */


/**
 * Constantes para el chunk.
 */ 
let STRUCTURE_TYPE= 'STRUCTURE';
let CHUNK_STYLES_SUBSET= ['bold','italic','underline'];
let CHUNK_SUPER_SUBSET=['super'];
let CHUNK_SUB_SUBSET=['sub']
let CHUNK_FAMILY_SUBSET=['family'];
let CHUNK_SIZE_SUBSET=['size'];
let CHUNK_COLOR_SUBSET=['color'];
/**
 * Elemento de texto simple..
 */
abstract class StructureElement implements JsonToPdfElementInterface{

    elementType = STRUCTURE_TYPE;
    styles : StyleElement[];
    children : StructureElement[];
    elementValue: string;
    elementLiteral = '';
    elementContent : any;

    constructor(viewElement:any){
        if(viewElement && viewElement.is('text') && viewElement.data ){
            this.elementContent = viewElement.data;
        }
        this.elementValue = '';
        this.styles = [];
        this.children = [];
    }

    /**
     * 
     * A partir del contenido del objeto devuelve el JSON correspondiente adaptado a json-to-pdf
     */
    getJson(){
        //lógica de composición del objeto.
        let jsonReturn = [];
        jsonReturn.push(this.elementValue);
        
        //Computar los estilos de la forma que aplique al tipo de elemento.
        if(this.styles){
            jsonReturn.push(this.processStylesAndProperties());
        }

        jsonReturn.push(this.elementContent);

        //Un CHUNK en principio no puede tener hijos.
        //Añadir los hijos.
        //if(this.children){
        //    jsonReturn.push(this.processChildren());
        //}
        return jsonReturn;
    }

    /**
     * Añade un hijo al objeto.
     */
    addChild(element: StructureElement){
        this.children.push(element);
    }

    /**
     * Realiza el procesado de los hijos, para obteer el correspondiente json resultado.
     */
    processChildren(){
        let childrenJson = [];
        for(const child of this.children){
            childrenJson = child.getJson();
        }
        return childrenJson;
    }

    /**
     * Realiza el procesado de los estilos y las propiedades que puedan aplicarse al elemento y vengan informadas,
     * adaptadas a la forma de especificarlas que tenga el elemento en concreto.
     */
    processStylesAndProperties(){
        //Se aplican los defaults.
        let baseStyleAndPropertiesObject = {styles:[], sub:false, super:false, family:'',color:'',size: 11};

        //Separamos estilos de propiedades:
        let proStyles : StyleElement[] = this.styles.filter(style => style.elementType == 'STYLE');
        let proProperties : StyleElement[] = this.styles.filter(style => style.elementType == 'PROPERTY');

        //Asignación de los estilos al chunk.
        if(proStyles && proStyles.length >0){
            for(const style of proStyles){
                baseStyleAndPropertiesObject.styles.push(style.elementValue);
            }
        }

        //Asignación de las propiedades.
        if(proProperties && proProperties.length >0){
            for(const elemProperty of proProperties){
                baseStyleAndPropertiesObject[elemProperty.elementValue] = elemProperty.elementContent;
            }
        }

        return baseStyleAndPropertiesObject;
    }

}

export {StructureElement}
