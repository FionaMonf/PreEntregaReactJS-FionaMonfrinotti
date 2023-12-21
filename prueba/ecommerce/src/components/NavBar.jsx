import { useState } from 'react'

import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
    <div class="container-fluid navegador" style={{justifyContent:'center'}}>
      <div>
      <a class="navbar-brand" href="#">Home</a>
      <a  class="navbar-brand" href="#">Categorias</a>
          <a  class="navbar-brand" href="#">Contacto</a>
          <a  class="navbar-brand" href="#">Formas de pago</a>
          </div>
          <CartWidget>
         </CartWidget>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">

         
        </div>
      </div>
    </div>

  </nav>

  </div>
  );
};
export default NavBar

