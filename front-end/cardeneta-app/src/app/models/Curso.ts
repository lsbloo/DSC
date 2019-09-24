export class Curso{

    nome: String;
    codigo: number;
    professor: String;
    quantidade_alunos: number;
    idioma_id: number;

    constructor(nome: String , codigo: number , professor: String , quantidade_alunos: number, idioma_id: number){

        this.nome=nome;
        this.codigo=codigo;
        this.professor=professor;
        this.quantidade_alunos=quantidade_alunos;
        this.idioma_id=idioma_id;
    }
}