import DrawersImg from "../assets/drawers.jpg"

const CardImage = () => {
    return (
        <img 
            className="card-img"
            src={DrawersImg}
            alt="drawers"
        />
    );
}

export default CardImage;