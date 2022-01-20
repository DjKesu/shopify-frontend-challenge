import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(new Date());
  const [img, setImg] = useState();
  const [title, setTitle] = useState();
  const [like, setLike] = useState(false);
  const [color, setColor] = useState("white");
  const [loading, setLoading] = useState(true);

  const requestUrl =
    "https://api.nasa.gov/planetary/apod?api_key=SQOgyZ6EZ0asb9jpCEJamIFmohyBkeyaFQzMBdzG";

  async function fetchData() {
    const response = await fetch(requestUrl);
    const imgres = await response.json();
    console.log(imgres);
    setImg(imgres.url);
    setData(imgres.date);
    setTitle(imgres.title);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function likeButton() {
    setLike(!like);
    console.log(color);
    setColor("red");
  }
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
                {/* <button onClick={likeButton()} style={{ color: color }}>
                  ❤️
                </button> */}
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default App;
