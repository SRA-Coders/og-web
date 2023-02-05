import React, { useState } from "react";
import "../../Styles/portfolio.css";
import PortfolioCard from "./PortfolioCard";
import PortfolioData from "../../Data/portfolioData.json";

export default function Portfolio() {
    const [cardType, setCardType] = useState("All");

    function handleCardType(e) {
        if (e.target.getAttribute("data-filter")) {
            setCardType(e.target.getAttribute("data-filter"));
            let portfolioFilter = document.getElementById('portfolio-flters').getElementsByTagName('li');
            Object.keys(portfolioFilter).forEach((el) => {
                portfolioFilter[el].classList.remove('portfolio-active-type');
            });
            e.target.classList.add("portfolio-active-type")
        }
    }

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Portfolio</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul onClick={(e) => handleCardType(e)} id="portfolio-flters">
                            <li data-filter="All" className="portfolio-active-type">
                                All
                            </li>
                            <li data-filter="App" >App</li>
                            <li data-filter="Card">Card</li>
                            <li data-filter="Web">Web</li>
                        </ul>
                    </div>
                </div>

                <div
                    className="row portfolio-container"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    {cardType === "All" &&
                        Object.keys(PortfolioData).map(type => {
                            return (
                                PortfolioData[type].map(item => {
                                    return (
                                        <PortfolioCard
                                            key={item.name}
                                            name={item.name}
                                            desc={item.desc}
                                            imgLink={item.imgLink}
                                        />)
                                })
                            )
                        })
                    }
                    {
                        cardType !== "All" &&
                        PortfolioData?.[cardType]?.map(item => {
                            return (
                                <PortfolioCard
                                    key={item.name}
                                    name={item.name}
                                    desc={item.desc}
                                    imgLink={item.imgLink}
                                />)
                        })

                    }

                </div>
            </div>
        </section>
    );
}
