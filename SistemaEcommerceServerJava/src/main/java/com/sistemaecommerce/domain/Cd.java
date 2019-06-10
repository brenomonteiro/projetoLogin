package com.sistemaecommerce.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cd implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int codigo;
	private String artista;
	private String album;
	private String ano;
	
	
	public Cd() {
		super();
	}

	public Cd(int codigo, String artista, String album, String ano) {
		super();
		this.codigo = codigo;
		this.artista = artista;
		this.album = album;
		this.ano = ano;
	}

	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

	public String getartista() {
		return artista;
	}

	public void setartista(String artista) {
		this.artista = artista;
	}

	public String getalbum() {
		return album;
	}

	public void setalbum(String album) {
		this.album = album;
	}

	public String getano() {
		return ano;
	}

	public void setano(String ano) {
		this.ano = ano;
	}

}
