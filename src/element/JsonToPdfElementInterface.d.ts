/**
 * Interfaz de elementos en para la generación de json.
 */

// @ts-ignore: no typings available for this package.
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';

interface JsonToPdfElementInterface{
    elementLiteral : string;
    elementType : string;

    getJson(ViewElement: any):any;
}

export {JsonToPdfElementInterface}
