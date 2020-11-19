import AmazonClonePic from '../images/projects/screencapture-clone-d613f-web-app-2020-11-18-21_28_28.png'

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
        "Full functioning e-commerce website using Firebase Auth and Stripe Payment Gateway",
        bullets: [
            "Created authentication - user able to create login and sign in",
            "Constructed database that saves and displays previous transactions",
            "Integrated responsive styling",
        ],
        github: "https://github.com/sophiasagan/AmazonClone",
        link: "https://clone-d613f.web.app/",
        tools: ["React", "JavaScript", "Firebase", "Stripe", "SQLite"],
    },
    {
        name: "sample project",
        image: "/images/projects/sample.png",
        description:
            "Implemented a robust to do app with React Native to work offline and save data",
        bullets: [
            "Optimized for IOS and Android devices",
            "Released Dark Mode feature",
            "Secured data persistence using SQLite database",
        ],
        github: "https://github.com/sophiasagan/",
        link: "https://samplelink.com",
        tools: ["React Native", "JavaScript", "HTML", "CSS", "SQLite"],
    },
    {
        name: "Game of Life",
        image: "/images/projects/sample.png",
        description: "Re-engineered John Conway's Game of Life",
        bullets: [
            "Constructed game using React",
            "Systematized algorithm following the rules of life",
            "Integrated responsive styling for mobile and desktop",
        ],
        github: "https://github.com/sophiasagan/",
        link: "https://samplelink.com/",
        tools: ["JavaScript", "SCSS", "React"],
    },
    
];

export default projects;