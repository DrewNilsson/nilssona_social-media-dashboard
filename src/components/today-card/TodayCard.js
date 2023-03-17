import "./TodayCard.css";
import "../../App.css";

import { Button } from "react-bootstrap";
import UpIcon from "../../assets/icon-up.svg";
import DownIcon from "../../assets/icon-down.svg";

export default function TodayCard({ account, theme }) {

    function Value({ value }) {
        if(value >= 1000000) {
            value = value.toString().slice(0, -6) + "M";
        } else if(value >= 10000) { 
            value = value.toString().slice(0, -3) + "K";
        } 
        // console.log(followers);
        return (
            <>
                <p className={`value-${theme} font-link-bold`}>{value}</p>
            </>
        );
    }

    function ValueChange({ valueChange }) {
        if (valueChange < 0) {
            return (
                <div className="follower-card-change-row negative">
                    <img src={DownIcon} alt="" />
                    <p className="font-link-normal">
                        {valueChange - valueChange * 2}%
                    </p>
                </div>
            );
        }
        return (
            <div className="follower-card-change-row positive">
                <img src={UpIcon} alt="" />
                <p className="font-link-bold">{valueChange}% </p>
            </div>
        );
    }

    return (
        <>
            <Button className={`today-card today-card-${theme}`}>
                <div className="left-col">
                    <p className={`title-${theme} font-link-bold`}>{account.title}</p>
                    <Value value={account.value} />
                </div>
                <div className="right-col">
                    <img className="icon" src={account.icon} alt={account.platform} />
                    <ValueChange valueChange={account.change}/>
                </div>
            </Button>
        </>
    );
}