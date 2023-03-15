import facebookIcon from "../assets/icon-facebook.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import youtubeIcon from "../assets/icon-youtube.svg";

export default function FollwerCard(platform) {
    let icon;
    let iconAlt;
    switch(platform){
        case "facebook":
            icon = facebookIcon
            iconAlt = "Facebook Icon"
        break;
        case "instagram":
            icon = instagramIcon
            iconAlt = "Instagram Icon"
        break;
        case "twitter":
            icon = twitterIcon
            iconAlt = "Twitter Icon"
        break;
        case "youtube":
            icon = youtubeIcon
            iconAlt = "Youtube Icon"
        break;
    }
    return (
        <div>
            <img src={icon} alt={iconAlt} />
            
        </div>
    );
}