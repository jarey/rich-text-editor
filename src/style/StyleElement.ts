
import { JsonToPdfElementInterface } from '../element/JsonToPdfElementInterface'
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
let STYLE_TYPE= 'STYLE';
let CHUNK_STYLES_SUBSET= ['bold','italic','underline'];
let CHUNK_SUPER_SUBSET=['super'];
let CHUNK_SUB_SUBSET=['sub']
let CHUNK_FAMILY_SUBSET=['family'];
let CHUNK_SIZE_SUBSET=['size'];
let CHUNK_COLOR_SUBSET=['color'];
/**
 * Elemento de texto simple..
 */
abstract class StyleElement implements JsonToPdfElementInterface{

    elementType = STYLE_TYPE;
    elementValue : string = '';
    elementLiteral: string = '';
    elementContent : string = '';

    constructor(viewElement:any){
        this.elementValue = '';
    }

    getJson(){
        
    }

    getElement(){
        return this;
    }
}

export {StyleElement}
