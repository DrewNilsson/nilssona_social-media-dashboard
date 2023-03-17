import "./Home.css";
import "../../App.css";

import { ToggleButton } from "react-bootstrap";

import FollowerCard from "../follower-card/FollowerCard";
import TodayCard from "../today-card/TodayCard";

import FacebookAccount from "../../services/FacebookAccount";
import TwitterAccount from "../../services/TwitterAccount";
import InstagramAccount from "../../services/InstagramAccount";
import YoutubeAccount from "../../services/YoutubeAccount";

export default function Home() {

    function TotalFollowers() {
        const totalFollowers = (FacebookAccount.followers + TwitterAccount.followers + InstagramAccount.followers + YoutubeAccount.followers);


        return (
            <p className="dashboard-total-followers font-link-bold">Total Followers: { totalFollowers }</p>
        );
    }

    return (
        <>
        <div className="dashboard-top-bg"></div>
        <div className="home">
            
            <div className="dashboard-title-row">
                <div className="title-col">
                    <p className="dashboard-title font-link-bold">Social Media Dashboard</p>
                    <TotalFollowers />
                </div>
                <div className="title-row-col-right">
                    <div className="dark-mode-toggle">
                        <p className="dark-mode-text font-link-bold">Dark Mode</p>
                        
                    </div>
                </div>
            </div>

            <div className="follower-cards-row">
                <FollowerCard account={FacebookAccount}/>
                <FollowerCard account={TwitterAccount}/>
                <FollowerCard account={InstagramAccount}/>
                <FollowerCard account={YoutubeAccount}/>
            </div>
            <p className="overview-header font-link-bold">Overview - Today</p>
            <div className="overview-cards-grid">
                <TodayCard account={FacebookAccount.pageViews}/>
                <TodayCard account={FacebookAccount.likes}/>
                <TodayCard account={InstagramAccount.likes}/>
                <TodayCard account={InstagramAccount.profileViews}/>
                <TodayCard account={TwitterAccount.retweets}/>
                <TodayCard account={TwitterAccount.likes}/>
                <TodayCard account={YoutubeAccount.likes}/>
                <TodayCard account={YoutubeAccount.totalViews}/>
            </div>
        </div>
        </>
    );
}