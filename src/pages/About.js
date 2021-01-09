import React from 'react';

import "../styles/About.css";

const textStyles = {fontSize: '20px', marginBottom: '.8em'}

const About = () => {
    return (
        <div className="aboutContainer">
            {/* <video>
                <source src={require("../images/video.mov")} type="video/mp4"/>
                Your browser does not support the video tag.
            </video> */}
            <div className="ourStoryContainer">
                <p style={{ fontSize: '35px', marginBottom: '.8em'}}>Our story</p>
                <p style={textStyles}>Take a trip to your local supermarket, restaurant kitchen, 
                    or maybe even your own refrigerator and pantry, and you'll see what seems to be an abundance of food. 
                    So much of that food, however, never reaches the people that really need it.
                </p>
                <p style={textStyles}>
                    In other words, the problem is no longer about production--it's about distribution.
                </p>
                <p style={textStyles}>
                    That being said, people can donate food to one another. Here in Nevada, Individual 
                    and nonprofits are protected under the Bill Emerson Good Samaritan Food Donation
                    Act, which means that you, me, or anyone else for that matter ...
                </p>
                <p style={textStyles}>
                    So why don't we?
                </p>
                <p style={textStyles}>
                    There's a lot of reasons - too many to hash out here, but again, most stem from the issue of 
                    distribution. That's where (we think) community fridges come in.
                </p>
                <div className="textWithSideImage">
                    <img src={require('../images/fridge.jpg')} alt='Main Street Fridge Picture' className='ourStoryFridgePic'/>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <p style={textStyles}>A community fridge streamlines the process of donating food, opening the
                        door for anyone to easily help out in their community. Fridges are additional points of access - not just for people
                        who take from the fridges, but also those who can provide to them. Whereas a traditional food bank can accept
                        certain foods and supplies via federally subsidized contracts (and has high set up and operations costs), a
                        community fridge is an easy, flexible, and cheap alternative.</p>
                        <p style={textStyles}>By working to understand what is happening with otherwise predestined food waste and the role we
                        play in it, we can begin to see how we can instead work to address food insecurity and fight food waste at the same time.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;