import React from 'react'
import TeamCard from './TeamCard'

const Team = () => {
    return (
        <>
            <section id="team" className="team section-bg">
                <div className="container">

                    <div className="section-title" data-aos="fade-up">
                        <h2>Team</h2>
                        <p>Original Gangster of Software development Team</p>
                    </div>

                    <div className="row">
                        {/* <TeamCard name="Sahil Bharal" position="Team member" img="https://cdn.pixabay.com/photo/2016/11/19/22/52/coding-1841550_960_720.jpg"></TeamCard> */}
                        {/* <TeamCard name="Sahil Bharal" position="Team member" img="https://ssbharal.tech/assets/img/dp3.jpeg"></TeamCard> */}
                        <TeamCard name="Sahil Bharal" position="Team member" img="https://media.licdn.com/dms/image/C4D03AQFi2l0xuCP-JQ/profile-displayphoto-shrink_800_800/0/1654217002315?e=2147483647&v=beta&t=ivol19H8Ii19f2XhWODv664Sc4E7GP55tvXcRxlmzVM"></TeamCard>
                        <TeamCard name="Revat Saharan" position="Team member" img="https://media.licdn.com/dms/image/C5603AQF-kBxhMESIjQ/profile-displayphoto-shrink_800_800/0/1642280181356?e=1681948800&v=beta&t=Y2jlyWSfWQ8U72VoWVr7sKlTfN2J-BsUbcdFPV7Ntdg"></TeamCard>
                        <TeamCard name="Akshay Thappar" position="Team member" img="https://media.licdn.com/dms/image/C5603AQGa_a5qqpwXKw/profile-displayphoto-shrink_800_800/0/1619008553181?e=1681948800&v=beta&t=8HCxJ_HIkPNu4B0qEATAoJUGkEMLe4TF7ak7f8DHGRQ"></TeamCard>
                        <TeamCard name="Next You" position="Apply Now" img="https://forums.autodesk.com/autodesk/attachments/autodesk/133/153682/2/2.PNG"></TeamCard>
                        




                    </div>

                </div>
            </section>

        </>
    )
}

export default Team
