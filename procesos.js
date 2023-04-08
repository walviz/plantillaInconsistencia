// eliminar espacios en blanco
Legado.addEventListener("keyup",e=>{let string =e.target.value ;e.target.value = string.split(" ").join("");})
Gis.addEventListener("keyup",e=>{let string =e.target.value ;e.target.value = string.split(" ").join("");})
CC.addEventListener("keyup",e=>{let string =e.target.value ;e.target.value = string.split(" ").join("");})
Entra.addEventListener("keyup",e=>{let string =e.target.value ;e.target.value = string.split(" ").join("");})
Sale.addEventListener("keyup",e=>{let string =e.target.value ;e.target.value = string.split(" ").join("");})

// convertir a mayusculas
function mayus(e) {
  e.value = e.value.toUpperCase();
  
}



//copiar al portapapeles
function copyToClipBoard(parametro) {
  var texto = document.getElementById(parametro);
  texto.select();
  document.execCommand("copy");
}

//borra un solo texto
function deliteTextbox(param){
  document.getElementById(param).value = "";
}

//borra todo
function borrarTodo() {
  document.getElementById("Caso").value = "";
  document.getElementById("IdLlamada").value = "";
  document.getElementById("Legado").value = "";
  document.getElementById("Gis").value = "";
  document.getElementById("CC").value = "";
  document.getElementById("Entra").value = "";
  document.getElementById("Sale").value = "";
  document.getElementById("observaciones").value = "";
  document.getElementById("nota").value = "";
  document.getElementById("guiones").selectedIndex = "";
}

function capturarTodo() {
  let caso = document.getElementById("Caso").value;
  let llamada = document.getElementById("IdLlamada").value;
  let legado = document.getElementById("Legado").value;
  let gis = document.getElementById("Gis").value;
  let cc = document.getElementById("CC").value;
  let entra = document.getElementById("Entra").value;
  let sale = document.getElementById("Sale").value;
  let observaciones = document.getElementById("observaciones").value;
  let fecha = new Date();
  //enviar toda la informacion capturada  a la plantilla
  document.getElementById("plantilla").value =
    "\n" +
    "Fecha: " + converMonth(fecha.getMonth()) +"-" +fecha.getDate() +"\n" +
    "ID Caso: " + caso + "\n" +
    "ID llamada: " +  llamada + "\n" +
    "ID servicio: " + legado +"\n" +
    "ID Gis: " +gis +"\n" +
    "Cedula: " +cc +"\n" +
    "Equipo entrante: " +entra +"\n" +
    "Equipo saliente: " +sale +"\n" +
    "Observaciones: " + observaciones + "\n" +
    "Login: Walvizva";
  copyToClipBoard("plantilla");
}

// capturar sintexto
function captura(parametro) {
  var codigoACopiar = document.getElementById(parametro);
  navigator.clipboard.writeText(codigoACopiar.value);
}

//convertir numero del mes en mes texto
function converMonth(mes) {
  mes++;
  if (mes == 1) return "Enero";
  if (mes == 2) return "Febrero";
  if (mes == 3) return "Marzo";
  if (mes == 4) return "Abril";
  if (mes == 5) return "Mayo";
  if (mes == 6) return "Junio";
  if (mes == 7) return "Julio";
  if (mes == 8) return "Agosto";
  if (mes == 9) return "Septiembre";
  if (mes == 10) return "Octubre";
  if (mes == 11) return "Noviembre";
  if (mes == 12) return "Diciembre";
}

//para plantilla M6
function capturarTodoM6(){
  let caso = document.getElementById("Caso").value;
  let llamada = document.getElementById("IdLlamada").value;
  let legado = document.getElementById("Legado").value;
  let gis = document.getElementById("Gis").value;
  let cc = document.getElementById("CC").value;
  let entra = document.getElementById("Entra").value;
  let sale = document.getElementById("Sale").value;
  let fecha = new Date();
  document.getElementById("plantilla").value =
    "Fecha: " + converMonth(fecha.getMonth()) +"-" +fecha.getDate() +"\n" +
    "ID Caso: " + caso + "\n" +
    "ID llamada: " +  llamada + "\n" +
    "ID servicio: " + legado +"\n" +
    "ID Gis: " +gis +"\n" +
    "Cedula: " +cc +"\n" +
    "Equipo entrante: " +entra +"\n" +
    "Equipo saliente: " +sale +"\n" +
    "Login: Walvizva";
    copyToClipBoard("plantilla");

}


