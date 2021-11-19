import React from 'react'
import capsule from '../images/capsule.png'

const Capsule = (props) => {
    return (
        <div className='row-caps'>
            <div className="column-caps coll">
                <img className='img-caps' src={capsule} alt={props.capsule} />
            </div>
            <div className="column-caps">
                {/* <img className='img-caps' src={capsule} alt={props.capsule} /> */}
                <div className="bl1">
                    <div className="bl2">
                        <div className="bl3">
                            <h2>We're not about pseudoscience and half-truths</h2>
                            <p>From Omega-3 DHA from microalgae to regeneratively-farmed pea protein, our scientists studied diets and genetics to make daily essentials based on what we need.</p>
                        </div>
                        <div className="bl4 bl3">
                            <p className='line'>Who We Are ?</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Capsule

