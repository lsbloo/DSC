package com.example.demo.models;

import javax.persistence.Entity;

/**
 * 
 * @author osvaldoairon
 *
 */
@Entity
public class Model extends UserApp{
	
	private String nome;

	private String codigo;
	
	private String created_at;
	
	private String update_at;

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

	public String getCreated_at() {
		return created_at;
	}

	public void setCreated_at(String created_at) {
		this.created_at = created_at;
	}

	public String getUpdate_at() {
		return update_at;
	}

	public void setUpdate_at(String update_at) {
		this.update_at = update_at;
	}

	

}
