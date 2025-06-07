import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TripList.css";

export default function TripList() {
  const navigate = useNavigate();

  // 仮の旅行データ（本来はバックエンドから取得）
  const trips = [
    { id: 1, title: "東京", date: "1/1~1/3" },
    { id: 2, title: "京都", date: "2/3~2/4" },
  ];

  // const [trips, setTrips] = useState([]); // APIから取得した旅行データ用のstate

  // // コンポーネントが表示されたときにデータを取得
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/api/trips") // ←ここは自分のAPIのURLに合わせてね
  //     .then((response) => {
  //       setTrips(response.data); // データをstateに保存
  //     })
  //     .catch((error) => {
  //       console.error("データ取得エラー:", error);
  //     });
  // }, []);

  return (
    <div>
      <div className="headerBar">
        <h1>TripList</h1>
      </div>

      <div className="tripList">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="tripCard"
            onClick={() => navigate(`/trip/${trip.id}`)}
          >
            <p className="tripCardTitle">{trip.title}</p>
            <p className="tripDate">{trip.date}</p>
          </div>
        ))}
      </div>

            
      <button className="addButton" onClick={() => navigate("/createtrip")}>
        +
      </button>

    </div>
  );
}
