import React from 'react'
import { BiAdjust, BiBarChart, BiBitcoin, BiCast, BiExclude } from "react-icons/bi";


const CardTextSection = () => {
    return (
        <div className='div1'>
            <h2 className='h21'>Daily essentials with god intentions -- for living life or creating it.</h2>

            <div className="innerIcons">
                <div className="icon1">                    <BiAdjust /><br />

                    <a className='iconText' href="#">Traceble Ingredients</a>

                </div>
                <div className="icon1">
                    <BiBarChart /><br />
                    <a className='iconText' href="#">Traceble Ingredients</a>

                </div>
                <div className="icon1">
                    <BiBitcoin /><br />
                    <a className='iconText' href="#">Traceble Ingredients</a>

                </div>
                <div className="icon1">
                    <BiCast /><br />
                    <a className='iconText' href="#">Traceble Ingredients</a>

                </div>
                <div className="icon1">
                    <BiExclude />
                    <br />
                    <a className='iconText' href="#">Traceble Ingredients</a>

                </div>

            </div>

        </div>
    )
}

export default CardTextSection
