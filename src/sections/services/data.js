import { FaCode, FaDesktop, FaDatabase } from 'react-icons/fa';
import { SiPython, SiReact, SiAngular } from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const data = [
  {
    id: 1,
    icon: <FaCode />,
    title: '.NET Web API Development',
    desc: 'I build secure, scalable, and high-performance RESTful APIs using the .NET ecosystem, ideal for modern web and mobile backends.'
  },
  {
    id: 2,
    icon: <FaDesktop />,
    title: 'C# Desktop Applications',
    desc: 'From enterprise tools to user-friendly utilities, I develop robust Windows desktop applications tailored to your needs.'
  },
  {
    id: 3,
    icon: <SiPython />,
    title: 'Python App Development',
    desc: 'I build dynamic Python applications — from data tools to full-stack solutions — using efficient, clean, and scalable code.'
  },
  {
    id: 4,
    icon: (
      <>
        <SiReact /> <SiAngular />
      </>
    ),
    title: 'Modern UI Design (React / Angular)',
    desc: 'I design and develop responsive, accessible UIs using React and Angular, focusing on usability and performance.'
  },
  {
    id: 5,
    icon: <DiJava />,
    title: 'Innovative Java Applications',
    desc: 'Leveraging the power of Java, I create innovative and efficient applications for a variety of domains and platforms.'
  },
  {
    id: 6,
    icon: <FaDatabase />,
    title: 'Database Design & Integration',
    desc: 'I design efficient relational and NoSQL databases and integrate them seamlessly into your application backend for optimal performance and reliability.'
  }
];

export default data;
