import CardSocials from "./CardSocials";
import ProfileImg from "../assets/avatar-michelle.jpg";
import "../styles/CardProfile.css";

const CardProfile = () => {
    return (
        <div className="card-profile">
            <div className="card-profile-container">
                <img
                    className="card-profile-avatar"
                    src={ProfileImg}
                    alt="michelle-avatar"
                />
                <div className="card-profile-info-container">
                    <h2 className="card-profile-name">Michelle Appleton</h2>
                    <p className="card-profile-date">28 Jun 2020</p>
                </div>

            </div>
            <CardSocials />
        </div>
    );
}

export default CardProfile;