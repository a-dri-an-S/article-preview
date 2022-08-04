import CardSocials from "./CardSocials";
import ProfileImg from "../assets/avatar-michelle.jpg";

const CardProfile = () => {
    return (
        <div className="card-profile">
            <img src={ProfileImg} alt="michelle-avatar" />
            <div>
                <h2>Michelle Appleton</h2>
                <p>28 Jun 2020</p>
            </div>
            <CardSocials />
        </div>
    );
}

export default CardProfile;