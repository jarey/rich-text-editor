// @ts-ignore: no typings available for this package.
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';
// @ts-ignore: no typings available for this package.
import ViewDocumentFragment from '@ckeditor/ckeditor5-engine/src/view/documentfragment';
// @ts-ignore: no typings available for this package.
import Htmldataprocessor from '@ckeditor/ckeditor5-engine/src/dataprocessor/htmldataprocessor'

/**
 * Procesador de json dende el editor al exterior y desde el exterior al editor.
 */
interface JsonDataProcessorInterface {
    
    htmldataprocessor : Htmldataprocessor;

    viewToJson( viewElement : ViewElement ) :any;

    jsonToView( jsonObject : any ):any;
    
    toData( viewFragment  : ViewDocumentFragment): any;
    
    toView( data : any) :any ;
 }

 export {JsonDataProcessorInterface}
