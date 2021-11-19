import React from 'react';
// import minis from '../images/minis.png'

// import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <>

            <div className="col-md-3 col-10 mx-auto card-div">
                <div className="card" >
                    <img src={props.imgsrc} className="card-img-top" alt="" onMouseOver={props.img2} onMouseOut={props.imgsrc} />
                    <div className="card-body">
                        <p className="card-title ">{props.title}</p>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Card
