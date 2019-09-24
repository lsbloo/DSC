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