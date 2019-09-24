export class Turma{
    nome: String;
    cod_turma: String;
    professor: String;
    quantidade_alunos: String;
    codigo_curso: String;

    constructor(nome: String, cod_turma: String , professor: String, quantidade_alunos: String, codigo_curso: String){
        this.nome=nome;
        this.cod_turma=cod_turma;
        this.professor=professor;
        this.quantidade_alunos=quantidade_alunos;
        this.codigo_curso=codigo_curso;
    }
}
