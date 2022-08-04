import { useState } from "react";
import ShareIcon from "../assets/icon-share.svg";
import FacebookIcon from "../assets/icon-facebook.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import PinterestIcon from "../assets/icon-pinterest.svg";
import "../styles/CardSocials.css";

const CardSocials = () => {

    const [toggleSocials, setToggleSocials] = useState(false);

    const toggleSocialButtons = () => {
        setToggleSocials(!toggleSocials)
    }

    return (
        <div className={`card-socials ${toggleSocials ? "socials-active" : null}`}>
            {
                toggleSocials ? 
                <div className="card-socials-container">
                    <p className="card-socials-share">
                        SHARE
                    </p>
                    <button className="card-socials-btn">
                        <img 
                            className="card-socials-icon"
                            src={FacebookIcon} 
                            alt="facebook-icon" 
                        />
                    </button>
                    <button className="card-socials-btn">
                        <img
                            className="card-socials-icon"
                            src={TwitterIcon} 
                            alt="twitter-icon" 
                        />
                    </button>
                    <button className="card-socials-btn">
                        <img 
                            className="card-socials-icon"
                            src={PinterestIcon} 
                            alt="pinterest-icon" 
                        />
                    </button>
                </div>
                    :
                null
            }
            <button 
                className={`card-socials-toggle-btn ${toggleSocials ? "socials-btn-active" : null}`}
                onClick={() => toggleSocialButtons()}
            >
                <img 
                    className={`card-socials-btn-img ${toggleSocials ? "socials-btn-img-active" : null}`}
                    src={ShareIcon} 
                    alt="share-icon" 
                />
            </button>
        </div>
    );
}

export default CardSocials;