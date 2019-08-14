package com.example.demo.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

/**
 * 
 * @author osvaldoairon
 *
 */
@Entity
public class Aluno extends UserApp  {
	
	
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;
	
	private String nome;
	
	private String codigo;
	
	private String creat_at;
	
	private String update_at;
	
	
	public Aluno() {}
	public Aluno(String nome,String codigo,String cpf, String responsavel,String contato,String endereco,String data,String email,String creat_at) {
		setNome(nome);
		setCpf(cpf);
		setResponsavel(responsavel);
		setContato(contato);
		setEndereco(endereco);
		setDataNascimento(data);
		setEmail(email);
		setCodigo(codigo);
		setCreat_at(creat_at);
	}
	
	
	
	
	@Column(name="cpf",length=14)
	private String cpf;
	@Column(name="responsavel",length=100)
	private String responsavel;
	
	@Column(name="contato",length=100)
	private String contato;
	
	@Column(name="endereco",length=100)
	private String endereco;
	
	@Column(name="dataNascimento",length=100)
	private String dataNascimento;
	
	@Column(name="email",length=100)
	private String email;

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getResponsavel() {
		return responsavel;
	}

	public void setResponsavel(String responsavel) {
		this.responsavel = responsavel;
	}

	public String getContato() {
		return contato;
	}

	public void setContato(String contato) {
		this.contato = contato;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(String dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCodigo() {
		return codigo;
	}
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	public String getCreat_at() {
		return creat_at;
	}
	public void setCreat_at(String creat_at) {
		this.creat_at = creat_at;
	}
	public String getUpdate_at() {
		return update_at;
	}
	public void setUpdate_at(String update_at) {
		this.update_at = update_at;
	}
	


}
