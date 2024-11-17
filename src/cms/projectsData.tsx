export type Project = {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  link: string;
}

const projects = {
  title: 'Projects',
  doc: [
    {
      title: 'Dokan - E-commerce Platform',
      description: `A SaaS e-commerce platform built with Nest.js, Next.js and Shade/cn. The platform features shopify-like functionalities such as multi-vendor support, product management, order management, and more. With a unified backend systems stores would be able to subscribe to the platform and start selling their products online.`,
      techStack: ['Nest.js', 'Next.js', 'MongoDB and Mongoose', 'Shade/cn'],
      image: '/projects/dokan-admin.png',
      link: 'https://github.com/Mubin42/dokan-backend.git',
    },
    {
      title: 'Bazar365.com',
      description: `A full-stack e-commerce web application with a focus on user experience and performance. The application is built with Next.js, Chakra UI, and Redux Toolkit. It features a responsive design, support for dark mode and fluid animations.`,
      techStack: ['Next.js', 'Redux Toolkit', 'Chakra UI', 'Framer Motion'],
      image: '/projects/bazar365.png',
      link: 'https://www.bazar365.com/',
    },
    {
      title: 'ShohozAir Backend',
      description: `A RESTful API for ShohozAir, a flight booking platform. The API is built with Express.js, MySQL, and Sequelize. It features JWT authentication, JOI validation, and a clean codebase. This system also includes integration with the FlyHub API.`,
      techStack: ['Express.js', 'MySQL', 'Sequelize', 'JWT', 'JOI'],
      image: '/projects/shohozAir.png',
      link: 'https://air.shohoz.com/',
    },
    {
      title: 'Happycoders.io',
      description: `Aportfolio website for happycoders.io built with Next.js and Chakra UI. The website features a responsive design, with easy user experience and performance.`,
      techStack: ['React', 'Chakra UI'],
      image: '/projects/happycoders.png',
      link: 'https://happycoders-v2.vercel.app/',
    },
  ],
};

export default projects;
