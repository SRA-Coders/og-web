import React from 'react'
import * as Icon from 'react-bootstrap-icons';


const Counts = () => {
    return (
        <>
      
        
            <section id="counts" className="counts">
                <div className="container">

                    <div className="row">
                        <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
                            <img src="https://cdn.pixabay.com/photo/2014/02/13/07/28/security-265130_960_720.jpg" alt="" className="img-fluid" />
                        </div>

                        <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
                            <div className="content d-flex flex-column justify-content-center">
                                <div className="row">
                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-emoji-smile"><Icon.EmojiSmile></Icon.EmojiSmile></i>
                                            
                                          
                                            <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="1" className="purecounter">65</span>
                                            <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-journal-richtext"><Icon.JournalRichtext></Icon.JournalRichtext></i>
                                            <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter">85</span>
                                            <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-clock"><Icon.Clock></Icon.Clock></i>
                                            <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter">18</span>
                                            <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-award"><Icon.Award></Icon.Award></i>
                                            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter">15</span>
                                            <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Counts
