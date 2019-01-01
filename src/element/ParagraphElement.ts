import { SpacerElement } from './SpacerElement';
import { StructureElement } from './StructureElement';
/**
 * Constante para el párrafo.
 */
let PARAGRAPH_LITERAL='paragraph';
let ESTRUCTURE_TYPE= 'STRUCTURE';

/**
 * Elemento de párrafo.
 */
class ParagraphElement extends StructureElement{


    constructor(viewElement:any){
        super(viewElement);
        this.elementValue=PARAGRAPH_LITERAL;
        this.children= [];
        this.styles = [];
    }

    /**
     * Compone el JSON a devolver para el objeto.
     */
    getJson(){
        //lógica de composición del objeto.
        let jsonReturn : Array<any>= [];
        //Añadir los hijos.
        if(this.children && this.children.length>0){
            jsonReturn.push(this.elementValue);

            //Computar los estilos de la forma que aplique al tipo de elemento.
            if(this.styles){
                jsonReturn.push(this.processStylesAndProperties());
            }
            jsonReturn=jsonReturn.concat(this.processChildren());
        }else{
            let element = new SpacerElement(null);
            jsonReturn = element.getJson();
        }
        return jsonReturn;
    }

    getAttributes(viewElement:any){
        let value = null;
        for ( const [ key, value ] of viewElement.getAttributes() ) {
            //json.attributes[ key ] = value;
        }
        return value;
    }

    /**
     * Procesa la obtención de los datos de los hijos en el formato que aplique para cada uno de ellos.
     */
    processChildren(){
        debugger;
        var childrenJson = [];
        for(const child of this.children){
            childrenJson.push(child.getJson());
        }
        return childrenJson;
    }

}

export {ParagraphElement}