//Actualizacion de enviarPlantilla()
function plantillaCompleta(){
  let opcion = document.getElementById("guiones").value;
  let entra = document.getElementById("Entra").value;
  let legado = document.getElementById("Legado").value;

  switch(opcion){
    case "0":
      document.getElementById("observaciones").value ="Buen día, se ingresa equipo " + entra + " según lo indicado, prueba integrada: ";
      break;   
    case "1":
      document.getElementById("observaciones").value = "Buen día, No se actualiza equipo porque no nos suministra cual es el equipo que sale en reemplazo del que entra, ya que cliente cuenta en oss con la misma cantidad de equipos  que la contratada ";
      break;
    case "2":
      document.getElementById("observaciones").value ="Buen día compa, la MAC O serial o NSCID: " +entra +" que nos suministras NO trae información al respecto en inventario";
      break;
    case "3":
      document.getElementById("observaciones").value ="Buen día, no se corrige ya que equipo que nos indicas aparecen asignado a otro id servicio xxx  que actualmente no ha sido retirado, se debe legalizar equipos con técnico en terreno.";
        break;
    case "4":
      document.getElementById("observaciones").value = "Buen día, se crea CR xxx para el correcto cierre del pedido xxx y poder corregir equipos en oss";
        break;
    case "5":
      document.getElementById("observaciones").value ="Buen día. en nuestra base de datos no registra el ID " +legado +" que nos indicas, se debe validar la información para la corrección del servicio.";
        break;
    case "6":
      document.getElementById("observaciones").value = "Buen día, no se corrige ya que pedido cuenta con ordenes abiertas en GTC,MSS y no es posible realizar modificaciones hasta que estas estén cerradas, Se debe hacer SS PUMED y esperar el cierre de este.";
        break;
    case "7":
      document.getElementById("observaciones").value ="Buen día, Desde nuestro grupo no se actualizan equipos de ELITE por lo tanto lo debes escalar por CONSULTA LIDERES";
        break;
    case "8":
      document.getElementById("observaciones").value ="Buen día, Desde nuestro grupo no se actualizan equipos de Tecnología REDCO/GPON y servicios C3 PYMES  de ANTIOQUIA  asi sea HFC que carguen por nacional, porque el inventario y la infraestructura sigue estando montada en Fénix ATC, por lo tanto lo debes escalar por CONSULTA LIDERES.";
        break;
    case "9":
      document.getElementById("observaciones").value ="Buen día, compa no nos indicas cuan es el ID del servicio al cual hay que generar la corrección";
        break;
    case "10":
      document.getElementById("observaciones").value ="Buen día, servicio aparece con los equipos que nos indicas Prueba Integrada xxx , para crear o activar cuentas en verimatrix es con consulta lideres o rescate virtual";
        break;
    case "11":
      document.getElementById("observaciones").value ="Buen día, no se puede corregir ya que servicio que nos indicas cuenta con pedido de retiro en proceso xxx  con ordenes abiertas en MSS (Baja por solicitud del cliente)";
        break;
    case "12":
      document.getElementById("observaciones").value ="Buen día, se ingresa equipo " +entra +" que nos indicas al OSS Prueba Integrada  xxx, se debe validar con rescate virtual o lideres si pueden cargar paquete de canales ya que cuenta con pedidos en proceso ";
        break;
    case "13":
      document.getElementById("observaciones").value ="Buen día, Servicio se encuentra con estado inactivo, servicio retirado";
        break;
    case "14":
      document.getElementById("observaciones").value ="Buen día, para temas de reaprovisionamiento, registro o permisos de líneas telefónicas debe ser escalado con el área de consulta lideres";
        break;
    case "15":
  
        break;
    case "16":
  
        break;
    case "17":
  
        break;
    case "26":
      document.getElementById("observaciones").value =
      "Buen día, equipo " +
      entra +
      " que nos indicas ya aparece en el oss del usuario, no hay inconsistencia, prueba integrada ";
        break;
    







    default: false;
  }



}

