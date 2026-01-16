
import React from 'react';
import { Photo, Service } from './types';

export const COLORS = {
  primary: '#ff00ff', // Neon Magenta
  secondary: '#00ffff', // Electric Blue
  accent: '#7000ff', // Deep Purple
  bg: '#050505',
};

export const TRANSLATIONS = {
  pt: {
    nav: { home: 'HOME', about: 'SOBRE', experience: 'EXPERIÊNCIA', portfolio: 'PORTFÓLIO', services: 'SERVIÇOS', contact: 'CONTATO' },
    hero: {
      tagline: 'picMi Photography Experience',
      title1: 'Imagem é',
      titleAccent: 'comunicação',
      desc: 'Transmite e traduz sentimentos. Vamos juntos traduzir pro mundo o seu projeto ou evento!',
      btnWork: 'EXPLORAR TRABALHOS',
      btnQuote: 'SOLICITAR ORÇAMENTO'
    },
    about: {
      tag: 'QUEM SOU',
      title: 'Millena de Almeida',
      p1: 'Millena de Almeida Santos, 26 anos, nascida em 18/09/1999, na cidade de São Paulo. Criada na periferia de São Paulo, na região do Campo Limpo/Capão Redondo, onde ainda resido. Desde criança, tenho uma conexão e manifestação artística notável, especialmente com o cinema e a música, que sempre fizeram parte da minha vida e consumo cultural fortemente.',
      p2: 'Possuo facilidade na oratória e escrita, essenciais para a escrita de roteiros de trabalhos artísticos e na comunicação diária que o meio de produção exige. Acredito que os melhores projetos se constroem com uma comunicação transparente entre o cliente e eu, para que o resultado final agrade 100% a todos.',
      p3: 'Trabalho com respeito, criatividade, ousadia, inteligência, potência e comprometimento. Busco impactar o cenário audiovisual brasileiro, engrandecendo nossa cultura local. Utilizo a Fotografia para transmitir sentimentos e causas, traduzindo o intraduzível.',
      projects: 'Projetos',
      creativity: 'Creativity'
    },
    experience: {
      tag: 'CARREIRA',
      title: 'Experiência Corporativa',
      visionTitle: 'Vision Produtora',
      visionHandle: '@vision_produtora',
      visionDesc: 'Onde aprendi a realizar Ensaios Corporativos, Ensaios de Gestante, Família, Casamento, Natal, Aniversários, entre outros.',
      photoparkTitle: 'Photopark',
      photoparkHandle: '@photoparkbr',
      photoparkDesc: 'Realizo diariamente trabalhos em eventos e locais como Mundo Pixar, CCXP e Parque da Mônica, com experiência com públicos de todas as idades.'
    },
    portfolio: {
      title: 'O QUE VOCÊ QUER VER ?',
      desc: 'SELECIONE UMA CATEGORIA PARA FILTRAR O CONTEÚDO',
      viewData: 'VER DADOS',
      moduleCompleted: 'MÓDULO CONCLUÍDO',
      all: 'TUDO',
      categories: {
        shows: 'SHOWS',
        capa: 'CAPA DE MÚSICA',
        clipes: 'CLIPES',
        batalhas: 'BATALHAS DE RIMA',
        makingof: 'MAKING OF',
        moda: 'MODA',
        ecommerce: 'E-COMMERCE',
        aniversario: 'ANIVERSÁRIO',
        esportes: 'ESPORTES',
        eventos: 'EVENTOS',
        still: 'STILL'
      }
    },
    services: {
      title: 'SKILL TREE',
      desc: 'SERVIÇOS DISPONÍVEIS',
      s1Title: 'FOTOGRAFIA ARTÍSTICA',
      s1Desc: 'Ensaios com foco em narrativa visual e estética glitch/gamer.',
      s2Title: 'ENSAIOS CRIATIVOS',
      s2Desc: 'Sessões experimentais que desafiam a realidade convencional.',
      s3Title: 'CONTEÚDO PARA MARCAS',
      s3Desc: 'Identidade visual moderna para marcas que vivem o digital.'
    },
    contact: {
      tag: 'Conecte-se com a picMi',
      t1: 'VAMOS',
      t2: 'TRADUZIR',
      t3: 'SEU PROJETO?',
      desc: 'Seja um evento, uma marca ou um ensaio pessoal: sua história merece ser contada com o impacto visual que só a picMi entrega.',
      wa: 'Inicie uma conversa direta',
      ig: 'Veja os últimos cliques',
      email: 'ENVIAR E-MAIL',
      footer: 'Excelência Visual'
    },
    footer: { rights: 'TODOS OS DIREITOS RESERVADOS' }
  },
  en: {
    nav: { home: 'HOME', about: 'ABOUT', experience: 'EXPERIENCE', portfolio: 'PORTFOLIO', services: 'SERVICES', contact: 'CONTACT' },
    hero: {
      tagline: 'picMi Photography Experience',
      title1: 'Image is',
      titleAccent: 'communication',
      desc: 'It transmits and translates feelings. Let\'s translate your project or event to the world together!',
      btnWork: 'EXPLORE WORKS',
      btnQuote: 'GET A QUOTE'
    },
    about: {
      tag: 'WHO I AM',
      title: 'Millena de Almeida',
      p1: 'Millena de Almeida Santos, 26 years old, born on 09/18/1999, in the city of São Paulo. Raised in the outskirts of São Paulo, in the Campo Limpo/Capão Redondo region, where I still reside. Since childhood, I have had a notable artistic connection and expression, especially with cinema and music, which have always been a strong part of my life.',
      p2: 'I have a natural flair for public speaking and writing, essential for scriptwriting and the daily communication required in the production field. I believe the best projects are built on transparent communication between the client and myself, ensuring the final result satisfies everyone 100%.',
      p3: 'I work with respect, creativity, boldness, intelligence, power, and commitment. I seek to impact the Brazilian audiovisual scene, celebrating our local culture. I use Photography to convey feelings and causes, translating the untranslatable.',
      projects: 'Projects',
      creativity: 'Creativity'
    },
    experience: {
      tag: 'CAREER',
      title: 'Corporate Experience',
      visionTitle: 'Vision Produtora',
      visionHandle: '@vision_produtora',
      visionDesc: 'Where I learned to conduct Corporate Shoots, Maternity, Family, Weddings, Christmas, Birthdays, among others.',
      photoparkTitle: 'Photopark',
      photoparkHandle: '@photoparkbr',
      photoparkDesc: 'Daily work at events and locations like Mundo Pixar, CCXP, and Parque da Mônica, gaining experience with audiences of all ages.'
    },
    portfolio: {
      title: 'WHAT DO YOU WANT TO SEE ?',
      desc: 'SELECT A CATEGORY TO FILTER THE CONTENT',
      viewData: 'VIEW DATA',
      moduleCompleted: 'MODULE COMPLETED',
      all: 'ALL',
      categories: {
        shows: 'SHOWS',
        capa: 'MUSIC COVERS',
        clipes: 'MUSIC VIDEOS',
        batalhas: 'RAP BATTLES',
        makingof: 'MAKING OF',
        moda: 'FASHION',
        ecommerce: 'E-COMMERCE',
        aniversario: 'BIRTHDAYS',
        esportes: 'SPORTS',
        eventos: 'EVENTS',
        still: 'STILL'
      }
    },
    services: {
      title: 'SKILL TREE',
      desc: 'AVAILABLE SERVICES',
      s1Title: 'ARTISTIC PHOTOGRAPHY',
      s1Desc: 'Photoshoots focused on visual narrative and glitch/gamer aesthetics.',
      s2Title: 'CREATIVE PHOTOSHOOTS',
      s2Desc: 'Experimental sessions that challenge conventional reality.',
      s3Title: 'BRAND CONTENT',
      s3Desc: 'Modern visual identity for brands that live in the digital realm.'
    },
    contact: {
      tag: 'Connect with picMi',
      t1: 'SHALL WE',
      t2: 'TRANSLATE',
      t3: 'YOUR PROJECT?',
      desc: 'Whether it\'s an event, a brand, or a personal shoot: your story deserves to be told with the visual impact that only picMi delivers.',
      wa: 'Start a direct conversation',
      ig: 'See the latest clicks',
      email: 'SEND E-MAIL',
      footer: 'Visual Excellence'
    },
    footer: { rights: 'ALL RIGHTS RESERVED' }
  }
};

