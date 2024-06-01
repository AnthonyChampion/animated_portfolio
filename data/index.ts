export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Goals", link: "#goals" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "",
        description: "",
        className: "lg:col-span-1 lg:row-span-2 md:col-span-2 md:row-span-2 h-[20rem] md:h-[70vh] row-span-1",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm curious of dev news around the world",
        description: "",
        className: "lg:col-span-1 md:col-span-1 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-1 md:col-span-1 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:justify-end lg:justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Currently learning new stacks during my training",
        description: "Front & back end",
        className: "lg:col-span-1 md:col-span-2 md:row-span-1",
        imgClassName: "absolute rounded-3xl -right-8 top-4 lg:top-16 md:w-[300px] w-60 md:top-20",
        titleClassName: "justify-start",
        img: "/devimg.png",
        spareImg: "",
    },
    {
        id: 5,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-1 md:col-span-1 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Cineside",
        des: "Personal project on work: A React Native movie app with Expo and Tailwind",
        img: "/cines.png",
        iconLists: ["/re.svg", "/tail.svg", "/expo.svg", "/astudio.svg", "/git.svg", "/gitbash.svg", "/figma.svg"],
        link: "",
    },
    {
        id: 2,
        title: "En Terre Froide",
        des: "School project: 36h to build a Web site about nature ",
        img: "/etf.png",
        iconLists: ["/re.svg", "/css.svg", "/git.svg", "/gitbash.svg", "/figma.svg"],
        link: "https://enterrefroide.netlify.app/",
    },
    {
        id: 3,
        title: "Movinder",
        des: "School project: Mobile size Movie App with Tmdb API",
        img: "/mv1.png",
        iconLists: ["/re.svg", "/css.svg", "/git.svg", "/gitbash.svg", "/figma.svg",],
        link: "https://movinder-wild.netlify.app",
    },
    {
        id: 4,
        title: "Squizz Game",
        des: "School project: Fun quiz for students",
        img: "/sqg.png",
        iconLists: ["/html.svg", "/css.svg", "/javascript.svg", "/git.svg", "/gitbash.svg", "/figma.svg",],
        link: "https://wildcodeschool-2024-02.github.io/JS-RemoteFR-P1-CodeSquad/",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/AnthonyChampion",
    },
    {
        id: 2,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/anthony-rodrigues-champion-368406188",
    },
];