import React from 'react'

const Card2 = (props) => {
    return (
        <>
            <div className="col-md-3 col-15 mx-auto feat-card-div">
                <div className="feat-card" >
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h3 className='card-title-head'>{props.title}</h3>
                        <p className="card-title-para ">{props.desc}</p>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Card2
