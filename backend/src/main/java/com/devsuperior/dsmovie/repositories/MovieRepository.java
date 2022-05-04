package com.devsuperior.dsmovie.repositories;

import com.devsuperior.dsmovie.entities.Product;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Product, Long> {
    
}
