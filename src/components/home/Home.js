import "./Home.css";
import "../../App.css";

import { useState, useEffect } from "react";

import FollowerCard from "../follower-card/FollowerCard";
import TodayCard from "../today-card/TodayCard";

import FacebookAccount from "../../services/FacebookAccount";
import TwitterAccount from "../../services/TwitterAccount";
import InstagramAccount from "../../services/InstagramAccount";
import YoutubeAccount from "../../services/YoutubeAccount";

export default function Home() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    function TotalFollowers() {
        const totalFollowers = (FacebookAccount.followers + TwitterAccount.followers + InstagramAccount.followers + YoutubeAccount.followers).toLocaleString();
        return (
            <p className={`dashboard-total-followers total-followers-${theme} font-link-bold`}>Total Followers: { totalFollowers }</p>
        );
    }

    function ToggleSwitch() {
        return (
            <>
                <label className="switch">
                    <input type="checkbox" onClick={toggleTheme}/>
                    <span className="slider round"></span>
                </label>
            </>
        )
    }

    return (
        <>
        <div className={`dashboard-top-bg top-bg-${theme}`}></div>
        <div className="home">
            
            <div className="dashboard-title-row">
                <div className="title-col">
                    <p className={`dashboard-title title-${theme} font-link-bold`}>Social Media Dashboard</p>
                    <TotalFollowers />
                </div>
                <div className="title-row-col-right">
                    <div className="dark-mode-toggle">
                        <p className={`dark-mode-text mode-text-${theme} font-link-bold`}>Dark Mode</p>
                        <ToggleSwitch />
                    </div>
                </div>
            </div>

            <div className="follower-cards-row">
                <FollowerCard account={FacebookAccount} theme={theme}/>
                <FollowerCard account={TwitterAccount} theme={theme}/>
                <FollowerCard account={InstagramAccount} theme={theme}/>
                <FollowerCard account={YoutubeAccount} theme={theme}/>
            </div>
            <p className={`overview-header overview-header-${theme} font-link-bold`}>Overview - Today</p>
            <div className="overview-cards-grid">
                <TodayCard account={FacebookAccount.pageViews} theme={theme}/>
                <TodayCard account={FacebookAccount.likes} theme={theme}/>
                <TodayCard account={InstagramAccount.likes} theme={theme}/>
                <TodayCard account={InstagramAccount.profileViews} theme={theme}/>
                <TodayCard account={TwitterAccount.retweets} theme={theme}/>
                <TodayCard account={TwitterAccount.likes} theme={theme}/>
                <TodayCard account={YoutubeAccount.likes} theme={theme}/>
                <TodayCard account={YoutubeAccount.totalViews} theme={theme}/>
            </div>
        </div>
        </>
    );
}