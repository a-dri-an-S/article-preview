import CardImage from "./CardImage";
import CardInfo from "./CardInfo";
import CardProfile from "./CardProfile";

const Card = () => {
    return (
        <section className="card">
            <CardImage />
            <div>
                <CardInfo />
                <CardProfile />
            </div>
        </section>
    );
}

export default Card;