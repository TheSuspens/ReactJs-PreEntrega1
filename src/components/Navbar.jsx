
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>LaMatera</h1>
      </div>
      <ul>
        <h2></h2>
        <li><a href="#">Mates</a></li>
        <li><a href="#">Bombillas</a></li>
        <li><a href="#">Yerbas</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;


