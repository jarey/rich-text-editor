
import { JsonToPdfElementInterface } from './JsonToPdfElementInterface';
import { StructureElement } from './StructureElement';
import { ChunkBaseStylesAndProperties } from './ChunkBaseStylesAndProperties';
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
let CHUNK_LITERAL='chunk'; 
let ESTRUCTURE_TYPE= 'STRUCTURE';
let CHUNK_STYLES_SUBSET= ['bold','italic','underline'];
let CHUNK_SUPER_SUBSET=['super'];
let CHUNK_SUB_SUBSET=['sub']
let CHUNK_FAMILY_SUBSET=['family'];
let CHUNK_SIZE_SUBSET=['size'];
let CHUNK_COLOR_SUBSET=['color'];
/**
 * Elemento de texto simple..
 */
class ChunkElement extends StructureElement{

    elementLiteral = 'chunk';
    elementType = 'STRUCTURE';

    constructor(viewElement:any){
        super(viewElement);
        this.elementValue= CHUNK_LITERAL;
        if(viewElement.is('text') && viewElement.data ){
            this.elementContent = viewElement.data;
        }
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
    processStylesAndProperties():any{
        //Se aplican los defaults.
        let chunkBaseStylesAndProperties : ChunkBaseStylesAndProperties = new ChunkBaseStylesAndProperties();
        //Separamos estilos de propiedades:
        let proStyles = this.styles.filter(style => style.elementType == 'STYLE');
        let proProperties = this.styles.filter(style => style.elementType == 'PROPERTY');

        //Asignación de los estilos al chunk.
        if(proStyles && proStyles.length >0){
            for(const style of proStyles){
                chunkBaseStylesAndProperties.styles.push(style.elementValue);
                //baseStyleAndPropertiesObject.styles.push(style.elementValue);
            }
        }

        //Asignación de las propiedades.
        if(proProperties && proProperties.length >0){
            for(const elemProperty of proProperties){
                //leer https://www.bennadel.com/blog/3126-object-access-bracket-notation-vs-dot-notation-with-typescript-in-angular-2-rc-4.htm
                chunkBaseStylesAndProperties[elemProperty.elementValue] = elemProperty.elementContent;
                //baseStyleAndPropertiesObject[elemProperty.elementValue] = elemProperty.elementContent;
            }
        }

        return chunkBaseStylesAndProperties;
    }

}

export {ChunkElement}
