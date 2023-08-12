import React from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link as LinkRoute } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import Login from "../Login";
import Logout from "./Logout";

function Navbar() {
  return (
    <nav className=" h-14 flex justify-around items-center bg-sky-200">
      <div>
        <h1 className="font-bold">Riv San</h1>
      </div>
     
      <div>
        {/* <Button>
            <Link className="font-bold">Login</Link>
          </Button> */}
        
          {/* <LinkRoute to={'/login'}>
          <Button> 
            <span className="font-bold">Login</span>
          </Button>
        </LinkRoute> */}
        <Logout />
      </div>
    </nav>
  );
}

export default Navbar;
