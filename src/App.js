import "./App.css";
import { useEffect, useState } from "react";
import "./components/LikeButton";
import LikeButton from "./components/LikeButton";

function App() {
  const [data, setData] = useState(new Date());
  const [title, setTitle] = useState("");
  const [img, setImg] = useState();
  const [loading, setLoading] = useState(true);
  const [roverData, setRoverData] = useState([]);

  const requestUrl1 =
    "https://api.nasa.gov/planetary/apod?api_key=SQOgyZ6EZ0asb9jpCEJamIFmohyBkeyaFQzMBdzG";
  const requestUrl2 =
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=SQOgyZ6EZ0asb9jpCEJamIFmohyBkeyaFQzMBdzG";

  async function fetchPOTDData() {
    const response = await fetch(requestUrl1);
    const imgres = await response.json();
    console.log(imgres);
    setImg(imgres.url);
    setData(imgres.date);
    setTitle(imgres.title);
    setLoading(false);
  }

  async function fetchRoverData() {
    const response = await fetch(requestUrl2);
    const parseres = await response.json();
    // console.log(parseres);
    setRoverData(parseres);
    console.log(roverData);
  }
  useEffect(() => {
    fetchPOTDData();
    fetchRoverData();
  }, []);

  if (loading) {
    return "Still Loading";
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="potd">Nasa's Photo of the Day</h1>
          <div className="container">
            <img src={img} className="imageDisplay" alt="" />
            <div className="middle">
              <div className="text">
                <p>{data}</p>
                <p>{title}</p>
                <LikeButton />
              </div>
            </div>
          </div>
        </header>
        <h1>Mars Rover Pictures</h1>
        {roverData.photos.map((photo) => {
          console.log(photo.id);
          return (
            <div className="container">
              <img src={photo.img_src} className="imageDisplay" alt="" />
              <div className="middle">
                <div className="text">
                  <p style={{ color: "black" }}>
                    Earth Date: {photo.earth_date}
                  </p>
                  <p style={{ color: "black" }}>
                    Camera: {photo.camera.full_name}
                  </p>
                  <LikeButton />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
