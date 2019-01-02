import { StructureElement } from './StructureElement';

/**
 * Constante para el párrafo.
 */
const LIST_LITERAL = 'list';
/**
 * Elemento de texto.
 */
class ListElement extends StructureElement{

    roman: boolean = false;

    constructor(viewElement: any, ordered: boolean){
        super(viewElement);
        this.elementValue = LIST_LITERAL;
        this.roman = ordered;
    }

    /**
     * A partir del contenido del objeto devuelve el JSON correspondiente adaptado a json-to-pdf
     */
    getJson(){
        // lógica de composición del objeto.
        const jsonReturn = [];
        jsonReturn.push(this.elementValue);
        
        // Computar los estilos de la forma que aplique al tipo de elemento.
        if (this.styles){
            jsonReturn.push(this.processStylesAndProperties());
        }

        // Añadir los hijos.
        if (this.children){
            jsonReturn.push(this.processChildren());
        }
        return jsonReturn;
    }

    /**
     * Realiza el procesado de los hijos, para obteer el correspondiente json resultado.
     */
    processChildren(){
        const childrenJson = [];
        for (const child of this.children){
            childrenJson.push(child.getJson());
        }
        return childrenJson;
    }

    /**
     * Realiza el procesado de los estilos y las propiedades que puedan aplicarse al elemento y vengan informadas,
     * adaptadas a la forma de especificarlas que tenga el elemento en concreto.
     */
    processStylesAndProperties(): any{
        const stylesAndProperties = {roman: this.roman};
        return stylesAndProperties;
    }

}

export {ListElement}
