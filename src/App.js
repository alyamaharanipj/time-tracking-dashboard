import "./styles.scss";
import "./variables.scss";
import { display } from "./data";
import profileImg from "../public/images/image-jeremy.png";
import { FaEllipsisH } from "react-icons/fa";
import React, { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState("Monthly");
  console.log(time);

  useEffect(() => {
    console.log(time);
  });

  return (
    <div className="container">
      <div className="profile-wrapper">
        <div className="card profile">
          <img className="profile-image" src={profileImg} alt="profile" />
          <div className="label">Report for</div>
          <div className="name">Jeremy Robson</div>
        </div>
        <div className="stacked-profile">
          {["Daily", "Weekly", "Monthly"].map((el) =>
            time === el ? (
              <h5 key={el} className="time active">
                {el}
              </h5>
            ) : (
              <h5 key={el} className="time" onClick={() => setTime(el)}>
                {el}
              </h5>
            )
          )}
        </div>
      </div>
      {display.map((el) => (
        <div className="card-wrapper">
          <div className={`card ${el.title}`}>
            <img className="data-image" src={el.img} alt={el.title} />
          </div>
          <div className="stacked-card">
            <div className="data">
              <div className="first-data">
                <div className="title">{el.title}</div>
                <div className="icon">
                  <FaEllipsisH />
                </div>
              </div>
              {time === "Daily" ? (
                <div className="second-data">
                  <div className="current">
                    {el.timeframes.daily.current}hrs
                  </div>
                  <div className="previous">
                    Last week - {el.timeframes.daily.previous}hrs
                  </div>
                </div>
              ) : time === "Weekly" ? (
                <div className="second-data">
                  <div className="current">
                    {el.timeframes.weekly.current}hrs
                  </div>
                  <div className="previous">
                    Last week - {el.timeframes.weekly.previous}hrs
                  </div>
                </div>
              ) : (
                <div className="second-data">
                  <div className="current">
                    {el.timeframes.monthly.current}hrs
                  </div>
                  <div className="previous">
                    Last week - {el.timeframes.monthly.previous}hrs
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
