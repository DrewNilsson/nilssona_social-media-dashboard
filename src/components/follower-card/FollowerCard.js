import "./FollowerCard.css";
import "../../App.css";
import UpIcon from "../../assets/icon-up.svg";
import DownIcon from "../../assets/icon-down.svg";

export default function FollowerCard({ account }) {
    function FollowerChange({ followerChange }) {
        if (followerChange < 0) {
            return (
                <div className="follower-card-change-row negative">
                    <img src={DownIcon} alt="" />
                    <p className="font-link-normal">
                        {followerChange - followerChange * 2}
                    </p>
                    <p className="font-link-normal">Today</p>
                </div>
            );
        }
        return (
            <div className="follower-card-change-row positive">
                <img src={UpIcon} alt="" />
                <p className="font-link-normal">{followerChange}</p>
                <p className="font-link-normal">Today</p>
            </div>
        );
    }

    return (
        <div>
            <div className={account.platform}></div>
            <div className="follower-card">
                <div className="follower-card-header">
                    <img
                        src={account.icon}
                        alt={account.platform}
                    />
                    <p className="username-text font-link-bold">{account.username}</p>
                </div>
                <div className="follower-card-follwers-col">
                    <p className="followers-number font-link-bold">{account.followers}</p>
                    <p className="followers-text">FOLLOWERS</p>
                </div>
                <FollowerChange followerChange={account.followerChange} />
            </div>
        </div>
    );
}
