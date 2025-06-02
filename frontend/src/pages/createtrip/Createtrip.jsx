import React, { useRef, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";
import { ja } from "date-fns/locale";

// 旅行日程を追加
export default function Createtrip() {
  const place = useRef();
  const navigate = useNavigate();
  const [selectedDateRange, setSelectedDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const trip = {
        place: place.current.value,
        startDate: selectedDateRange[0].startDate,
        endDate: selectedDateRange[0].endDate,
      };
      console.log(trip);
      // 登録する
      // await axios.post("/trip/register", trip);
      navigate("/tripList"); // 会員登録完了後、ログイン画面へ
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form className="tripBox" onSubmit={(e) => handleClick(e)}>
        <p className="tripTitle">追加</p>
        <p className="tripMsg">旅行情報を入力してください</p>
        場所
        <input
          type="text"
          className="tripPlaceInput"
          placeholder="東京"
          required
          ref={place}
        />
        <DateRange
          onChange={(ranges) => setSelectedDateRange([ranges.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={1}
          ranges={selectedDateRange}
          dateDisplayFormat={"yyyy/MM/dd(E)"}
          direction="horizontal"
          locale={ja}
        />
        <div></div>
        <div className="divider" />
        <button className="go2registerButton" type="submit">
          登録
        </button>
      </form>
    </div>
  );
}
