// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Pranjal Naman&#39;s Resume",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-attending-pingala-interactions-in-computing-mysore-india-as-a-young-researcher-sparkles-smile",
          title: 'Attending Pingala Interactions in Computing (Mysore, India) as a Young Researcher. :sparkles: :smile:...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-the-45th-ieee-international-conference-on-distributed-computing-systems-icdcs-2025",
          title: 'Paper accepted at the 45th IEEE International Conference on Distributed Computing Systems (ICDCS...',
          description: "",
          section: "News",},{id: "news-received-the-acm-iarcs-travel-grant-for-attending-icdcs-2025-in-glasgow-uk",
          title: 'Received the ACM-IARCS travel grant for attending ICDCS 2025 in Glasgow, UK.',
          description: "",
          section: "News",},{id: "news-preprint-of-ripple-scalable-incremental-gnn-inferencing-on-large-streaming-graphs-to-appear-icdcs-2025-out-on-arxiv-reach-out-if-you-d-like-to-discuss-the-paper",
          title: 'Preprint of Ripple: Scalable Incremental GNN Inferencing on Large Streaming Graphs (to appear,...',
          description: "",
          section: "News",},{id: "news-successfuly-passed-my-comprehensive-examination-officially-a-phd-candidate-now-sparkles-smile",
          title: 'Successfuly passed my comprehensive examination. Officially a PhD candidate now.  :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-attending-microsoft-research-ai-summit-2025-at-msr-office-bangalore-24-25-june",
          title: 'Attending Microsoft Research AI Summit 2025 at MSR Office, Bangalore 24-25 June.',
          description: "",
          section: "News",},{id: "news-paper-ripple-scalable-incremental-gnn-inferencing-on-large-streaming-graphs-selected-for-oral-presentation-at-the-indosys-symposium-2025-see-you-there",
          title: 'Paper Ripple: Scalable Incremental GNN Inferencing on Large Streaming Graphs selected for oral...',
          description: "",
          section: "News",},{id: "news-preprint-of-optimes-optimizing-federated-learning-using-remote-embeddings-for-graph-neural-networks-out-on-arxiv",
          title: 'Preprint of OptimES: Optimizing Federated Learning Using Remote Embeddings for Graph Neural Networks...',
          description: "",
          section: "News",},{id: "news-paper-ripple-scalable-incremental-gnn-inferencing-on-large-streaming-graphs-finally-out-on-ieeexplore",
          title: 'Paper Ripple: Scalable Incremental GNN Inferencing on Large Streaming Graphs finally out on...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%72%61%6E%6A%61%6C%6E%61%6D%61%6E@%69%69%73%63.%61%63.%69%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/pranjalnam", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/pranjalnaman", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0000-9912-9522", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=h1eTTwIAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