//establecre guiones
function enviarPlantilla() {
  let opcion = document.getElementById("guiones").value;

  if(opcion=="s"){
    document.getElementById("observaciones").value ="";
  }

  if (opcion == "0") {
    let entra = document.getElementById("Entra").value;
    document.getElementById("observaciones").value =
      "Buen día, se ingresa equipo " +
      entra +
      " según lo indicado, prueba integrada: ";
  }
  if (opcion == "1") {
    document.getElementById("observaciones").value =
      "Buen día, No se actualiza equipo porque no nos suministra cual es el equipo que sale en reemplazo del que entra, ya que cliente cuenta en oss con la misma cantidad de equipos  que la contratada ";
  }
  if (opcion == "2") {
    let entra = document.getElementById("Entra").value;
    document.getElementById("observaciones").value =
      "Buen día compa, la MAC O serial o NSCID: " +
      entra +
      " que nos suministras NO trae información al respecto en inventario";
  }
  if (opcion == "3") {
    document.getElementById("observaciones").value =
      "Buen día, no se corrige ya que equipo que nos indicas aparecen asignado a otro id servicio xxx  que actualmente no ha sido retirado, se debe legalizar equipos con técnico en terreno.";
  }
  if (opcion == "4") {
    document.getElementById("observaciones").value =
      "Buen día, se crea CR xxx para el correcto cierre del pedido xxx y poder corregir equipos en oss";
  }

  if (opcion == "5") {
    let legado = document.getElementById("Legado").value;
    document.getElementById("observaciones").value =
      "Buen día. en nuestra base de datos no registra el ID " +
      legado +
      " que nos indicas, se debe validar la información para la corrección del servicio.";
  }

  if (opcion == "6") {
    document.getElementById("observaciones").value =
      "Buen día, no se corrige ya que pedido cuenta con ordenes abiertas en GTC,MSS y no es posible realizar modificaciones hasta que estas estén cerradas, Se debe hacer SS PUMED y esperar el cierre de este.";
  }

  if (opcion == "7") {
    document.getElementById("observaciones").value =
      "Buen día, Desde nuestro grupo no se actualizan equipos de ELITE por lo tanto lo debes escalar por CONSULTA LIDERES";
  }

  if (opcion == "8") {
    document.getElementById("observaciones").value =
      "Buen día, Desde nuestro grupo no se actualizan equipos de Tecnología REDCO/GPON y servicios C3 PYMES  de ANTIOQUIA  asi sea HFC que carguen por nacional, porque el inventario y la infraestructura sigue estando montada en Fénix ATC, por lo tanto lo debes escalar por CONSULTA LIDERES.";
  }

  if (opcion == "9") {
    document.getElementById("observaciones").value =
      "Buen día, compa no nos indicas cuan es el ID del servicio al cual hay que generar la corrección";
  }

  if (opcion == "10") {
    document.getElementById("observaciones").value =
      "Buen día, servicio aparece con los equipos que nos indicas Prueba Integrada xxx , para crear o activar cuentas en verimatrix es con consulta lideres o rescate virtual";
  }

  if (opcion == "11") {
    document.getElementById("observaciones").value =
      "Buen día, no se puede corregir ya que servicio que nos indicas cuenta con pedido de retiro en proceso xxx  con ordenes abiertas en MSS (Baja por solicitud del cliente)";
  }

  if (opcion == "12") {
    let entra = document.getElementById("Entra").value;
    document.getElementById("observaciones").value =
      "Buen día, se ingresa equipo " +
      entra +
      " que nos indicas al OSS Prueba Integrada  xxx, se debe validar con rescate virtual o lideres si pueden cargar paquete de canales ya que cuenta con pedidos en proceso ";
  }

  if (opcion == "13") {
    document.getElementById("observaciones").value =
      "Buen día, Servicio se encuentra con estado inactivo, servicio retirado";
  }

  if (opcion == "14") {
    document.getElementById("observaciones").value =
      "Buen día, para temas de reaprovisionamiento, registro o permisos de líneas telefónicas debe ser escalado con el área de consulta lideres";
  }

  if (opcion == "15") {
    document.getElementById("observaciones").value =
      "Buen día, compa el nscid xxxx que nos indicas nos registra con un serial totalmente diferente al que nos indicas, se debe validar correctamente la información del equipo o legalizarlo con técnico en terreno";
  }

  if (opcion == "16") {
    document.getElementById("observaciones").value =
      "Buen día, compa no se puede realizar corrección en OSS ya que actualmente servicio se encuentra suspendido por falta de pago Prueba Integrada xxx";
  }

  if (opcion == "17") {
    document.getElementById("observaciones").value =
      "Buen día, no se puede ingresar equipo ya que los Lite Zapper no se puede ingresar en una oferta NOV Android Trio, se debe enviar con premisas para cambio de equipo ";
  }

  if (opcion == "18") {
    let sale = document.getElementById("Sale").value;
    document.getElementById("observaciones").value =
      "Buenas noches, se devuelve caso ya que el equipo: " +
      sale +
      " que notifican retirar no esta en oss, por favor validar cuales son los equipos que salen";
  }

  if (opcion == "19") {
    document.getElementById("observaciones").value =
      "Buen día, no se puede asociar ya que servicio se encuentra bajo una promoción asociada diferente, se debe validar con servicio al cliente para en caso que aplique, realizar el correcto empaquetamiento del servicio. ";
  }

  if (opcion == "20") {
    document.getElementById("observaciones").value =
      "Buen dia, compa no nos llenaste la plantilla completamente, falta el id de la llamada para realizar cualquier modificación desde nuestra área, se debe montar nuevamente y con los datos solicitados en la plantilla.";
  }

  if (opcion == "21") {
    document.getElementById("observaciones").value =
      "Buen dia, compa no se puede asociar la telefonía al CM que nos indicas ya que este pertenece al id servicio xxx y al ser empresa, se manejan infraestructuras diferentes, si hay que asociar la to, se debe validar con premisas y verificar dicho equipo. ";
  }

  if (opcion == "22") {
    let entra = document.getElementById("Entra").value;
    document.getElementById("observaciones").value =
      "Buen dia, equipo que nos indicas " +
      entra +
      " ya aparece en el oss del usuario Prueba Integrada xxx , para cargar paquete de canales en los decodificadores se debe verificar con rescate virtual o lideres.";
  }

  if (opcion == "23") {
    document.getElementById("observaciones").value =
      "Buen dia, compa no se pueden eliminar la cantidad de equipos que nos indicas ya que usuario tiene contratado 4 equipos no se puede dejar los 3 que nos indicas, para eliminar equipo sobrante se debe validar con SAC, para poder legalizar la totalidad de equipos en oss";
  }

  if (opcion == "24") {
    document.getElementById("observaciones").value =
      "Buen dia, desde nuestra area no se realizan reconexiones de servicio, se debe validar con servicio al cliente.";
  }

  if (opcion == "25") {
    document.getElementById("observaciones").value =
      "Buen día, servicio aparece con los equipos que nos indicas en OSS Prueba Integrada  xxx, no hay inconsistencia. se debe validar con rescate virtual o lideres si pueden cargar paquete de canales ya que cuenta con pedidos en proceso ";
  }

  if (opcion == "26") {
    let entra = document.getElementById("Entra").value;
    document.getElementById("observaciones").value =
      "Buen día, equipo " +
      entra +
      " que nos indicas ya aparece en el oss del usuario, no hay inconsistencia, prueba integrada: ";
  }
}
