import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className ="navegador">
      <h1>Silver Sea</h1>
      <ul>
        <li>Home</li>
        <li>Contacto</li>
        <li>nosotros</li>
        <li>productos</li>
      </ul>
      <CartWidget/>
    </nav>
  )
};

export default NavBar;
