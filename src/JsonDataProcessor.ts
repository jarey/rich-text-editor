// @ts-ignore: no typings available for this package.
import ViewText from '@ckeditor/ckeditor5-engine/src/view/text';
// @ts-ignore: no typings available for this package.
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';
// @ts-ignore: no typings available for this package.
import ViewDocumentFragment from '@ckeditor/ckeditor5-engine/src/view/documentfragment';
// @ts-ignore: no typings available for this package.
import Htmldataprocessor from '@ckeditor/ckeditor5-engine/src/dataprocessor/htmldataprocessor'
// @ts-ignore: no typings available for this package.
import { JsonToPdfFactory } from './element/JsonToPdfFactory'

import { JsonDataProcessorInterface } from './JsonDataProcessorInterface'

/**
 * Procesador de json dende el editor al exterior y desde el exterior al editor.
 */
class JsonDataProcessor implements JsonDataProcessorInterface {
    htmldataprocessor : Htmldataprocessor;

    constructor(){
        this.htmldataprocessor = new Htmldataprocessor();
    }

    viewToJson( viewElement : ViewElement) {
        /**
         * Bloque de prueba
         */
            console.log(viewElement);
            debugger;
            let factory = new JsonToPdfFactory();
            let jsonToPdfResult = factory.getJsonToPdfJson(viewElement, []);
            console.log('Json procesado para el elemento: '+ JSON.stringify(jsonToPdfResult.getJson(viewElement)));
            return jsonToPdfResult.getJson(viewElement);
        /**
         * Fin de bloque de prueba.
         */
     }

     jsonToView( jsonObject : any) {
         console.log("Cada vez que se escribe, se está llamando a este método.");
        if ( jsonObject.text ) {
            return new ViewText( jsonObject.text );
        } else {
            const viewElement = new ViewElement( jsonObject.name, jsonObject.attributes );
             for ( const childJson of jsonObject.children ) {
                const viewChild = this.jsonToView( childJson );
                 viewElement._appendChild( viewChild );
            }
             return viewElement;
        }
     }
    
    toData( viewFragment : ViewDocumentFragment) {
        debugger;
        const json = [];
         for ( const child of viewFragment ) {
            const childJson = this.viewToJson( child );
             json.push( childJson );
        }
        let outPutJsonToPdf = [];
        //Datos de la cabecera del pdf que en nuestro caso nunca se va a setear.
        outPutJsonToPdf.push({});
        outPutJsonToPdf.push(json);
        let htmlOutput = this.htmldataprocessor.toData(viewFragment);
        let outPut = {htmlOutput: htmlOutput, jsonToPdfOutput: JSON.stringify( outPutJsonToPdf )};
        console.log("El output del editor calculado es: "+outPut);
        //return JSON.stringify( outPutJsonToPdf );
        return outPut;
    }
     toView( data : any) {
        /*const jsonData = JSON.parse( data );
        const viewFragment = new ViewDocumentFragment();
         for ( const childJson of jsonData ) {
            const child = this.jsonToView( childJson );
             viewFragment._appendChild( child );
        }
        
         return viewFragment;*/
        return this.htmldataprocessor.toView(data);
    }
 }

 export {JsonDataProcessor}
