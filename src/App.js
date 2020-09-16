import React, { useState } from "react";
import "./App.css";
import Albums from "./components/Albums";
import AdminPanel from "./components/AdminPanel";
import AlbumInfo from "./components/AlbumInfo";

const views = {
  ALBUMS: "ALBUMS",
  ADMIN: "ADMIN",
  DETAILS: "DETAILS"
};

function App() {
  const [view, setView] = useState(views.ALBUMS);
  const [idPass, setIdPass] = useState();

  return (
    <div>
      <header>
        <h2><a className="header-text" href="/">Albums Site</a></h2>
        <nav>
        <button className={"nav-button " + 
            (view === views.ALBUMS? "active" : "")} 
            onClick={() => setView(views.ALBUMS)}>
              Albums
            </button>
            <button className={"nav-button " + 
            ((view === views.ADMIN)? "active" : "")} 
            onClick={() => setView(views.ADMIN)}>
              Admin
            </button>
        </nav>
      </header>
      <main>
        {view === views.ALBUMS && <Albums passId = {(id)=>setIdPass(id)} onTitleClick = {(update)=>setView(update)} />}
        {view === views.ADMIN && <AdminPanel />}
        {view === views.DETAILS && <AlbumInfo albumId = {idPass}/>}
      </main>
    </div>
  );
}

export default App;
