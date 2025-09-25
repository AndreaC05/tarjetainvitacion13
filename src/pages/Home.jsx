import Contenido from "../components/Contenido";
import "../style/Home.css";

export default function Home() {
  return (
    <>
      <div className="container_home">
        <img
          className="video-background"
          src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758812489/descarga_o5ecwt.jpg"
        />

        {/* Video principal normal */}
        <img
          className="video-main"
          src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758812489/descarga_o5ecwt.jpg"
        />
        <div className="contenido_text">
          <Contenido />
        </div>
      </div>
    </>
  );
}