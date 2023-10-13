import { defineEventHandler } from 'h3';
import { timelineItems } from 'src/app/models/timeline.models';

export default defineEventHandler(() => (agenda));


const agenda: timelineItems[] = [
      {
        duration: 25,
        title: 'NgRx SignalStore - Journey from Vision to First Release',
        speaker: 'Marko Stanimirović',
        speakerImage: './speakers/marko-stanimirovic.jpg',
        githubUrl: 'https://github.com/markostanimirovic/',
        twitterUrl: 'https://twitter.com/MarkoStDev/',
        jobTitle: 'Principal Frontend Engineer at Swiss Marketplace Group',
        description: 'Marko is a Principal Frontend Engineer at Swiss Marketplace Group. He is also a core member of the NgRx and AnalogJS teams, a Google Developer Expert in Angular, and an organizer of the Angular Belgrade group. Marko actively contributes to open-source software, shares knowledge through technical articles and talks, and enjoys playing the guitar. He holds a Master of Science in Software Engineering from the University of Belgrade.'
      },
      {
        duration: 25,
        title: 'There\'s Safety in Angular',
        speaker: 'Alisa Duncan',
        speakerImage: './speakers/alisa-duncan.jpg',
        githubUrl: 'https://github.com/alisaduncan',
        twitterUrl: 'https://twitter.com/AlisaDuncan',
        jobTitle: 'Senior Developer Advocate at Okta',
        description: 'Alisa Duncan is a Senior Developer Advocate at Okta, a full-stack developer, content creator, conference speaker, Pluralsight author, and community builder who loves the thrill of learning new things. She is a Google Developer Expert in Angular, a Women Techmaker Ambassador, a ngGirls core team member, and a volunteer at community events supporting underrepresented groups entering tech. When not coding or volunteering, you can find her cooking, watching K-Dramas, or drinking a glass of wine.'
      },
      {
        duration: 25,
        title: 'Building an Empowered Product Team',
        speaker: 'Giuseppe Ettorre',
        speakerImage: './speakers/giuseppe-ettorre.jpg',
        githubUrl: 'https://github.com/peppoasap',
        twitterUrl: '',
        jobTitle: 'Frontend Team Lead @ INEO 🧙🏼‍♂️',
        description: 'He considers himself a mix of creativity with a dash of technical wizardry 🖼️, a Things\' improviser 🔮, on a mission to change the world 🌎, one mad experiment at a time. As he wraps up his IT Engineering studies at Politecnico di Milano (yes, you read that right, he actually studies!), he is proving that geeks can have a wild side too 📚. He is a master chef in his own kitchen and a lone wolf adventurer, whipping up gourmet disasters 👨🏻‍🍳, traveling solo 🗺️ and as you can see… he likes emojis(sometimes too much).'
      },
      {
        duration: 25,
        title: 'ELI5 Angular Hydration',
        speaker: 'Soumaya Erradi',
        speakerImage: './speakers/soumaya-erradi.jpg',
        githubUrl: 'https://github.com/soumayaerradi',
        twitterUrl: 'https://twitter.com/sumy92',
        jobTitle: 'Software developer and an IT teacher @Scaling parrots',
        description: 'I\'m a software developer and an IT teacher. I\'m high skilled in web development (frontend and backend), specialized in developing enterprise applications using Angular. Currently, I\'m working as frontend lead developer in a team focused on blockchain app development. I\'m also holding coding courses and meetups to deepen technical and business issues related to Blockchain and Smart Contracts. As a speaker at conferences I bring advanced Angular topics, tips for the integration of smart contracts and best solutions for decentralized applications and web3.'
      },
      {
        duration: 25,
        title: 'Building Bard from scratch with MakerSuite and PaLM API',
        speaker: 'Gerard Sans',
        speakerImage: './speakers/gerard-sans.jpg',
        githubUrl: 'https://github.com/soumayaerradi',
        twitterUrl: 'https://twitter.com/gerardsans',
        jobTitle: 'Angular GDE',
        description: ''
      },
      
    ];