// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'pranjalnam', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Pranjal Naman',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'pranjalnaman',
    twitter: 'pranjalnaman_',
    researchGate: '',
    orcid: '0009-0000-9912-9522',
    instagram: 'pranjalnaman_',
    reddit: '',
    threads: 'pranjalnaman_',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '+91-9871402280',
    email: 'pranjalnaman@iisc.ac.in',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Nucleus Software',
      position: 'Software Developer Intern',
      from: 'May 2019',
      to: 'July 2019',
      companyLink: '',
    },
    {
      company: 'Soroco',
      position: 'Software Developer',
      from: 'October 2020',
      to: 'August 2021',
      companyLink: '',
    },
    {
      company: 'DREAM Lab, Indian Institute of Science',
      position: 'PhD Student',
      from: 'August 2022',
      to: 'Present',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Introduction to Scalable Systems',
      body: '',
      year: 'Aug 2022',
      link: '',
    },
    {
      name: 'Data Analytics',
      body: '',
      year: 'Aug 2022',
      link: '',
    },
    {
      name: 'Scalable Systems for Data Science',
      body: '',
      year: 'Jan 2023',
      link: '',
    },
    {
      name: 'Parallel Programming',
      body: '',
      year: 'Jan 2023',
      link: '',
    },
    {
      name: 'High Performance Computer Architecture',
      body: '',
      year: 'Aug 2024',
      link: '',
    },
    {
      name: 'Matrix Theory',
      body: '',
      year: 'Aug 2024',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Netaji Subhas Institute of Technology (NSIT), Delhi',
      degree: 'Bachelor of Engineering (B.E.)',
      from: '2016',
      to: '2020',
    },
    {
      institution: 'Indian Institute of Science (IISc), Bengaluru',
      degree: 'Doctor of Philosophy (Ph.D.)',
      from: '2022',
      to: 'Present',
    },
  ],
  publications: [
    {
      title: 'Optimizing Federated Learning using Remote Embeddings for Graph Neural Networks',
      conferenceName: '2024 30th International European Conference on Parallel and Distributed Computing (Euro-PAR)',
      journalName: '',
      authors: 'Pranjal Naman, Yogesh Simmhan',
      link: '',
      description: 'In this paper, we present OpES, an optimized federated GNN training framework that uses remote neighbourhood pruning, and overlaps pushing of embeddings to the server with local training to reduce the network costs and training time. The modest drop in per-round accuracy due to the pre-emptive push of embeddings is out-stripped by the reduction in per-round training time for large and dense graphs like Reddit and Products, converging up to ≈ 2× faster than the state-of-the-art technique using an embedding server and giving up to 20% better accuracy than vanilla federated GNN learning.',
    },
    {
      title: 'Evaluating Strategies for Federated Graph Learning',
      conferenceName: '2023 IEEE 30th International Conference on High Performance Computing, Data and Analytics Workshop (HiPCW)',
      journalName: '',
      authors: 'Pranjal Naman, Suved Sanjay Ghanmode, Yogesh Simmhan',
      link: 'https://www.computer.org/csdl/proceedings-article/hipcw/2023/837800a065/1WnrOX5H7hK',
      description: 'Rapid advancements in the field of Graph Neural Networks (GNNs) have led to their high effectiveness at learning meaningful representations from graph data structures. Despite these advances, there are cases where graph data cannot be collected and stored centrally, owing mostly to privacy concerns. Federated Learning (FL) has emerged as a promising machine learning paradigm for distributed training of a shared model on decentralized data. This exploits parallelism and ensures privacy of the local training data on each client. In this paper, we explore the different communication and architectural patterns for FL when training GNNs and their effect on training time.',
    },
    {
      title: 'Performance Modelling of Graph Neural Networks',
      conferenceName: '2023 IEEE/ACM 23rd International Symposium on Cluster, Cloud and Internet Computing Workshops (CCGridW)',
      journalName: '',
      authors: 'Pranjal Naman, Yogesh Simmhan',
      link: 'http://doi.org/10.1109/CCGridW59191.2023.00076',
      description: 'In this poster paper, we present a preliminary analysis of the computational cost of the forward pass on GraphConv and GraphSAGE GNN models. We verify our estimates empirically by profiling the forward pass on these architectures using graph datasets of varying sizes and properties.',
    },
    {
      title: 'To Think Like a Vertex (or Not) for Distributed Training of Graph Neural Networks',
      conferenceName: '2023 IEEE/ACM 23rd International Symposium on Cluster, Cloud and Internet Computing Workshops (CCGridW)',
      journalName: '',
      authors: 'Varad Kulkarni, Akarsh Chaturvedi, Pranjal Naman, Yogesh Simmhan',
      link: 'https://ieeexplore.ieee.org/document/10181148/authors#authors',
      description: 'We propose a novel middleware that approaches GNN training from the perspective of a vertex-centric model (VCM) of distributed graph processing and overlays neural network training over it. Giraph Graph Neural Network (G2N2) uses a three-phase execution pattern by constructing a distributed computation graph per mini-batch, and maps the forward and backward passes of the GNN training to VCM. We implement a prototype of G2N2 in Apache Giraph and report results from a preliminary evaluation using two real-world graphs on a commodity cluster.' 
    },
    {
      title: 'Seizure Detection from Intracranial Electroencephalography Recordings',
      conferenceName: 'International Conference on Innovative Computing and Communications',
      journalName: 'Advances in Intelligent Systems and Computing (AISC, Volume 1166)',
      authors: 'Pranjal Naman, Satyarth Vats, Raunaq Bhalla, Monarch Batra, Smriti Srivastava',
      link: 'https://link.springer.com/chapter/10.1007/978-981-15-5148-2_75',
      description: ''
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
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
    defaultTheme: 'acid',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: false,
};

export default CONFIG;
