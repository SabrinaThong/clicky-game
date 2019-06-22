
import React from "react";
import "./Navbar.css";

function Navbar(props) {
return(

      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft">Clicky Game</li>
          <li className="itemCenter"></li>
          <li className="itemRight">Score: {props.count}</li>
        </ul>
      </nav>
)
}

     


export default Navbar;
