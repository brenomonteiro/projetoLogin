package com.sistemaecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistemaecommerce.domain.Filme;

@Repository
public interface FilmeRepository extends JpaRepository<Filme, Integer> {

}
