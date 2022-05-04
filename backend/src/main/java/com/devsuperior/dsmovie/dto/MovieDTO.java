package com.devsuperior.dsmovie.dto;

import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.devsuperior.dsmovie.entities.Product;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class MovieDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Double price;
    private Date publicationHour;
    private String image;
    private String link;

    public MovieDTO(Product movie) {
        id = movie.getId();
        name = movie.getName();
        price = movie.getPrice();
        publicationHour = movie.getPublicationHour();
        image = movie.getImage();
        link = movie.getLink();
    }
}