import DrawersImg from "../assets/drawers.jpg"
import "../styles/CardImage.css";

const CardImage = () => {
    return (
        <div className="card-img-container">
            <img 
                className="card-img-image"
                src={DrawersImg}
                alt="drawers"
            />
        </div>
    );
}

export default CardImage;