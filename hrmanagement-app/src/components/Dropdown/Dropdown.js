import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown({ active, setActive }) {
  return (
    <div className="menu" onClick={() => setActive(!active)}>
      <h3 className="menu-item">
        <Link to="/">HOME</Link>
      </h3>
      <ul>
        <li className="menu-item">
          <Link to="/material">Material UI</Link>
        </li>
        <li className="menu-item">
          <Link to="/chakra">Chakra UI</Link>
        </li>
        <li className="menu-item">
          <Link to="/theme">Theme UI</Link>
        </li>
        <li className="menu-item">
          <Link to="/grommet">Grommet</Link>
        </li>
        <li className="menu-item">
          <Link to="/reactStrap">React Strap</Link>
        </li>
        <li className="menu-item">
          <Link to="/antDesign">Ant-Design</Link>
        </li>
        <li className="menu-item">
          <Link to="/reactBootstrap">React-Bootstrap</Link>
        </li>
        <li className="menu-item">
          <Link to="/blueprint">Blueprint UI</Link>
        </li>
        <li className="menu-item">
          <Link to="/semanticReact">Semantic UI React</Link>
        </li>
        <li className="menu-item">
          <Link to="/rebass">Rebass</Link>
        </li>
        <li className="menu-item">
          <Link to="/fluent">Fluent UI</Link>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
