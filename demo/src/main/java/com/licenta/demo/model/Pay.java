package com.licenta.demo.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "plati")
public class Pay {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String nume;
    private String prenume;
    private Float suma;
    private String email;
    private String cnp;
    private String adresa;
    private String data;
    private String judet;
    private String motiv;
}
