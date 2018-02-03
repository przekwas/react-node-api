import React, { Fragment } from 'react';
// import FormatTime from './FormatTime';

//Component to construct a chirp as a bootstrap card
const Chirp = (props) => {
    return (
        <Fragment>
            <div className="row text-left my-2">
                <div className="card w-100">
                    <div className="card-header">
                        <div className="media">

                            <div className="media-body">
                                <h5 className="d-inline font-weight-bold">{props.name}</h5>
                                <h6 className="text-muted">Chirpped:</h6>
                            </div>
                        </div>
                    </div>
                    <p className="card-text p-1 m-1">{props.text}</p>
                    <h6 className="card-subtitle p-1 m-1 text-muted font-weight-light">- {props.id}</h6>
                </div>
            </div>
        </Fragment>
    )
}

export default Chirp;