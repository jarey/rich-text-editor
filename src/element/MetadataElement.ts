/** {"right-margin":10,
 "subject":"Some subject",
 "creator":"Jane Doe",
 "doc-header":["inspired by", "William Shakespeare"],
 "bottom-margin":25,
 "pages":true,
 "author":"John Doe",
 "header":"Page header text appears on each page",
 "left-margin":10,
 "title":"Test doc",
 "size":"a4",
 "letterhead":["A simple Letter head"],
 "orientation":"landscape",
 "font":{"size":11},
 "footer":
 "Page footer text appears on each page (includes page number)",
 "top-margin":20}*/

import { StructureElement } from './StructureElement';

/**
 * Constante para el párrafo.
 */
let METADATA_LITERAL= 'metadata';
/**
 * Elemento que modela la metainformación indicable para un pdf en formato json-to-pdf
 * Este objeto como no puede provenir del ckeditor, lo más probable es que lo forcemos con un plugin y sus valores se seteen al iniciar el ckeditor por la app consumidora.
 */
class MetadataElement extends StructureElement{

    constructor(viewElement:any){
        super(viewElement);
        this.elementLiteral = METADATA_LITERAL;
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

}

export {MetadataElement}
