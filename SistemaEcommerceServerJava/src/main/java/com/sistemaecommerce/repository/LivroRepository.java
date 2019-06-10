package com.sistemaecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistemaecommerce.domain.Livro;

@Repository
public interface LivroRepository extends JpaRepository<Livro, Integer> {

}
