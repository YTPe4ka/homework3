import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Popup from "./components/Popup";
import "./components/style.css";

const App = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isSaveOpen, setIsSaveOpen] = useState(false);

  return (
    <div>
      <Sidebar />

      <div className="video-container">
        <video controls>
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="button-container">
        <button onClick={() => setIsShareOpen(true)}>Share</button>
        <button onClick={() => setIsSaveOpen(true)}>Save</button>
      </div>

      <Popup
        isVisible={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        title="Share Video"
      >
        <p>Скопируйте ссылку: https://example.com/video</p>
        <button>Копировать ссылку</button>
      </Popup>

      <Popup
        isVisible={isSaveOpen}
        onClose={() => setIsSaveOpen(false)}
        title="Save to Playlist"
      >
        <p>Добавить видео в ваш плейлист.</p>
        <button>Добавить</button>
      </Popup>
    </div>
  );
};

export default App;
