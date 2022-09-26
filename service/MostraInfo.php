<?php
    require_once("Estudiante.php");
    use op\Estudiante as Es;
    session_start();
    if($_SERVER["REQUEST_METHOD"]==='GET'){
        $estudiante=new Es();
        
        $_SESSION['INFO']=array(
            "nombre" =>$estudiante->nombre,
            "apellido"=>$estudiante->apellido,
            "grupo"=>$estudiante->grupo,
            "cedula"=>$estudiante->cedula
        );

        echo json_encode($_SESSION['INFO']);
    }

?>