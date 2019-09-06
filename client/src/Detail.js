import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Detail extends React.Component {
    state = {
        trackData: undefined,
        loading: true
    }

    componentDidMount() {
        axios.get(`/api/track/${this.props.match.params.id}`).then(response => {
            this.setState({
                trackData: response.data,
                loading: false
            });
        }).catch(e => {
            this.setState({
                loading: false
            })
        });
    }
    render() {
        if (this.state.loading) return <h1>Loading...</h1>

        if (!this.state.trackData) return <h1>Error loading data</h1>

        return (
            <>
                <h1>Details for {this.state.trackData.artist} / {this.state.trackData.albumName}</h1>
                <img src={this.state.trackData.albumArt} />
                <div><Link to="/" className="btn btn-success">Go Back</Link></div>
            </>
        )
    }
}