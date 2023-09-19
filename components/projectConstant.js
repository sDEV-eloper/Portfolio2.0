import vstreamImg from "@/public/images/code_icon/vstream.png";
import letsChatImg from "@/public/images/code_icon/chatapp.png";
import bookRecImg from "@/public/images/bookRec.jpg";
import ramayanImg from "@/public/images/ramayanImg.png";
import netflixImg from "@/public/images/code_icon/netflix.png"

export const projectsData = [

  {
    title: "Netflix-gpt",
    backgroundImg: netflixImg,
    projectUrl: "https://ainetflix.netlify.app/",
    githubUrl:"https://github.com/sDEV-eloper/Netflixx-GPT",
    tech: [
      //why don't here is an array of name? ans: dues due to i want to add their logo in future for each tech skills thats why
      {name: "OpenAI Tool"},
        {name:"React JS"},
        {name: "Tailwind CSS"},
        {name: "React Router"},
        {name: "Redux Toolkit"},
        {name: "Firebase"},
      ],

        features: [
           "Authentication using Firebase" , "Validation", "Movie Recommendation using OpenAi Gpt-model", "Multilingual GPT Search bar" , "API"
        ]
   
  },
 
  {
      title: "VStream",
    backgroundImg: vstreamImg,
    projectUrl: "https://vstreams.netlify.app/",
    githubUrl: "https://github.com/sDEV-eloper/VStream",

    tech: [
        {name:"React JS"},
        {name: "Tailwind CSS"}],
        features: [
          "Category based Suggestion" , "Search Bar", "Responsive", "API"  
       ]
  },
  {
    title: "YouKnowRamayana",
  backgroundImg: ramayanImg,
  projectUrl: "https://youknowramayan.vercel.app/",
  githubUrl: "https://github.com/sDEV-eloper/VStreamhttps://github.com/sDEV-eloper/doYouKnow_Ramayan",
  tech: [
      {name:"Html"},
      {name: "Tailwind CSS"},
      {name: "Vanilla JavaScript"},
    ],
      features: [
        "Score" , "Shuffle", "Notification", "Timer"  
     ]
},
  {
    title: "Let's Chat",
    backgroundImg: letsChatImg,
    projectUrl: "https://velvety-haupia-f41530.netlify.app/",
    githubUrl: "https://github.com/sDEV-eloper/letsChat",
    tech: [
        {name:"React JS"},
        {name: "Firebase"},
        {name: "Tailwind CSS"},
    ],
    features: [
      "Real time Chat", "Authorization & Authentication using Firebase"
   ]
  },
  {
    title: "NextBook",
    backgroundImg: bookRecImg,
    githubUrl: "https://github.com/sDEV-eloper/nextBook",
    tech: "Machine Learning, Python, Flask, Html, Css",
    tech: [
        {name:"Machine Learning"},
        {name: "Python"},
        {name: "Flask"},
        {name: "HTML"},
        {name: "CSS"},
    ],
    features: [
      "Top 50 Books", "Recommend Books on search"
    ]
  },
 
];
