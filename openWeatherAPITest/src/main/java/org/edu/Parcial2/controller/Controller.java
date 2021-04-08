package org.edu.Parcial2.controller;

import java.io.IOException;
import org.edu.Parcial2.service.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sun.reflect.generics.reflectiveObjects.NotImplementedException;

import java.util.UUID;

@RestController
@RequestMapping
public class Controller {

    @Autowired
    ServiceW servicios;

    @ResponseBody
    @GetMapping(value="/clima/{name}")
    public ResponseEntity<?> getCity(@PathVariable("name") String name) {
        try {
            String query;
            query = servicios.getWeather(name);
            return new ResponseEntity<>(query,HttpStatus.ACCEPTED);
        } catch (IOException ex) {
            return new ResponseEntity<>("ERROR 404 NOT FOUND", HttpStatus.NOT_FOUND);
        }
    }

}