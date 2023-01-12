import Nav from "./Nav";
import "./Header.css";

function Header() {
  return (
    <header className="app-header">
      <div className="container">
        <h1>NC Games Reviews</h1>

        <Nav />
      </div>
    </header>
  );
}

export default Header;
