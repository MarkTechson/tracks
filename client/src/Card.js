import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.src} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.albumName}</h5>
                <p className="card-text">Music by: {props.artist}</p>
                {/* <a href="#" className="btn btn-primary">View Details</a> */}
                <Link to={`/detail/${props.id}`} className="btn btn-primary">View Details</Link>
            </div>
        </div>
    );
}
export default Card;