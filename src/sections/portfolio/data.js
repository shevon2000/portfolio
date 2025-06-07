import Image1 from '../../assets/MoodMate.jpg'
import Image2 from '../../assets/VibeLog.jpg'
import Image3 from '../../assets/MoodMateAPI.jpg'
import Image4 from '../../assets/Portfolio.jpg'
import Image5 from '../../assets/OnGoing.png'
import Image6 from '../../assets/BookSystem.jpg'
import Image7 from '../../assets/Todo.jpg'

const data = [
    {
        id: 1,
        category: 'fullstack',
        image: Image1,
        title: "MoodMate - Voice Supported Smart Diary & Task Management",
        desc: "MoodMate is a Flask-based mental wellness application designed to help users track their moods, record diary entries, and manage tasks. It incorporates AI-powered sentiment analysis, voice-to-text transcription using Whisper, and interactive data visualization to provide a personal space for reflecting on emotions and staying organized",
        demo: 'https://drive.google.com/file/d/1KF1CuBj2dNr7-6Y4p-QJuhEBOlcFaLxS/view?usp=drive_link',
        github: 'https://github.com/shevon2000/MoodMate'
    },
    {
        id: 2,
        category: 'fullstack',
        image: Image2,
        title: "VibeLog(Ongoing) - Public platform to share your daily vibes",
        desc: "VibeLog is an ongoing project aimed at creating a public platform where users can share their daily moods and experiences. The repository structure suggests a full-stack application with a .NET backend and a JavaScript-based frontend, focusing on user engagement through mood sharing and community interaction.",
        demo: 'https://drive.google.com/file/d/1W6luQDXO4zOUJXTYqFEdyWvt9gKCYZiB/view?usp=drive_link',
        github: 'https://github.com/shevon2000/VibeLog'
    },
    {
        id: 3,
        category: 'backend',
        image: Image3,
        title: "Custom designed .NET API for MoodMate project",
        desc: "MoodMate_API is a .NET Web API developed to support the MoodMate application. It enables secure mood tracking and user management through JWT authentication and a repository pattern. The API provides scalable and RESTful endpoints, ensuring secure access and efficient data handling for the MoodMate app.",
        demo: 'https://drive.google.com/file/d/1u5CCFmHTgtBNABQEq6nezdAbZyl_9JH7/view?usp=drive_link',
        github: 'https://github.com/shevon2000/MoodMate_API'
    },
    {
        id: 4,
        category: 'frontend',
        image: Image4,
        title: "Responsive Personal Portfolio Website with Theme Customization",
        desc: "A fully responsive portfolio website built with HTML, CSS, and JavaScript. It showcases the developer’s work and skills, with features like light/dark mode and customizable theme colors, ensuring a smooth user experience across all devices.",
        demo: 'https://drive.google.com/file/d/1eUol2vNtSJmn_KzuYWOzpHMk42xChc6H/view?usp=drive_link',
        github: 'https://github.com/shevon2000/portfolio'
    },
    {
        id: 5,
        category: 'fullstack',
        image: Image5,
        title: "GoDate(Ongoing) - Fullstack Dating Web Application with Angular and ASP.NET Core",
        desc: "GoDate is a dating web application built with Angular and ASP.NET Core. It features user profiles, match browsing, and real-time messaging. The app follows clean architecture principles for scalability and a responsive UI for smooth user interaction.",
        demo: 'https://drive.google.com/file/d/1W6luQDXO4zOUJXTYqFEdyWvt9gKCYZiB/view?usp=drive_link',
        github: 'https://github.com/shevon2000/GoDate'
    },
    {
        id: 6,
        category: 'fullstack',
        image: Image6,
        title: "Simple Book Management System with Angular + ASP .NET Web API",
        desc: "A full-stack web application for managing a collection of books, featuring complete CRUD operations. The backend is developed with .NET Web API, while the frontend utilizes Angular. Key features include adding, viewing, updating, and deleting books, all presented in a responsive design suitable for both desktop and mobile devices.",
        demo: 'https://drive.google.com/file/d/1YPsMOgkFqjmnm890eK03KYfuFBVgAno9/view?usp=drive_link',
        github: 'https://github.com/shevon2000/Simple_Book_Management_System'
    },
    {
        id: 7,
        category: 'fullstack',
        image: Image7,
        title: "Todo Application with ASP.NET Core and Clean Architecture",
        desc: "A RESTful API for managing todo items, built using ASP.NET Core and adhering to clean architecture principles. This project serves as a learning resource for developers new to .NET Web APIs, demonstrating layered architecture implementation and CRUD operations.",
        demo: 'https://drive.google.com/file/d/1QdQ-KekeZu_Ppu2ijuCgsax00Jld2J3c/view?usp=drive_link',
        github: 'https://github.com/shevon2000/TodoApi'
    },
    
]


export default data