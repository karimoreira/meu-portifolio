import { Code, Database, Cloud, Terminal } from 'lucide-react';

export const personalData = {
  name: "Kari Atílio",
  role: "Desenvolvedor full stack",
  about: "Atuo hoje em uma empresa brasileira de tecnologia, criando aplicações estruturadas e alinhadas aos objetivos de cada projeto proposto. Além do desenvolvimento web, também atuei com suporte de TI, vendas em TI e sou técnico em Informática, o que amplia minha visão de infraestrutura, operação e atendimento. Tenho formação em perícia forense computacional, trazendo uma perspectiva ampla em análises.",
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
    description: "Jogo de cartas inspirado em Yu-Gi-Oh! com interface web, desenvolvido em HTML, CSS e JavaScript. Permite duelos interativos e simulação de partidas.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "img/jogo-de-cartas-duelo.webp"
  },
  {
    id: 1,
    tag: "E-commerce TECH Full Stack",
    title: "Gam3r.store",
    description: "E-commerce Full Stack arquitetado como monorepo (TurboRepo). Backend em NestJS com Prisma e PostgreSQL, Frontend em React. Conta com autenticação, gestão de produtos e banco de dados populado via seed.",
    tech: ["NestJS", "React", "TypeScript", "Prisma", "PostgreSQL", "Docker"],
    image: "img/gamerstore.webp"
  },
  {
    id: 2,
    tag: "Rede Social",
    title: "Ping",
    description: "Rede social focada em conexões reais. Permite aos usuários postar atualizações apenas para seus amigos, com a opção deseguir e interagir por meio de curtidas, compartilhamentos e comentários sem ser sufocado por anúncios ou assuntos irrelevantes. Como as redes sociais eram há alguns anos.",
    tech: ["HTML", "CSS", "Javascript", "Node.js", "SQLite"],
    image: "img/ping-rede-social.webp"
  },
  {
    id: 3,
    tag: "Sistema de Saúde",
    title: "Agendamento Médico",
    description: "Solução completa dividida em API, Mobile e Web. Ampliou meus conhecimentos técnicos sobre a importância de soluções na área da saúde. Inclui gestão de agendamentos e pacientes.",
    tech: ["React", "Vite", "Expo", "SQLite", "API REST"],
    image: "img/criarconta.webp"
  },
  {
    id: 4,
    tag: "Gerenciador de Tarefas",
    title: "Taskboard",
    description: "Gerenciador de tarefas diárias voltado para estudo, trabalho e organização pessoal. Backend em Java 25 com Spring Boot 4, Spring Data JPA, Hibernate 7 e H2 Database. Frontend em React 18 com TypeScript, Vite, Axios, React Router v6 e CSS puro. Documentação via Swagger/OpenAPI 3.",
    tech: ["Java", "React", "TypeScript", "Axios", "CSS", "H2 Database"],
    image: "img/taskboard.webp"
  },
  {
    id: 5,
    tag: "Agência de Viagens",
    title: "Trip Brasil",
    description: "Website de agência de viagens especializado em destinos brasileiros.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "img/tripbrasil.webp"
  },
  {
    id: 6,
    tag: "Biblioteca de Programação",
    title: "Biblioteca Online",
    description: "Aplicação web para acessar e pesquisar livros de programação. Carrega automaticamente livros do diretório e gera metadados. Foco em democratizar o acesso ao conhecimento técnico.",
    tech: ["Python", "JavaScript", "JSON", "HTML/CSS"],
    image: "img/bibliotecadelivros.webp"
  },
  {
    id: 7,
    tag: "Hospedagem de Sites",
    title: "Host Site",
    description: "Serviço de hospedagem de sites. Permite visualizar planos e recursos. Proposta de permitir que qualquer pessoa coloque seu site no ar com poucos cliques.",
    tech: ["HTML5", "CSS3"],
    image: "img/hostsite.webp"
  },
  {
    id: 8,
    tag: "Site Space-X",
    title: "Landing Page SpaceX",
    description: "Landing page inspirada na SpaceX. O projeto apresenta um layout responsivo e com efeitos visuais ao passar o mouse nos elementos, destacando seções com as informações dos últimos eventos da empresa, missões e foguetes lançados.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "img/space-x.webp"
  },
  {
    id: 9,
    tag: "Cafeteria",
    title: "Cafeteria Ctrl+Coffee",
    description: "Aplicação completa para uma cafeteria, oferecendo funcionalidades como exibição de cardápio, carrinho de compras, contato e finalização de pedidos. Foco em usabilidade e minimalismo.",
    tech: ["Node.js", "Express", "Nodemailer", "JS", "HTML/CSS"],
    image: "img/frontcoffee.webp"
  },
  {
    id: 10,
    tag: "Java Desktop",
    title: "Gestão de Clientes",
    description: "Sistema desktop com autenticação, criptografia e banco SQLite. Conta com filtros de busca, backup e geração de relatórios (JasperReports). A interface é a clássica do Java, focada em funcionalidade.",
    tech: ["Java", "Swing", "SQLite", "JDBC", "MVC"],
    image: "img/cadastro.webp"
  },
  {
    id: 11,
    tag: "Pokédex",
    title: "Consulta de Pokémons",
    description: "Aplicação responsiva que consome a PokéAPI via requisições assíncronas para renderizar cards dinâmicos. Implementa paginação, filtragem por tipos e busca eficiente.",
    tech: ["JavaScript", "Fetch API", "HTML5", "CSS3"],
    image: "img/pokedex.webp"
  },
  {
    id: 12,
    tag: "Animação",
    title: "Sistema Solar",
    description: "Simulação visual dos planetas orbitando o Sol, incluindo a Lua e a Terra. As órbitas são traçadas com efeitos de rotação e velocidades proporcionais ao tempo orbital real.",
    tech: ["CSS", "HTML5", "Frontend"],
    image: "img/sistemasolar.webp"
  },
  {
    id: 13,
    tag: "Jogo da memória",
    title: "Memory Game Rick & Morty",
    description: "Jogo de memória temático desafiando usuários a encontrar pares de cartas dos personagens da série. Experiência divertida e interativa para testar a memória.",
    tech: ["JavaScript", "HTML", "CSS3"],
    image: "img/jogodamemoria.webp"
  }
];