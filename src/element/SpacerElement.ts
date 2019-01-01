import { StructureElement } from "./StructureElement";

/**
 * Constante para el párrafo.
 */
let SPACER_LITERAL='spacer';
let SPACER_DEFAULT_VALUE=1;

/**
 * Elemento de párrafo.
 */
class SpacerElement extends StructureElement{

    json:[];

    constructor(viewElement:any){
        super(viewElement);
        this.elementValue=SPACER_LITERAL;
        this.json= [];
        this.children= [];
        this.styles = [];
    }

    /**
     * Compone el JSON a devolver para el objeto.
     */
    getJson(){
        //lógica de composición del objeto.
        let jsonReturn = [];
        jsonReturn.push(this.elementValue);
        jsonReturn.push(SPACER_DEFAULT_VALUE);
        return jsonReturn;
    }

    /**
     * Gestiona la incorporación de un hijo al elemento.
     */
    addChild(element:StructureElement){
        this.children.push(element);
    }

    getAttributes(viewElement:any){
        let value = null;
        for ( const [ key, value ] of viewElement.getAttributes() ) {
            //value = value;
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

export {SpacerElement}
