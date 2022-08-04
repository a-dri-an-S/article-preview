import ShareIcon from "../assets/icon-share.svg";
import FacebookIcon from "../assets/icon-facebook.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import PinterestIcon from "../assets/icon-pinterest.svg";

const CardSocials = () => {
    return (
        <div className="card-socials">
            <button>
                <img src={ShareIcon} alt="share-icon" />
            </button>
            {
                <div>
                    <p>
                        SHARE
                    </p>
                    <button>
                        <img src={FacebookIcon} alt="facebook-icon" />
                    </button>
                    <button>
                        <img src={TwitterIcon} alt="twitter-icon" />
                    </button>
                    <button>
                        <img src={PinterestIcon} alt="pinterest-icon" />
                    </button>
                </div>
            }
        </div>
    );
}

export default CardSocials;