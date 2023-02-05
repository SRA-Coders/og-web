import React from 'react'

export default function PortfolioCard(props) {
    return (
        <>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                    <img
                        src={`portfolio-img/${props.imgLink}`}
                        className="img-fluid"
                        alt=""
                    />
                    <div className="portfolio-info">
                        <h4>{props.name}</h4>
                        <p>{props.desc}</p>
                        <div className="portfolio-links">
                            {/* <a
                                href="/"
                                data-gallery="portfolioGallery"
                                className="portfolio-lightbox"
                                title={props.name}
                            >
                                <i className="bx bx-plus"></i>
                            </a>
                            <a href="portfolio-details.html" title="More Details">
                                <i className="bx bx-link"></i>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
