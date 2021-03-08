import React from 'react';

import {Button} from '../components/Button';

import '../styles/About.css';

const textStyles = {fontSize: '20px', marginBottom: '.8em'};
const newsList = [
  {
    image: require('../images/LVRJ-logo.png'),
    alt: 'LVRJ logo',
    date: 'October 26, 2020',
    title: 'Las Vegas Town Fridge provides 24-hour access to food',
    link:
      'https://www.reviewjournal.com/entertainment/food/las-vegas-town-fridge-provides-24-hour-access-to-food-2162640/#:~:text=The%20Las%20Vegas%20Town%20Fridge,those%20who%20wish%20to%20donate.&text=The%20idea%20behind%20the%20Las,any%20time%2C%20day%20or%20night.',
  },
  {
    image: require('../images/eater-logo.png'),
    alt: 'eater logo',
    date: 'September 23, 2020',
    title: 'A New Community Fridge Lets Anyone Take What Food They Need 24/7',
    link: 'https://vegas.eater.com/2020/9/23/21452546/community-fridge-24-7',
  },
  {
    image: require('../images/13-logo.png'),
    alt: '13 logo',
    date: 'September 20, 2020',
    title: 'Las Vegas Town Fridge helps feed those in need',
    link: 'https://www.ktnv.com/positivelylv/las-vegas-town-fridge-helps-feed-those-in-need',
  },
];

const About = () => {
  return (
    <div className="aboutContainer">
      {/* <video>
                <source src={require("../images/video.mov")} type="video/mp4"/>
                Your browser does not support the video tag.
            </video> */}
      <div className="ourStoryContainer">
        <p style={{fontSize: '35px', marginBottom: '.8em', fontFamily: 'Fami'}}>Our story</p>
        <p style={textStyles}>
          Take a trip to your local supermarket, restaurant kitchen, or maybe even your own refrigerator and
          pantry, and you'll see what seems to be an abundance of food. So much of that food, however, never
          reaches the people that really need it.
        </p>
        <p style={textStyles}>
          In other words, the problem is no longer about production--it's about distribution.
        </p>
        <p style={textStyles}>
          That being said, people can donate food to one another. Here in Nevada, Individual and nonprofits
          are protected under the Bill Emerson Good Samaritan Food Donation Act, which means that you, me, or
          anyone else for that matter ...
        </p>
        <p style={textStyles}>So why don't we?</p>
        <p style={textStyles}>
          There's a lot of reasons - too many to hash out here, but again, most stem from the issue of
          distribution. That's where (we think) community fridges come in.
        </p>

        <img src={require('../images/fridge.jpg')} alt="Main Street Fridge" className="ourStoryFridgePic" />
        <p style={textStyles}>
          A community fridge streamlines the process of donating food, opening the door for anyone to easily
          help out in their community. Fridges are additional points of access - not just for people who take
          from the fridges, but also those who can provide to them. Whereas a traditional food bank can accept
          certain foods and supplies via federally subsidized contracts (and has high set up and operations
          costs), a community fridge is an easy, flexible, and cheap alternative.
        </p>
        <p style={textStyles}>
          By working to understand what is happening with otherwise predestined food waste and the role we
          play in it, we can begin to see how we can instead work to address food insecurity and fight food
          waste at the same time.
        </p>
        <div style={{float: 'right', width: '100%', textAlign: 'right'}}>
          <Button buttonStyle="btn--outline" to="/get-involved">
            Get Involved
          </Button>
          <Button buttonStyle="btn--outline">Donate</Button>
        </div>
      </div>

      <div className="newsContainer">
        <p style={{fontSize: '35px', marginBottom: '.8em', paddingLeft: '1em', fontFamily: 'Fami'}}>News</p>
        {newsList.map((news) => {
          return (
            <a href={news.link} target="_blank" className="individualNewsContainer" rel="noopener noreferrer">
              <img src={news.image} alt={news.alt} className="newsImage" />
              <div style={{flexDirection: 'column'}}>
                <p style={{fontSize: '15px', color: 'grey'}}>{news.date}</p>
                {news.title}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default About;
