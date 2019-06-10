package com.sistemaecommerce.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Filme implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int codigo;
	private String nome;
	private String genero;
	private String ano;
	
	
	public Filme() {
		super();
	}

	public Filme(int codigo, String nome, String genero, String ano) {
		super();
		this.codigo = codigo;
		this.nome = nome;
		this.genero = genero;
		this.ano = ano;
	}

	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getgenero() {
		return genero;
	}

	public void setgenero(String genero) {
		this.genero = genero;
	}

	public String getano() {
		return ano;
	}

	public void setano(String ano) {
		this.ano = ano;
	}
}
