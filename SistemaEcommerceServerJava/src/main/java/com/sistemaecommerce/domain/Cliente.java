package com.sistemaecommerce.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cliente implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int codigo;
	private String nome;
	private String cargo;
	private String endereco;
	
	
	public Cliente() {
		super();
	}

	public Cliente(int codigo, String nome, String cargo, String endereco) {
		super();
		this.codigo = codigo;
		this.nome = nome;
		this.cargo = cargo;
		this.endereco = endereco;
	}

	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

	public String getnome() {
		return nome;
	}

	public void setnome(String nome) {
		this.nome = nome;
	}

	public String getcargo() {
		return cargo;
	}

	public void setcargo(String cargo) {
		this.cargo = cargo;
	}

	public String getendereco() {
		return endereco;
	}

	public void setendereco(String endereco) {
		this.endereco = endereco;
	}

}
