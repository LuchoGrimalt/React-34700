import React   from 'react';

function Menu() {
  return (
  <>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info">
  <div class="container-fluid">
    <a class="navbar-brand  text-dark" href="#" >Guadapulpe Miniboutique</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-dark" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  text-dark" href="#">Accesorios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  text-dark" href="#">Niños</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  text-dark" href="#">Niñas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  text-dark" href="#">Arte</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  text-dark" href="#">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
  );
}

export default Menu;