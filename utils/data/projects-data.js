import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Support Pass Through-Child Care Application',
        description: "I was tasked with designing and developing a Java-based Support Pass-Through Child-Care application that integrated with the Commonwealth of Pennsylvania's eCIS system to streamline processes for residents and third-party vendors. The goal was to enhance data processing efficiency, reduce latency, and improve the user experience. To address these challenges, I built a robust back-end infrastructure using Java 17 and Oracle, implementing complex eligibility calculations and business rule validations. I also developed a responsive, user-friendly front-end interface with React, ensuring compliance with state and federal regulations. As a result, the system’s performance improved significantly, with a 20% reduction in latency and enhanced data processing efficiency, all while maintaining strict security standards and improving the overall user experience for both residents and vendors.",
        tools: ['ReactJS', 'Java', 'Spring Boot', 'TypeScript', 'Redux', 'Rest API', 'Oracle'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full-Stack Developer',
    },
    {
        id: 2,
        name: 'Patient Rating',
        description: "Patients Rating is a critical project developed during the height of the COVID-19 pandemic for one of the leading pharmaceutical clients in the United States. This innovative platform assesses and rates the severity of patient infections, providing invaluable data insights. By aggregating and analyzing patient data, the project aims to offer a comprehensive understanding of the pandemic's impact, aiding healthcare professionals in managing and combating the virus effectively.",
        tools: ['ReactJS', 'TypeScript', 'SharePoint', 'Redux', 'C#', 'Rest API', 'Azure'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Front-End Developer',
    },
    {
        id: 3,
        name: 'Innovation Engine',
        description: "The Innovation Engine is like a smart web application that helps doctors and researchers share their new ideas about medicine. It costs $150,000 to make and is built using a technology called React.js and SharePoint. It collects all sorts of medical ideas from different places and puts them in one easy-to-find spot. People can talk about these ideas and decide which ones are the best. The application also helps make sure everything is safe and follows the rules about medical information. It's easy to use and works well even if lots of people are using it at the same time. Overall, it helps doctors and researchers make better decisions about new medical discoveries.",
        tools: ['ReactJS', 'SharePoint', 'Redux', 'Rest API', ".NET Core", 'Azure'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 4,
        name: 'Vehicles Tracking and Visualization',
        description: 'Implemented a distributed ETL pipeline visualizes or tracks the real-time location of vehicles in Greater Boston, Massachusetts using MBTA API. Massachusetts Bay Transportation Authority (MBTA) operates heavy-rail, light-rail, and bus transit services in the Boston metropolitan area. This multi-component full-stack solution shows the capabilities of what could be done with modern open-source technologies, especially Apache Spark and Kafka. For this application, the other clients could be the Transportation Department or Police department who are interested in tracking the locations of vehicles that are running in public transport area of any location. In our project, we take the real-time data with the help of Kafka and processed with spark and populate the map with the help of ReactJS as front-end framework. For server and client side, we have used Node.JS as our server environment. As a backend database we have used MongoDB which is a document-oriented database which serves perfect for storing big data and manipulating real time data.',
        tools: ['ReactJS', 'NodeJS', 'HTML/CSS', "Google Maps", "Express", "TypeScript", "MongoDB", "Apache Kafka", "Apache Spark"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 5,
        name: 'Traffic Light Management System',
        description: "Developed an innovative approach utilizing Reinforcement Learning techniques to effectively manage traffic lights at a complex four-way intersection. Leveraging the Simulation of Urban MObility (SUMO) agent-based simulator and TensorFlow, we created a synthetic yet realistic environment to explore the outcomes of potential regulatory actions. This initiative stands as a significant contribution in the realm of traffic management research, offering insights into optimizing traffic flow and decision-making while using Artificial Intelligence to enhance urban transportation.",
        tools: ['Python', 'Reinforcement Learning', 'Deep Q-Learning'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 6,
        name: 'Image Search Engine',
        description: 'During my undergraduate thesis project from April 2018 to December 2018, I developed an innovative Image Search Engine. The aim was to retrieve exact or relevant images from a large pool of images/database using an input image. Leveraging a histogram-based approach, the system achieved an impressive accuracy rate of 94.6%. This involved harnessing technologies such as Python, NumPy, Pandas, and OpenCV to implement robust image processing and analysis algorithms. By meticulously engineering this solution, I not only honed my technical skills but also demonstrated the capability to tackle complex challenges in image recognition and retrieval, paving the way for future advancements in the field.',
        tools: ['Python', 'OpenCV', 'Histogram', 'Numpy', 'pandas', 'matplotlib'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: realEstate,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
