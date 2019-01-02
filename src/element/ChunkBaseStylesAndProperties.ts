
/**
 * Propiedades asignables al objeto de chunk.
 */
class ChunkBaseStylesAndProperties{

    [key: string]: any
    styles: Array<string> = [];
    sub: boolean = false;
    super: boolean = false;
    family: string = '';
    color: string = '';
    size: number = 11;

    constructor(){}

}

export {ChunkBaseStylesAndProperties};
