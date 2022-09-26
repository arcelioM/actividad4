<?php 

require_once("operaciones.php");
use op\operaciones as op;

    if($_SERVER["REQUEST_METHOD"]==='POST'){

        if(!empty($_POST["num1"]) && !empty($_POST["num2"])){
            
            $num1=$_POST["num1"];
            $num2=$_POST["num2"];
            $operacion=$_POST['op'];
            $result=null;

            switch($operacion){
                case 1: 
                        $result=op::suma($num1,$num2);
                        break;
                case 2: 
                        $result=op::resta($num1,$num2);
                        break;
                case 3: 
                        $result=op::div($num1,$num2);
                        break;
                case 4: 
                        $result=op::multi($num1,$num2);
                        break;
                default: 
                        $result="Operacion no valida";
            }
            
            $mayor=op::comparar($num1,$num2);
            //
            $valores=array(
                "valor"=>number_format($result,2),
                "mayor"=>$mayor
            );

            echo json_encode($valores);
        }else{
            echo json_encode(false);
        }
    }

?>