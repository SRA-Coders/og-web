import React from 'react'

const TeamCard = (props) => {
    return (
        <>


            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="100">
                    <div class="member-img">
                        <img src={props.img} class="img-fluid" alt="" />
                        <div class="social">
                            <a href=""><i class="bi bi-twitter"></i></a>
                            <a href=""><i class="bi bi-facebook"></i></a>
                            <a href=""><i class="bi bi-instagram"></i></a>
                            <a href=""><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    <div class="member-info">
                        <h4>{props.name}</h4>
                        <span>{props.position}</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TeamCard
