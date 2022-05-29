var ordenes= [
    {nombre:"Nro Orden: #778596" , estado:"Procesado", clase:"estadoVerde" ,img:"../img/caja_seguir.png"},
    {nombre:"Nro Orden: #778519" , estado:"En ruta",clase:"estadoAzul", img:"../img/envio_seguir.png"},
    {nombre:"Nro Orden: #778580" , estado:"Entregado",clase:"estadoPurpura", img:"../img/check_seguir.png"},
    {nombre:"Nro Orden: #778572" , estado:"Entregado",clase:"estadoPurpura", img:"../img/check_seguir.png"},
    {nombre:"Nro Orden: #778538" , estado:"Entregado",clase:"estadoPurpura", img:"../img/check_seguir.png"},
    {nombre:"Nro Orden: #778528" , estado:"Entregado",clase:"estadoPurpura", img:"../img/check_seguir.png"},
  ]
  
  
  var acomulador_texto=""
  
  ordenes.forEach((element, index) => {
  index = index+1;
      var html_producto = `
      <tr>
        <th scope="row">${index} <img src="${element.img}"width="20px" height="20px"</th>
        <td>${element.nombre}</td>
        <td class="${element.clase}">${element.estado}</td>
      </tr>`
      
      acomulador_texto += html_producto
      $("#seguimiento").html( acomulador_texto )
  });
  