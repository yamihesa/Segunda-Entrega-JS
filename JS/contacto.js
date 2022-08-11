/* const formulario= []; */
let form = document.getElementById("form")
 
form.addEventListener("submit", e =>{
    e.preventDefault();

})
form.innerHTML =`
<div>
<p class="tituloContacto">Contactate Conmigo</p>
</div>
<div class="form-group">
  <label class="nombre">Nombre</label>
  <input id="nombre" name="name" type="text" placeholder="Nombre" class="form-control input">
</div>

<div class="form-group">
  <label class="apellido">Apellido</label>
  <input id="apellido" name="name" type="text" placeholder="Apellido" class="form-control">
</div>
<div class="form-group">
  <label class="email">Email</label>
  <input id="email" name="email" type="text" placeholder="Email" class="form-control">
</div>
<div class="form-group">
  <label class="telefono">Teléfono</label>
  <input id="phone" name="phone" type="text" placeholder="Teléfono" class="form-control">
</div>
<div class="form-group">
  <label class="comentario">Comentario</label>
  <textarea class="form-control" id="message" name="message" placeholder="Deje su mensaje" rows="6"></textarea>
</div>
<div class="form-groupBotones">
  <button id="boton" type="submit" class="btn btn enviar">Enviar</button>
  <button id="boton1" type="submit" class="btn btn borrar">Borrar</button>
</div>
`