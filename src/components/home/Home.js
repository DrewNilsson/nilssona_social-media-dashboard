import FollowerCard from "../follower-card/FollowerCard";
// import TodayCard from "../today-card/TodayCard";

import FacebookAccount from "../../services/FacebookAccount";
import TwitterAccount from "../../services/TwitterAccount";
import InstagramAccount from "../../services/InstagramAccount";
import YoutubeAccount from "../../services/YoutubeAccount";

export default function Home() {
    return (
        <>
        <FollowerCard account={FacebookAccount}/>
        <FollowerCard account={TwitterAccount}/>
        <FollowerCard account={InstagramAccount}/>
        <FollowerCard account={YoutubeAccount}/>
        </>
    );
}