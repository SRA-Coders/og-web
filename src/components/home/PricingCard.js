import React from 'react'

export default function PricingCard(props) {
    return (
        <>
           <div className="col-lg-4 col-md-6">
                            <div className="box" data-aos="zoom-in-right" data-aos-delay="200">
                                <h3>{props.name}</h3>
                                <h4><sup>$</sup>{props.price}<span> / month</span></h4>
                                <ul>
                                    <li>Aida dere</li>
                                    <li>Nec feugiat nisl</li>
                                    <li>Nulla at volutpat dola</li>
                                    <li className="na">Pharetra massa</li>
                                    <li className="na">Massa ultricies mi</li>
                                </ul>
                                <div className="btn-wrap">
                                    <a href="#" className="btn-buy">Buy Now</a>
                                </div>
                            </div>
                        </div>
        </>

    )
}