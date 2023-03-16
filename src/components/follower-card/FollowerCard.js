import "./FollowerCard.css";
import "../../App.css";

import UpIcon from "../../assets/icon-up.svg";
import DownIcon from "../../assets/icon-down.svg";

import { Button } from "react-bootstrap";

export default function FollowerCard({ account }) {

    function Followers({ followers }) {
        if(followers >= 1000000) {
            followers = followers.toString().slice(0, -6) + "M";
        } else if(followers >= 10000) {
            followers = followers.toString().slice(0, -3) + "K";
        } 
        // console.log(followers);
        return (
            <>
                <p className="followers-number font-link-bold">{followers}</p>
            </>
        );
    }

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
                <p className="font-link-bold">{followerChange} </p>
                <p className="font-link-bold"> Today </p>
            </div>
        );
    }

    return (
        <div>
            <Button className="follower-card">
                <div className={account.platform}></div>
                <div className="follower-card-header">
                    <img src={account.icon} alt={account.platform} />
                    <p className="username-text font-link-bold">{account.username} </p>
                </div>
                <div className="follower-card-follwers-col">
                    <Followers followers={account.followers} />
                    <p className="followers-text">FOLLOWERS </p>
                </div>
                <FollowerChange followerChange={account.followerChange} />
            </Button>
        </div>
    );
}
