import { useState } from "react";
import "./App.css";

function App() {
  const [closed, setClosed] = useState(true);
  const [active, setActive] = useState(false);
  const [locked, setLocked] = useState(false);
  const [announce, setAnnounce] = useState("Hi! This object is a Door, interact with it.");

  const isLocked = () => `Doors are ${locked ? "Locked" : "Unlocked"}`;
  const isClosed = () => `Doors are ${closed ? "Closed" : "Opened"}`;

  const lock = () => {
    if (closed) {
      setLocked(!locked);
      setAnnounce(locked ? "Doors have been unlocked" : "Doors have been locked");
    } else {
      setAnnounce("Doors are open, they can't be locked");
    }
  };

  const open = () => {
    if (!locked) {
      if(closed == true){
      setClosed(false);
      setActive(true);
      setAnnounce("Doors have been opened");
      }else{
        setAnnounce("Doors have been already opened")
      }
    } else {
      setAnnounce("Doors are locked, they can't be opened");
    }
  };

  const close = () => {
    if (closed) {
      setAnnounce("Doors are already closed");
    } else {
      setActive(false);
      setClosed(true);
      setAnnounce("Doors have been closed");
    }
  };

  return (
    <>
    <div className="object">
      <div className="doorframe">
        <div className={`door ${active ? "active" : ""}`}>
          <div className="knob"></div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="alert">{announce}</div>
      <div className="buttons">
        <button onClick={open} className="open">Open</button>
        <button onClick={close} className="close">Close</button>
        <button onClick={lock} className="lock">Lock/Unlock</button>
      </div>
      <div className="setup">🚪{isClosed()} | 🔑{isLocked()}</div>
      </div>
    </>
  );
}

export default App;
