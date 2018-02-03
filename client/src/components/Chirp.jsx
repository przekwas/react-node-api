import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

//Component to construct a chirp as a bootstrap card
class Chirp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <div className="row text-left my-2">
                    <div className="card w-100">
                        <div className="card-header">
                            <div className="media">

                                <div className="media-body">
                                    <h5 className="d-inline font-weight-bold">{this.props.name}</h5>
                                    <h6 className="text-muted">Chirpped:</h6>
                                </div>
                            </div>
                        </div>
                        <p className="card-text p-1 m-1">{this.props.text}</p>
                        <h6 className="card-subtitle p-1 m-1 text-muted font-weight-light">- {this.props.id}</h6>
                        <Link className="btn btn-primary mt-2" to={"/chirps/" + this.props.id}>Show Only This Chirp</Link>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Chirp;