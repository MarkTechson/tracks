import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import Home from "./Home";
import Detail from "./Detail";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function onError(e) {
  this.src = "http://bobjames.com/wp-content/themes/soundcheck/images/default-album-artwork.png";
}

class App extends Component {
  state = {
    tracks: [],
    artist: "",
    albumArt: "",
    albumName: "",
    year: "",
    trackNumber: "",
  }

  addImageHandlers = () => {
    document.querySelectorAll("img").forEach(function (img) {
      img.onerror = onError;
    });
  }
  componentDidMount() {
    // $(document).onClick(".giphy", function(){})
    // grab any data you want!
    axios.get("/api/track").then((response) => {
      this.setState({ tracks: response.data });
      this.addImageHandlers();

    });
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  }

  handleClick = () => {
    axios.post("/api/track", {
      "artist": this.state.artist,
      "albumName": this.state.albumName,
      "albumArt": this.state.albumArt,
      "year": this.state.year,
      "trackNumber": this.state.trackNumber
    }).then((response) => {
      const track = response.data;
      const updatedTracks = this.state.tracks;
      updatedTracks.push(track);

      // TODO: Remove this call to addImageHandlers and replace with delegate
      this.setState({
        tracks: updatedTracks
      }, this.addImageHandlers);
    });
  }
  render() {
    return (
      <Router>
        <div>
          <nav className="nav bg-dark">
            <a className="nav-link active" href="#">Active</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="jumbotron">
                  <h1>TraQ App 🎹</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Route exact path="/" component={() => <Home tracks={this.state.tracks} onClick={this.handleClick} onChange={this.onChange} />} />
                <Route exact path="/detail/:id" component={Detail} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
