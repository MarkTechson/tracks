import React from "react";
import Card from "./Card";

export default class Home extends React.Component {
    render() {
        return (
            <>
                <div>
                    <input type="text" className="form-control" name="artist" placeholder="artist" value={this.props.artist} onChange={this.props.handleChange} />
                    <input type="text" className="form-control" name="year" placeholder="year" value={this.props.year} onChange={this.props.handleChange} />
                    <input type="text" className="form-control" name="albumName" placeholder="albumName" value={this.props.albumName} onChange={this.props.handleChange} />
                    <input type="text" className="form-control" name="albumArt" placeholder="albumArt" value={this.props.albumArt} onChange={this.props.handleChange} />
                    <input type="text" className="form-control" name="trackNumber" placeholder="trackNumber" value={this.props.trackNumber} onChange={this.props.handleChange} />
                    <button className="btn btn-success" onClick={this.props.handleClick}>Add Track</button>
                </div>

                <div className="card-columns">
                    {
                        this.props.tracks.map((track, i) => <Card
                            key={i}
                            src={track.albumArt}
                            albumName={track.albumName}
                            artist={track.artist}
                            id={track._id}
                        />)
                    }
                </div>
            </>
        );
    }
} 
