import CardImage from "./CardImage";
import CardInfo from "./CardInfo";
import CardProfile from "./CardProfile";
import "../styles/Card.css";

const Card = () => {
    return (
        <section className="card">
            <CardImage />
            <div className="card-info-section">
                <CardInfo />
                <CardProfile />
            </div>
        </section>
    );
}

export default Card;