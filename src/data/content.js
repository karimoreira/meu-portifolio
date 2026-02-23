import { Code, Database, Cloud, Terminal } from 'lucide-react';

export const personalData = {
  name: "Kari Atílio",
  role: "Desenvolvedor full stack",
  about: "Atuo hoje em uma empresa brasileira de tecnologia, criando aplicações estruturadas e alinhadas aos objetivos de cada projeto proposto. Além do desenvolvimento web, também atuei com suporte de TI, vendas em TI e sou técnico em Informática. Tenho formação em perícia forense computacional e estou no último período de Análise e Desenvolvimento de Sistemas.",
  resumeUrl: "/Curriculo_Kari_Atilio.pdf",
  social: {
    github: "https://github.com/karimoreira",
    linkedin: "https://www.linkedin.com/in/atiliomoreira/",
    email: "mailto:kari.atilio.m@gmail.com"
  }
};

export const skills = [
  {
    category: "Linguagens",
    icon: Code,
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "Spring Boot", "NestJS"]
  },
  {
    category: "Banco de Dados",
    icon: Database,
    items: ["MySQL", "Oracle", "MongoDB", "PostgreSQL", "SQLite"]
  },
  {
    category: "Cloud",
    icon: Cloud,
    items: ["Google Cloud", "AWS"]
  },
  {
    category: "DevOps e Tools",
    icon: Terminal,
    items: ["Git", "GitHub", "Azure", "Azure DevOps", "GitHub Actions", "Jenkins"]
  }
];

export const projects = [
  {
    id: 0,
    tag: "Game Yu-Gi-Oh!",
    title: "Jogo de Cartas, Duelo das sombras",
    description: "Duelo de cartas interativo inspirado em Yu-Gi-Oh!, com simulação de partidas no navegador.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "img/jogo-de-cartas-duelo.webp"
  },
  {
    id: 1,
    tag: "E-commerce TECH Full Stack",
    title: "Gam3r.store",
    description: "E-commerce Full Stack com monorepo, autenticação, gestão de produtos e banco de dados.",
    tech: ["NestJS", "React", "TypeScript", "Prisma", "PostgreSQL", "Docker"],
    image: "img/gamerstore.webp"
  },
  {
    id: 3,
    tag: "Sistema de Saúde",
    title: "Agendamento Médico",
    description: "Solução completa em API, Mobile e Web para gestão de agendamentos e pacientes.",
    tech: ["React", "Vite", "Expo", "SQLite", "API REST"],
    image: "img/criarconta.webp"
  },
  {
    id: 2,
    tag: "Rede Social",
    title: "Ping",
    description: "Rede social sem anúncios focada em conexões reais, com curtidas, comentários, compartilhamentos e feed privado para amigos.",
    tech: ["HTML", "CSS", "Javascript", "Node.js", "SQLite"],
    image: "img/ping-rede-social.webp"
  },
  {
    id: 4,
    tag: "Gerenciador de Tarefas",
    title: "Taskboard",
    description: "Gerenciador de tarefas com backend em Spring Boot e frontend em React com TypeScript.",
    tech: ["Java", "React", "TypeScript", "Axios", "CSS", "H2 Database"],
    image: "img/taskboard.webp"
  },
  {
    id: 5,
    tag: "Cafeteria",
    title: "Cafeteria Ctrl+Coffee",
    description: "Aplicação para cafeteria com cardápio, carrinho de compras e finalização de pedidos.",
    tech: ["Node.js", "Express", "Nodemailer", "JS", "HTML/CSS"],
    image: "img/frontcoffee.webp"
  },
  {
    id: 6,
    tag: "Biblioteca de Programação",
    title: "Biblioteca Online",
    description: "Plataforma web para acessar e pesquisar livros de programação com geração automática de metadados.",
    tech: ["Python", "JavaScript", "JSON", "HTML/CSS"],
    image: "img/bibliotecadelivros.webp"
  },
  {
    id: 7,
    tag: "Hospedagem de Sites",
    title: "Host Site",
    description: "Landing page de serviço de hospedagem com exibição de planos e recursos disponíveis.",
    tech: ["HTML5", "CSS3"],
    image: "img/hostsite.webp"
  },
  {
    id: 8,
    tag: "Site Space-X",
    title: "Landing Page SpaceX",
    description: "Landing page responsiva inspirada na SpaceX, com efeitos visuais e seções de missões.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "img/space-x.webp"
  },
  {
    id: 9,
    tag: "Agência de Viagens",
    title: "Trip Brasil",
    description: "Website de agência de viagens especializado em destinos brasileiros.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "img/tripbrasil.webp"
  },
  {
    id: 10,
    tag: "Java Desktop",
    title: "Gestão de Clientes",
    description: "Sistema desktop com autenticação, criptografia, filtros de busca e geração de relatórios.",
    tech: ["Java", "Swing", "SQLite", "JDBC", "MVC"],
    image: "img/cadastro.webp"
  },
  {
    id: 11,
    tag: "Pokédex",
    title: "Consulta de Pokémons",
    description: "Pokédex responsiva com consumo da PokéAPI, paginação e filtragem por tipos.",
    tech: ["JavaScript", "Fetch API", "HTML5", "CSS3"],
    image: "img/pokedex.webp"
  }
];