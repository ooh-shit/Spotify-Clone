import React from "react";
import Main from "./components/Main";
import SideBar from "./components/SideBar.jsx/SideBar";
import Player from "./components/player/player";


function App()
{
  return <div className="view">
    <SideBar/>
    <Main/>
    <Player/>
  </div>
}

export default App