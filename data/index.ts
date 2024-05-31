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
        className: "lg:col-span-2 md:col-span-2 md:row-span-2 lg:h-[70vh] h-[20rem] row-span-1",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm curious of dev news around the world",
        description: "",
        className: "lg:col-span-1 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-1 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development",
        description: "",
        className: "lg:col-span-1 md:col-span-1 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently learning new stacks during my training",
        description: "",
        className: "md:col-span-2 md:row-span-2",
        imgClassName: "absolute md:-right-12 rounded-3xl right-4 top-4 md:top-40 md:w-[600px] w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/devimg.png",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
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
        des: "School project: Movie App with Tmdb API",
        img: "/mv.png",
        iconLists: ["/re.svg", "/css.svg", "/git.svg", "/gitbash.svg", "/figma.svg",],
        link: "https://github.com/WildCodeSchool-2024-02/JS-RemoteFR-Gridception-P2-LOMASHOW",
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