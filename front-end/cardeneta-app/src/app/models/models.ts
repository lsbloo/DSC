
export class Cursos{

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
export class Aluno{
    nome: String;
    cpf: String;
    responsavel: String;
    contato: String;
    endereco: String;
    dataNascimento: String;
    email: String;

    constructor(nome: String , cpf: String , responsavel: String , contato: String , endereco: String, dataNascimento: String, email: String){
        this.nome=nome;
        this.cpf=cpf;
        this.responsavel=responsavel;
        this.endereco=endereco;
        this.dataNascimento=dataNascimento;
        this.email=email;
    }
}

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