export const PHOTOS: Photo[] = [
  {
    id: 'bday-1',
    url: 'https://api.a0.dev/assets/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fstatic.a0.dev%2Fprojects%2F5997972f-5f5a-497c-9584-69972750e201%2Finput-image-0.png',
    category: 'aniversario',
    title: 'CLAPPERBOARD VIBES'
  },
  {
    id: 'bday-2',
    url: 'https://api.a0.dev/assets/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fstatic.a0.dev%2Fprojects%2F5997972f-5f5a-497c-9584-69972750e201%2Finput-image-1.png',
    category: 'aniversario',
    title: 'NEON CELEBRATION'
  },
  {
    id: 'bday-3',
    url: 'https://api.a0.dev/assets/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fstatic.a0.dev%2Fprojects%2F5997972f-5f5a-497c-9584-69972750e201%2Finput-image-2.png',
    category: 'aniversario',
    title: 'DANCE FLOOR'
  }
];

export const GET_SERVICES = (lang: 'pt' | 'en'): Service[] => [
  {
    id: 's1',
    title: TRANSLATIONS[lang].services.s1Title,
    description: TRANSLATIONS[lang].services.s1Desc,
    icon: '📸',
  },
  {
    id: 's2',
    title: TRANSLATIONS[lang].services.s2Title,
    description: TRANSLATIONS[lang].services.s2Desc,
    icon: '🕹️',
  },
  {
    id: 's3',
    title: TRANSLATIONS[lang].services.s3Title,
    description: TRANSLATIONS[lang].services.s3Desc,
    icon: '⚡',
  },
];
