
import { ChunkBaseStylesAndProperties } from './ChunkBaseStylesAndProperties';
import { StructureElement } from './StructureElement';

/**
 * El list item element es básicamente un agrupador de chunks, que por su naturaleza no se plasma en ningún otro elemento de json-to-pdf.
 * Simplemente es util de cara a agrupar los chunks y sus estilos y poder generar el correspondiente json hacia afuera como output.
 */
const LIST_ITEM_LITERAL = 'list-item';
class ListItemElement extends StructureElement{

    constructor(viewElement: any){
        super(viewElement);
        this.elementValue = '';
        if (viewElement.is('text') && viewElement.data ){
            this.elementContent = viewElement.data;
        }
        this.elementLiteral = LIST_ITEM_LITERAL;
        this.styles = [];
        this.children = [];
    }

    /**
     * A partir del contenido del objeto devuelve el JSON correspondiente adaptado a json-to-pdf
     */
    getJson(){
        // lógica de composición del objeto.
        const jsonReturn = [];

        // Añadir los hijos, que van a ser chunks
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
        // Se aplican los defaults.
        const chunkBaseStylesAndProperties: ChunkBaseStylesAndProperties = new ChunkBaseStylesAndProperties();
        // Separamos estilos de propiedades:
        const proStyles = this.styles.filter(style => style.elementType == 'STYLE');
        const proProperties = this.styles.filter(style => style.elementType == 'PROPERTY');

        // Asignación de los estilos al chunk.
        if (proStyles && proStyles.length > 0){
            for (const style of proStyles){
                chunkBaseStylesAndProperties.styles.push(style.elementValue);
            }
        }

        // Asignación de las propiedades.
        if (proProperties && proProperties.length > 0){
            for(const elemProperty of proProperties){
                chunkBaseStylesAndProperties[elemProperty.elementValue] = elemProperty.elementContent;
            }
        }

        return chunkBaseStylesAndProperties;
    }

}

export {ListItemElement};
