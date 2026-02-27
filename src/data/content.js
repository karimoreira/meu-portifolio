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
    items: ["AWS"]
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
    tag: "Landing page ",
    title: "Sorveteria",
    description: "Landing page completa para sorveteria artesanal com cardápio interativo, scroll animado por sabor.",
    video: "medias/sorveteria.webm"
  },
  {
    id: 1,
    tag: "Game Yu-Gi-Oh!",
    title: "Jogo de Cartas, Duelo das sombras",
    description: "Duelo de cartas interativo inspirado em Yu-Gi-Oh!, com simulação de partidas no navegador.",
    image: "img/jogo-de-cartas-duelo.webp"
  },
      {
        id: 6,
        tag: "Segurança de Rede",
        title: "ShieldNet",
        description: "Proteção de redes Wi-Fi contra ataques AirSnitch, com análise de vulnerabilidades e isolamento.",
        image: "/img/project-seguranca.png",
        link: "#",
      },
  {
    id: 2,
    tag: "E-commerce TECH Full Stack",
    title: "Loja de Computadores",
    description: "E-commerce Full Stack com monorepo, autenticação, gestão de produtos e banco de dados.",
    image: "img/gamerstore.webp"
  },
  {
    id: 3,
    tag: "Sistema logado de Saúde",
    title: "Agendamento Médico",
    description: "Solução completa em API, Mobile e Web para gestão de agendamentos e pacientes.",
    image: "img/criarconta.webp"
  },
  {
    id: 4,
    tag: "Rede Social",
    title: "Ping",
    description: "Rede social sem anúncios, com curtidas, comentários, compartilhamentos e feed privado.",
    image: "img/ping-rede-social.webp"
  },
    {
      id: 5,
      tag: "Landing page",
      title: "SONIQ",
      description: "Landingpage de vendas de headphone.",
      image: "img/soniq.png"
    },
  {
      id: 6,
      tag: "Gerenciador de Tarefas",
      title: "Taskboard",
      description: "Gerenciador de tarefas com backend em Java e frontend em React.",
      image: "img/taskboard.webp"
  },
  {
    id: 7,
    tag: "Cafeteria",
    title: "Cafeteria Cerrado",
    description: "Aplicação para cafeteria com cardápio, carrinho de compras e finalização de pedidos.",
    image: "img/cafeteria-cerrado.png"
  },
  {
    id: 8,
    tag: "Biblioteca de Programação",
    title: "Biblioteca Online",
    description: "Acessar, pesquisar e baixar os melhores livros de programação.",
    image: "img/biblioteca-de-livros.png"
  },
  {
    id: 9,
    tag: "Agência de Viagens",
    title: "Trip Brasil",
    description: "Website de agência de viagens especializado em destinos brasileiros.",
    image: "img/tripbrasil.webp"
  },
  {
    id: 10,
    tag: "SISTEMA Java Desktop",
    title: "Gestão de Clientes",
    description: "Sistema desktop com autenticação, criptografia, filtros de busca e geração de relatórios.",
    image: "img/cadastro.webp"
  },

];