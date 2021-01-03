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
                    
                </div>
            </div>
        </div>
    )
}

export default About;