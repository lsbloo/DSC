package com.example.demo.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * 
 * @author osvaldoairon
 *
 */
@Entity
public class Turma{
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;
	
	@ManyToMany
	private List<Professor> professor;
	
	
	private String nome;
	
	private String codigo;
	
	private String creat_at;
	
	
	private Integer quantidade_alunos;

	public Integer getQuantidade_alunos() {
		return quantidade_alunos;
	}

	public void setQuantidade_alunos(Integer quantidade_alunos) {
		this.quantidade_alunos = quantidade_alunos;
	}



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	
	public Turma() {
		
	}
	public Turma(String nome , String codigo  , Integer quantidade_alunos, String creat_at) {
		setNome(nome);
		setCodigo(codigo);
		setQuantidade_alunos(quantidade_alunos);
		setCreat_at(creat_at);
	}

	

	public List<Professor> getProfessor() {
		return professor;
	}

	public void setProfessor(List<Professor> professor) {
		this.professor = professor;
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
	


}
