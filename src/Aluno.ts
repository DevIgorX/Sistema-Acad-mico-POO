import { TUsuario, Usuario } from "./Usuario";


export class Aluno extends Usuario {
    notas: number[]
    constructor(dado: TUsuario){
        super(dado)
        this.notas = []
    }


    obterMedia(){
        let total = 0

        for (const nota of this.notas) {
                total += nota
        }

        return total / this.notas.length
    }

}