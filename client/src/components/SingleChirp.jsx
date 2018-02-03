import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class SingleChirp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objects: []
        }
    }

    componentDidMount() {
        let url = '/chirps/' + this.props.match.params.id;
        console.log(url);
        fetch(url, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' })
        })
            .then(response => response.json())
            .then(object => this.setState({ objects: object }))
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row text-left my-2">
                        <div className="card w-100">
                            <div className="card-header">
                                <div className="media">

                                    <div className="media-body">
                                        <h5 className="d-inline font-weight-bold">Luke</h5>
                                        <h6 className="text-muted">Chirpped:</h6>
                                    </div>
                                </div>
                            </div>
                            <p className="card-text p-1 m-1">{this.state.objects.text}</p>
                            <h6 className="card-subtitle p-1 m-1 text-muted font-weight-light">- {this.props.match.params.id}</h6>
                            <Link className="btn btn-primary mt-2" to="/">Go Back to All Chirps</Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default SingleChirp;