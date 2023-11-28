import { defineEventHandler } from 'h3';
import { Timeline } from "src/app/models/timeline.models";

export default defineEventHandler(() => (timeline));

const timeline: Timeline = {
    startTime: new Date(2023, 11, 1, 8, 45),
    agenda: [
      {
        duration: 40,
        title: 'Registration Opening',
        image: 'icons/icon-ticket.svg',
        type: 'activity'
      },
      {
        duration: 10,
        title: 'Opening Remarks',
        speaker: 'NGRome Team',
        image: 'icons/icon-opening.svg',
        type: 'activity'
      },
      {
        duration: 40,
        title: 'Quo vadis, Angular?',
        speaker: 'Pawel Kozlowski & Alex Rickabaugh',
        description: 'This year, people have noticed something interesting is happening with Angular. The pace of feature development has taken off, and the framework seems to be moving forward by leaps and bounds! What’s going on? More importantly - how all those new features fit together into the cohesive story? This talk is the overview of the recent changes in Angular, the larger philosophy behind those changes as well as the glimpse into the future work.',
        image: './speakers/pawel-kozlowski.png',
        type: 'talk'
      },
      {
        duration: 25,
        title: 'NgRx SignalStore - Journey from Vision to First Release',
        speaker: 'Marko Stanimirović',
        description: 'NgRx SignalStore is a new state management solution in the Angular ecosystem that provides first-class support for Angular Signals. Join me in this talk to learn more about the journey of developing the `@ngrx/signals` library, from the initial idea to the first official release. We\'ll explore its core features and discuss the challenges, design considerations, and key decisions that shaped this state management library.',
        image: './speakers/marko-stanimirovic.png',
        type: 'talk'
      },
      {
        duration: 20,
        title: 'Panel with Pawel Kozlowski, Marko Stanimirović',
        image: 'icons/icon-panel.svg',
        type: 'activity'
      },
      {
        duration: 30,
        title: 'Coffee Break',
        image: 'icons/icon-tabler-coffee.svg',
        type: 'activity'
      },
      
      {
        duration: 25,
        title: 'Better Angular Architectures with Standalone Components, Signals, Nx, & Co',
        speaker: 'Fabian Gosebrink',
        description: 'Developing modern web applications can be complex, with challenges in component reusability, efficient communication, and project scalability. Angular\'s latest features, including standalone components, Signals for seamless communication, and Nx\'s monorepo capabilities, provide robust solutions. In this talk, Fabian Gosebrink will guide you through harnessing these features, enabling you to build highly adaptable and responsive web applications with Angular.',
        image: './speakers/fabian-gosebrink.png',
        type: 'talk'
      },
      {
        duration: 20,
        title: 'Harnessing the Power of Signals in Angular Applications',
        description: 'In this presentation, we will discuss how to use Signals in Angular applications to boost performance and increase developer productivity. Signals are a simple and effective method for managing reactivity and communication between components. By applying these concepts in an Angular setting, developers can greatly enhance the structure of their applications.',
        speaker: 'Mateusz Stefańczyk',
        image: './speakers/mateusz-stefanczyk.png',
        type: 'talk'
      },
      {
        duration: 20,
        title: 'ELI5 Angular Hydration',
        description: 'Angular with the last releases, introduce a significant breakthrough for Angular developers. One of the notable advancements in this release pertains to server-side rendering (SSR) hydration. Let\'s explore how hydration has evolved in Angular development, comparing it to the previous approach and highlighting the improvements in the latest release.',
        speaker: 'Soumaya Erradi',
        image: './speakers/soumaya-erradi.png',
        type: 'talk'
      },
      {
        duration: 20,
        title: 'Panel with Fabian Gosebrink, Mateusz Stefańczyk, Soumaya Erradi',
        image: 'icons/icon-panel.svg',
        type: 'activity'
      },
      {
        duration: 70,
        title: 'Networking & Lunch',
        image: 'icons/icon-pizza.svg', 
        type: 'activity'
      },
      {
        duration: 25,
        title: 'Implement the backend of your application with Azure Functions, NodeJS!',
        description: 'Are you an Angular frontend developer wondering how to build a scalable, cost-effective, and high-performance backend without needing to become an expert in cloud infrastructure? This session is tailored just for you! You will discover the power of serverless architectures, particularly with Azure Functions. You will learn how these technologies enable you to focus on feature development while leaving the infrastructure management to Azure... and all while utilizing the language of your frontend!',
        speaker: 'Massimo Bonanni',
        image: './speakers/massimo-bonanni.png',
        type: 'talk'
      },
      
      {
        duration: 25,
        title: 'There\'s Safety in Angular',
        description: 'When you use Angular, you know you’ve got a best-in-class framework with all the bells and whistles at your fingertips. But did you know Angular is also a cozy blanket that keeps you safe and secure? Businesses with a security breach in 2021 average over $8 million in remediation, and it can permanently damage their brand. The 2021 OWASP Top 10 list includes broken access control and web injection exploits in their top 3 security risks. This talk will cover web vulnerabilities, risks posed by exposing sensitive information, and how Angular has your back so you can rest easy.',
        speaker: 'Alisa Duncan',
        image: './speakers/alisa-duncan.png',
        type: 'talk'
      },
      
      {
        duration: 25,
        title: 'Building Bard from scratch with MakerSuite and PaLM API',
        description: 'In this talk, you will learn how to bring Generative AI from the whiteboard to an App using MakerSuite, PaLM API and Angular. MakerSuite is a tool to build the new wave of Generative AI applications using PaLM foundational models. MakerSuite makes it simple to engineer prompts, so that you can create and experiment with LLMs to create AI-enabled Apps within minutes. By using MakerSuite, we will prototype, validate, and refine our ideas. From here is as easy as, export your code and start building! We will be introducing the PaLM APIs for Text and Chat to build the foundations of a Bard-like Assistant with advanced features like adding a rich-text-editor for prompts, ElevenLabs natural voices to speak out outputs, and rendering rich media for chat rendering markdown, code fences, MermaidJS diagrams and more!',
        speaker: 'Gerard Sans',
        image: './speakers/gerard-sans.png',
        type: 'talk'
      },
      {
        duration: 20,
        title: 'Panel with Massimo Bonanni, Alisa Duncan, Gerard Sans',
        image: 'icons/icon-panel.svg',
        type: 'activity'
      },
      {
        duration: 30,
        title: 'Coffee Break',
        image: 'icons/icon-tabler-coffee.svg',
        type: 'activity'
      },
      {
        duration: 25,
        title: 'All Roads Lead to Rome: Building an Empowered Team',
        description: 'Step into ancient Rome\'s world—togas, chariot races, and revolutionary road tech! Your empowered team, like Rome, blends diverse talents. Much like Rome\'s roads linking all corners, your team bridges minds, adapting with gladiator-like agility. Inspire, empower—guide them to connect and create, mirroring the profound impact of Rome\'s roads on unity and innovation.',
        speaker: 'Giuseppe Ettorre',
        image: './speakers/giuseppe-ettorre.png',
        type: 'talk'
      },
      {
        duration: 15,
        title: 'Go Dynamic with Reactive Forms',
        description: 'Create complex forms in a web application can be a hard task, that\'s why Angular Reactive Forms are one of the top level feature of this framework. Thanks to this powerful tool you can create complex forms easily and offer to users a very nice experience in a short amount of time. But what happens if you need to change frequently to meet new business and regulatory requirements? In this case they are not enough. Join me to learn how to build your own tool to create reactive and user friendly forms dynamically starting from json. Let\'s go dynamic!',
        speaker: 'Davide Passafaro',
        image: './speakers/davide-passafaro.png',
        type: 'talk'
      },
      {
        duration: 40,
        title: 'The era of Angular intelligent apps, with Azure Open AI',
        speaker: 'Natalia Venditto',
        image: './speakers/natalia-venditto.png',
        type: 'talk'
      },
      {
        duration: 20,
        title: 'Panel with Giuseppe Ettorre, Davide Passafaro, Natalia Venditto',
        image: 'icons/icon-panel.svg',
        type: 'activity'
      },
      {
        duration: 10,
        title: 'Closing Remarks',
        speaker: 'NGRome Team',
        image: 'icons/icon-opening.svg',
        type: 'activity'
      },
    ],
  }