import React from 'react'
import Sdata2 from './Sdata2'
import Card2 from './Card2'

const Services2 = () => {
    return (
        <>
            <div className="my-5">
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <div className="row gy-4">
                            {/* <Card /> */}
                            {
                                Sdata2.map((val, ind) => {
                                    return <Card2 key={ind} imgsrc={val.imgsrc} title={val.title} desc={val.desc} />
                                })
                            }


                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Services2
