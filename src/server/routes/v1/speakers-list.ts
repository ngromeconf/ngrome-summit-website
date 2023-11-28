import { defineEventHandler } from 'h3';
import { timelineItems } from 'src/app/models/timeline.models';

export default defineEventHandler(() => (agenda));


const agenda: timelineItems[] = [
      {
        duration: 40,
        title: 'Quo vadis, Angular?',
        speaker: 'Pawel Kozlowski',
        speakerImage: './speakers/pawel-kozlowski.png',
        githubUrl: 'https://github.com/pkozlowski-opensource',
        twitterUrl: 'https://twitter.com/pkozlowski_os',
        jobTitle: 'Senior Frontend Developer at Google, Angular core team, open source enthusiast',
        description: 'This year, people have noticed something interesting is happening with Angular. The pace of feature development has taken off, and the framework seems to be moving forward by leaps and bounds! What’s going on? More importantly - how all those new features fit together into the cohesive story? This talk is the overview of the recent changes in Angular, the larger philosophy behind those changes as well as the glimpse into the future work.'
      },
      {
        duration: 25,
        title: 'NgRx SignalStore - Journey from Vision to First Release',
        speaker: 'Marko Stanimirović',
        speakerImage: './speakers/marko-stanimirovic.png',
        githubUrl: 'https://github.com/markostanimirovic/',
        twitterUrl: 'https://twitter.com/MarkoStDev/',
        jobTitle: 'Principal Frontend Engineer at Swiss Marketplace Group',
        description: 'Marko is a Principal Frontend Engineer at Swiss Marketplace Group. He is also a core member of the NgRx and AnalogJS teams, a Google Developer Expert in Angular, and an organizer of the Angular Belgrade group. Marko actively contributes to open-source software, shares knowledge through technical articles and talks, and enjoys playing the guitar. He holds a Master of Science in Software Engineering from the University of Belgrade.'
      },
      {
        duration: 10,
        title: 'ELI5 Angular Hydration',
        speaker: 'Soumaya Erradi',
        speakerImage: './speakers/soumaya-erradi.png',
        githubUrl: 'https://github.com/soumayaerradi',
        twitterUrl: 'https://twitter.com/sumy92',
        jobTitle: 'Software developer and an IT teacher @Scaling parrots',
        description: 'I\'m a software developer and an IT teacher. I\'m high skilled in web development (frontend and backend), specialized in developing enterprise applications using Angular. Currently, I\'m working as frontend lead developer in a team focused on blockchain app development. I\'m also holding coding courses and meetups to deepen technical and business issues related to Blockchain and Smart Contracts. As a speaker at conferences I bring advanced Angular topics, tips for the integration of smart contracts and best solutions for decentralized applications and web3.'
      },
      {
        duration: 25,
        title: 'Building Bard from scratch with MakerSuite and PaLM API',
        speaker: 'Gerard Sans',
        speakerImage: './speakers/gerard-sans.png',
        githubUrl: 'https://github.com/soumayaerradi',
        twitterUrl: 'https://twitter.com/gerardsans',
        jobTitle: 'Angular GDE',
        description: ''
      },
      {
        duration: 25,
        title: 'Implement the backend of your application with Azure Functions, NodeJS!',
        speaker: 'Massimo Bonanni',
        speakerImage: './speakers/massimo-bonanni.png',
        githubUrl: 'https://github.com/massimobonanni',
        twitterUrl: 'https://twitter.com/massimobonanni',
        jobTitle: 'Microsoft Technial Speaker',
        description: 'Paranormal Trainer, with the head in the Cloud and all the REST in microservices! Helping people to achive more with their technical skills!!!'
      },
      {
        duration: 25,
        title: 'Building an Empowered Product Team',
        speaker: 'Giuseppe Ettorre',
        speakerImage: './speakers/giuseppe-ettorre.png',
        githubUrl: 'https://github.com/peppoasap',
        twitterUrl: '',
        jobTitle: 'Frontend Team Lead @ INEO 🧙🏼‍♂️',
        description: 'He considers himself a mix of creativity with a dash of technical wizardry 🖼️, a Things\' improviser 🔮, on a mission to change the world 🌎, one mad experiment at a time. As he wraps up his IT Engineering studies at Politecnico di Milano (yes, you read that right, he actually studies!), he is proving that geeks can have a wild side too 📚. He is a master chef in his own kitchen and a lone wolf adventurer, whipping up gourmet disasters 👨🏻‍🍳, traveling solo 🗺️ and as you can see… he likes emojis(sometimes too much).'
      },
      {
        duration: 25,
        title: 'There\'s Safety in Angular',
        speaker: 'Alisa Duncan',
        speakerImage: './speakers/alisa-duncan.png',
        githubUrl: 'https://github.com/alisaduncan',
        twitterUrl: 'https://twitter.com/AlisaDuncan',
        jobTitle: 'Senior Developer Advocate at Okta',
        description: 'Alisa Duncan is a Senior Developer Advocate at Okta, a full-stack developer, content creator, conference speaker, Pluralsight author, and community builder who loves the thrill of learning new things. She is a Google Developer Expert in Angular, a Women Techmaker Ambassador, a ngGirls core team member, and a volunteer at community events supporting underrepresented groups entering tech. When not coding or volunteering, you can find her cooking, watching K-Dramas, or drinking a glass of wine.'
      },
      {
        duration: 10,
        title: 'Harnessing the Power of Signals in Angular Applications',
        speaker: 'Mateusz Stefańczyk',
        speakerImage: './speakers/mateusz-stefanczyk.png',
        githubUrl: 'https://github.com/stefanoww',
        twitterUrl: 'https://twitter.com/m_stefanczyk',
        jobTitle: 'Angular Developer w House Of Angular',
        description: 'Team leader of the Angular team at House of Angular company and a blogger on the angular.love blog, where he shares knowledge and experience about Angular. He develops Angular web applications and is passionate about business analysis and designing custom web application architectures. Mateusz is also keen on gaining expertise in the field of reverse engineering.'
      },
     
      {
        duration: 40,
        title: 'The era of Angular intelligent apps, with Azure Open AI',
        speaker: 'Natalia Venditto',
        speakerImage: './speakers/natalia-venditto.png',
        githubUrl: 'https://github.com/anfibiacreativa',
        twitterUrl: 'https://twitter.com/AnfibiaCreativa',
        jobTitle: 'Principal Lead JavaScript e2e DX @Microsoft #Azure. Wasm. Devtools.',
        description: 'My name is Natalia Venditto, I was born in 🇺🇾 and I currently work in the role of Principal Program Manager with Microsoft, leading the JavaScript and Node.js e2e developer experience on Azure, (Dev Tools, DX).I\'ve been in tech for a while, also in the roles of Principal Solutions Architect for the Adobe tech stack, Principal Frontend Engineer at Cognizant, Senior Solutions Architect with MongoDB, and full-stack freelance developer and consultant. I\'m also an international technical public speaker.'
      },
      {
        duration: 25,
        title: 'Go Dynamic with Reactive Forms',
        speaker: 'Davide Passafaro',
        speakerImage: './speakers/davide-passafaro.png',
        githubUrl: 'https://github.com/DavidePassafaro',
        jobTitle: 'Senior Frontend Engineer @awork',
      },
      {
        duration: 25,
        title: 'Better Angular Architectures with Standalone Components, Signals, Nx, & Co',
        speaker: 'Fabian Gosebrink',
        speakerImage: './speakers/fabian-gosebrink.png',
        githubUrl: 'https://github.com/FabianGosebrink',
        twitterUrl: 'https://twitter.com/FabianGosebrink',
        jobTitle: 'Microsoft MVP, Google Developer Expert, Pluralsight Author',
      },
      
    ];