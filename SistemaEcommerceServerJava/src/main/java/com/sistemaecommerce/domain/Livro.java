package com.sistemaecommerce.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Livro implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int codigo;
	private String obra;
	private String autor;
	private String genero;
	private String isbn;	
	
	public Livro() {
		super();
	}

	public Livro(int codigo, String obra, String autor, String genero, String isbn) {
		super();
		this.codigo = codigo;
		this.obra = obra;
		this.autor = autor;
		this.genero = genero;
		this.isbn = isbn;
	}

	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

	public String getobra() {
		return obra;
	}

	public void setobra(String obra) {
		this.obra = obra;
	}

	public String getautor() {
		return autor;
	}

	public void setautor(String autor) {
		this.autor = autor;
	}

	public String getgenero() {
		return genero;
	}

	public void setgenero(String genero) {
		this.genero = genero;
	}

	public String getisbn() {
		return isbn;
	}

	public void setisbn(String isbn) {
		this.isbn = isbn;
	}
}
