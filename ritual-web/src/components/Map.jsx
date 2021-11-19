import React from 'react'
import capsule from '../images/maps.png'

const Map = (props) => {
    return (
        <div className='row-caps'>

            <div className='CircleNew__CircleElement-sc-1le9mwx-0 gaiuvB left centerY active ajs_circle_new' ></div>


            <div className="column-map">
                {/* <img className='img-caps' src={capsule} alt={props.capsule} /> */}
                <div className="bl1">

                    <div className="bl2">
                        <div className="bl3 bla">






                            <h2>We're not about pseudoscience and half-truths</h2>
                            <p>From Omega-3 DHA from microalgae to regeneratively-farmed pea protein, our scientists studied diets and genetics to make daily essentials based on what we need.</p>
                        </div>
                        <div className="bl4 bl3 bla">
                            <p className='line'>Who We Are ?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column-caps coll">

                <img className='img-caps' src={capsule} alt={capsule} />
            </div>

        </div>
    )
}

export default Map

