import { useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState(false);
  const [locked, setLocked] = useState(false);
  const [closed, setClosed] = useState(true);
  const [announce, setAnnounce] = useState("Hi, interact with the Door");
  const door = {
    isLocked: () => `Doors are ${locked ? "Locked" : "Unlocked"}`,
    isClosed: () => `Doors are ${closed ? "Closed" : "Opened"}`,

    lock: () => {
      if (closed) {
        setLocked(!locked);
        setAnnounce(locked ? "Doors have been unlocked" : "Doors have been locked");
      } else {
        setAnnounce("Doors can't be locked while they are open");
      }
    },

    open: () => {
      if (!locked) {
        if (closed) {
          setClosed(false);
          setActive(true);
          setAnnounce("Doors have been opened");
        } else {
          setAnnounce("Doors have already been opened");
        }
      } else {
        setAnnounce("Doors are locked, they can't be opened");
      }
    },

    close: () => {
      if (closed) {
        setAnnounce("Doors are already closed");
      } else {
        setActive(false);
        setClosed(true);
        setAnnounce("Doors have been closed");
      }
    }
  };

  return (
    <>
      <div className="info">Project made for learning purposes about objects and their possibilities in JavaScript</div>
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
          <button onClick={door.open} className="open">Open</button>
          <button onClick={door.close} className="close">Close</button>
          <button onClick={door.lock} className="lock">Lock/Unlock</button>
        </div>
        <div className="setup">
          🚪 {door.isClosed()} | 🔑 {door.isLocked()}
        </div>
      </div>
    </>
  );
}

export default App;
