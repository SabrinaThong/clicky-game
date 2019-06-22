import React from "react";
import "./Images.css";

const Images = props => (
    <div className="card">
            <div className="img-container" onClick={props.imageClicked}>
                <button type="button" class="btn btn-light" id="button">
                <img     
                    alt={props.name}
                    src={props.image}
                />
                </button>
            </div>
        </div>
    );

export default Images;
