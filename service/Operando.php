<?php

namespace op;

class Operando{

    private float $operando1;
    private float $operando2;

    public function __get($property)
    {
        if(property_exists($this,$property)){
            return $this->$property;
        }
    }

    public function __Set($property,$value){

        if(property_exists($this,$property)){
            $this->$property=$value;
        }
    }
}
