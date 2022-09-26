<?php

namespace op;

class Estudiante{

    private  String $nombre="Jazmin";
    private String $apellido="Gallardo";
    private String $grupo="2LS231";
    private String $cedula="4-123-124";

    public function __get($property)
    {
        if(property_exists($this,$property)){
            return $this->$property;
        }
    }

    
}
