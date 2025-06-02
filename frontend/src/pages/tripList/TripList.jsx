import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function TripList() {
  const startDate = format(new Date(), "M/d");

  const endDate = format(new Date(), "M/d");

  return (
    <div>
      <div>TripList</div>
      <div className="tripList">
        <button className="addTrip">
          <Link
            to={`/createtrip`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <span className="addTripText">+</span>
          </Link>
        </button>
        <button className="tripItem">
          <Link
            to={`/createtrip`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="tripPlace">東京</div>
            <div className="tripDate">
              {startDate}-{endDate}
            </div>
          </Link>
        </button>
        <div className="tripItem">
          <div className="tripPlace">東京</div>
          <div className="date">
            {startDate}-{endDate}
          </div>
        </div>
      </div>
    </div>
  );
}
