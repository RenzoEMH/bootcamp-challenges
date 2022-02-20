import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [photos, setPhotos] = useState([]);

  const getPhotosFromApi = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    ).then((response) => response.json());
    setPhotos(response);
  };

  useEffect(() => {
    getPhotosFromApi();
  }, []);

  return (
    <div className="App">
      {photos.map(({ id, title, thumbnailUrl }) => (
        <div key={id} className="card">
          <img src={thumbnailUrl} alt="" />
          <h3>{title}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
