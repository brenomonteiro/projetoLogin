package com.sistemaecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistemaecommerce.domain.Cd;

@Repository
public interface CdRepository extends JpaRepository<Cd, Integer> {

}
