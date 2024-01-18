import { Aluno } from "./Aluno";
import { TUsuario, Usuario } from "./Usuario";


interface IProfessor {
    lancarNotas ( aluno: Aluno , nota: number):void
}

export class Professor extends Usuario implements IProfessor {
   disciplina: string

    constructor(dadosUsuario:TUsuario , disciplina: string){
        super(dadosUsuario)
        this.disciplina = disciplina
    }

    lancarNotas(aluno: Aluno, nota: number): void {
        this.verificarlogin()
        aluno.notas.push(nota)
    }


    private verificarlogin(){
        if(!this.logado){
            throw new Error('Professor não autenticado.')
        }
    }



}