import AmazonClonePic from '../images/projects/amazonclonescreenshot.jpg'
import RealEstatePage from '../images/projects/realestate.png'
import Conway from '../images/projects/conwaynew.png'

const projects = [
    {
        name: "sample project",
        image: '',
        description:
            "Collaborated on a cross-functional team of developers as the sole back end engineer",
        bullets: [
            "Created user authentication and authorization",
            "Integrated Jest testing throughout",
            "Deployed to Heroku with PostgresSQL",
        ],
        github: "https://github.com/sophiasagan/",
        link: "https://github.com/sophiasagan/",
        tools: ["Node", "JavaScript", "Jest", "PostgresSQL"],
    },
    {
        name: "Amazon Clone",
        image: AmazonClonePic,
        description:
        "Full functioning e-commerce website using Firebase authentication and deployment",
        bullets: [
            "Created authentication - user able to create login and sign in",
            "Constructed database that saves and displays previous transactions",
            "Integrated Stripe Payment Gateway",
        ],
        github: "https://github.com/sophiasagan/AmazonClone",
        link: "https://clone-d613f.web.app/",
        tools: ["React", "JavaScript", "Firebase", "Stripe", "SQLite"],
    },
    {
        name: "Real Estate Property Page",
        image: RealEstatePage,
        description:
            "Implemented sample real estate page to show home and neighborhood with Google Maps API",
        bullets: [
            // "Optimized for IOS and Android devices",
            // "Released Dark Mode feature",
            "Integrated responsive styling for mobile and desktop",,
        ],
        github: "https://github.com/sophiasagan/real-estate",
        link: "https://optimistic-nobel-3f151c.netlify.app/",
        tools: ["HTML", "CSS3", "JS", "Google Maps API"],
    },
    {
        name: "Game of Life",
        image: Conway,
        description: "Re-engineered John Conway's Game of Life",
        bullets: [
            "Constructed game using React",
            "Created algorithm following the rules of life",
            "Integrated responsive styling for mobile and desktop",
        ],
        github: "https://github.com/sophiasagan/game-of-life",
        link: "https://elegant-mccarthy-4b9082.netlify.app/",
        tools: ["JavaScript", "SCSS", "React"],
    },
    
];

export default projects;