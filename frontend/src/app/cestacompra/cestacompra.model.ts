import { Usuario } from "../usuario/cliente.model";

export class CestaCompra {
    idCesta!: number;
    fechaCompra!: Date;
    estado!: string;
    cliente!: Usuario;

    constructor(){}

}