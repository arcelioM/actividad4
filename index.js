$(document).ready(function () {
   
    //SOLICITANDO INFORMACION DE ESTUDIANTE POR AJAX
    $.ajax({
        url: 'service/MostraInfo.php',
        type: 'GET',
        datatype: 'json',
    }
    ).done(
        function(data){
            mostraDatos(data);

            //SE OCULTARA EL FORMULARIO Y TABLA PARA QUE SOLO SE VEA LA INFORMACION DEL ESTUDIANTE
            $('#calculadora').hide();
            $('#result').hide();
    
        }
    );
    
   
    /**
     * 
     * @param {"DATOS DEL ESTUDIANTE QUE SE MOSTRARA"} data 
     */
    function mostraDatos(data){

        //CONVIRTIENDO DATOS A JSON
        let json=JSON.parse(data);

        //DEFINIENDO ESTRUCTURA PARA MOSTRAR INFORMACION EN TABLA
        let estructura="<tr>"+"<td>Nombre</td> <td>"+json["nombre"]+"</td> </tr>"+
        "<tr>"+"<td>Apellido</td> <td>"+json["apellido"]+"</td> </tr>"+
        "<tr>"+"<td>C&eacute;dula</td> <td>"+json["cedula"]+"</td> </tr>" +
        "<tr>"+"<td>Grupo</td> <td>"+json["grupo"]+"</td> </tr>";

        //AGREGANDO ESTRUCTURA AL 0 'TBODY' DE TABLA
        $("#infoB").append(estructura);
    }

    /**
     * OBTENDRA LOS VALORES INGRESADOS EN EL FORMULARIO
     * Y LOS ENVIARA POR AJAX PARA SE REALICE LA OPERACION ELEGIDA
     */
    let calcular=function(){

        let num1=$("#num1").val();
        let num2=$("#num2").val();
        let op=$("#op").val();
        let result=0;
        
        if(num1==="" || num2===""){
            return;
        }
        //SE AGREGAN LOS DATOS A UN OBJETO JSON
        let valores={
            "num1": num1,
            "num2": num2,
            "op": op
        }

        
        webServiceOp(valores);
        

        
    }

    /**
     * 
     * @param {"DATOS A PROCESAR"} valores 
     * LOS DATOS SERAN ENVIADO POR AJAX PARA REALIZAR EL CALCULO QUE SE REQUIERA
     */
    function webServiceOp(valores){

        $.ajax({
            url: 'service/calcular.php',
            type: 'POST',
            datatype: 'json',
            data: valores,
        }
        ).done(
            //SE REALIZARA LUEGO QUE LA API RETORNE UNA RESPUESTA
            function(data){
                
                //SE CONVIERTE LOS DATOS DE RESPUESTA DE LA API A JSON
                let json=JSON.parse(data);

                //SE HARA VISIBLE LA TABLA DONDE ESTARA LOS RESULTADOS
                $('#result').show();

                //SE DEFINE LA ESTRUCTURA EN LA QUE SE MOSTRARA LOS DATOS EN LA TABLA
                let mostrar="<tr> <td>Valor 1</td> <td>"+$("#num1").val()+"</td> </tr>"+
                "<tr> <td>Valor 2</td> <td>"+$("#num2").val()+"</td> </tr>"+
                "<tr> <td>Resultado</td> <td>"+json['valor']+"</td> </tr>"+
                "<tr> <td>Valor Mayor</td> <td>"+json['mayor']+"</td> </tr>";

                //VACIANDO INPUT
                $("#num1").val("");
                $("#num2").val(""); 
                  
                //LA ESTRUCTURA SE REEMPLAZARA CON CADA CALCULO
                $('#btable').html(mostrar);               
            }
        );
        
    }

    //ENVENTO QUE SE EJECUTARA EN EL BOTON CALCULAR
    $('#btn').click(calcular);
    
    //ENVENTO QUE SE EJECUTARA EN EL BOTON 'HACER CALCULO'
    $('#cal').click(function(){
        $('#calculadora').show();
    });

    //ENVENTO QUE SE EJECUTARA EN EL BOTON CANCELAR
    //SE OCULTARA EL FORMULARIO
    $('#btnC').click(function(){
        $('#calculadora').hide();
    });
});