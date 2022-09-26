<?php

namespace op;

class operaciones{

    public static function suma(float $num1, float $num2):float{
        return $num1+$num2;
    }

    public static function resta(float $num1, float $num2):float{
        return $num1-$num2;
    }

    public static function multi(float $num1, float $num2):float{
        return $num1*$num2;
    }

    public static function div(float $num1, float $num2):float{
        return $num1/$num2;
    }

    public static function comparar(float $num1, float $num2){
        if($num1>$num2){
            return $num1;
        }else if($num2>$num1){
            return $num2;
        }else{
            return "Iguales";
        }
    } 
}
?>