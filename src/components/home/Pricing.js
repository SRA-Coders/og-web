import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
    return (
        <>
            <section id="pricing" className="pricing">
                <div className="container">
                    <div className="section-title">
                        <h2>Pricing</h2>
                        <p>Sit sint consectetur velit nemo qui impedit suscipit alias ea</p>
                    </div>
                    <div className="row">
                        <PricingCard name={"appdev"} price={100} />
                        <PricingCard name={"webdev"} price={200} />
                        <PricingCard name={"wordpress"} price={300} />
                    </div>
                </div>
            </section>
        </>

    )
};

export default Pricing;