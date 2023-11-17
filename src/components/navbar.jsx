import styled from "styled-components";
import { NavLink } from "react-router-dom";  

const NavUnlisted = styled.ul`

display: flex;

a {
    text-decoration: none;
}

li {
    color: white;
    margin: 0 0.8rem;
    font-size: 1.3rem;
    position: relative;
    list-style: none;
}

.current {
    li {
        border-bottom: 2px solid white;
    }
}
`;

function Nav() {
return (
    <NavUnlisted>
    <NavLink to="/" activeClassName="current" exact>
        <li>Home</li>
    </NavLink>
    <NavLink to="/todos" activeClassName="current" exact>
        <li>To Do List</li>
    </NavLink>
    <NavLink to="/contact" activeClassName="current" exact>
        <li>Contact</li>
    </NavLink>
    </NavUnlisted>
);
}

export default Nav
