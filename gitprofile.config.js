// gitprofile.config.js

const config = {
  github: {
    username: 'rifat977', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['Rifat977', 'data-structure', 'streamlit-example', 'pyscrap'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'rifat977',
    twitter: 'r_fat36',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'rifat977',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://rifat977.github.io',
    phone: '',
    email: 'dev.abdullah.mamun@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.canva.com/design/DAFRGGFlUMU/TtlUEpnxgd0GjQis7Gtxnw/view?utm_content=DAFRGGFlUMU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Django',
    'Javascript',
    'Jquery',
    'Nuxt Js',
    'PHP',
    'Laravel',
    'Java',
    'REST API',
    'Tailwind',
    'Bootstrap',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Linux',
  ],
  experiences: [
    {
      company: 'Visionary Tech Solution',
      position: 'Backend Developer',
      from: 'July 2023',
      to: 'Present',
      companyLink: 'https://www.visionarytechsolution.com/',
    },
    {
      company: 'Xemiron It Solutions',
      position: 'Junior Django Developer',
      from: 'March 2023',
      to: 'June 2023',
      companyLink: 'https://xemiron.com/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Daffodil International University',
      degree: 'Bsc in Software Engineering',
      from: '2022',
      to: '2025',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'TripAdvisor',
      description:
        'The TripAdvisor Project is a dynamic Django-based web application designed to provide personalized tourist recommendations and accommodations through user chat preferences.',
        imageUrl: 'tripadvisor.png',
        link: 'https://github.com/Rifat977/tripadvisor_frontend',
    },
    {
      title: 'Blindmeta',
      description:
        'The software considers a system of voice messenger to favor interaction of blind users with any other user connected to the network',
        imageUrl: 'https://via.placeholder.com/250x250',
        link: 'https://github.com/Rifat977/object_detection',
    },
    {
      title: 'Object Detection',
      description:
        'Real time object detection and face recognition from ESP32 cam & robot controlling. Built with Django & Yolo model',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://github.com/Rifat977/object_detection',
    },
    {
      title: '0xbyte',
      description:
        '0xByte Specialize in decoding complexities, offering insights, and empowering businesses with transformative solutions. Developing using Tailwind & Nuxt Js',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'http://0xbyte.vercel.app/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'rifat977', // to hide blog section, keep it empty
    limit: 10, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,
};

export default config;
