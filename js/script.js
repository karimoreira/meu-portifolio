document.addEventListener('DOMContentLoaded', () => {

const projectsContainer = document.querySelector('.featured-projetos-box')

if (projectsContainer) {
    const projectsData = [
    {
        tag: "Projeto #Pokédex",
        title: "Lista de Pokémons",
        description: "A Pokédex foi desenvolvida com <strong>HTML5</strong>, <strong>CSS3</strong> e <strong>JavaScript</strong>. É uma aplicação responsiva em desktop, tablet e mobile. A Pokedéx consome a <strong>RESTful PokéAPI</strong> via requisições assíncronas (fetch) para renderizar de forma dinâmica as informações nos cards. Implementei lógica de paginação com todos os pokémons da API, filtragem por tipos de Pokémon, uma busca eficiente e bastante manipulação do DOM.",
        repoLink: "https://github.com/karimoreira/desafio-tecnico/",
        deployLink: "https://desafio-tecnico-peach.vercel.app/pokedex.html",
        imgSrc: "https://raw.githubusercontent.com/karimoreira/desafio-tecnico/refs/heads/master/images/pokedex-lista.png",
        imgAlt: "Imagem da página com a lista de Pokémons",
        customClass: "projeto"
    },
    {
        tag: "Projeto #Cafeteria",
        title: "Cafeteria Ctrl+Coffee",
        description: "O Ctrl+Coffee é uma aplicação completa para uma cafeteria de Aracaju, oferecendo funcionalidades como exibição de cardápio, carrinho de compras, contato e finalização de pedidos. Desenvolvido com foco em usabilidade e minimalismo, proporciona uma experiência real de navegação e interação com uma cafeteria online. Inclui vitrine de cafés, carrinho de compras, formulário para solicitação do pedido, finalização de pedido por e-mail e um formulário para contato. Desenvolvimento com: HTML5, CSS3, JavaScript, Node.js + express.js, Nodemailer e Unsplash.",
        repoLink: "https://github.com/karimoreira/Cafeteria_Ctrl_Coffee",
        deployLink: "https://github.com/karimoreira/Cafeteria_Ctrl_Coffee",
        imgSrc: "img/frontcoffee.png",
        imgAlt: "Imagem da página inicial do projeto Ctrl+Coffee",
        customClass: "projeto"
    },
    {
        tag: "Projeto #Biblioteca",
        title: "Biblioteca de Programação Online",
        description: "Este projeto é uma aplicação web que permite acessar, pesquisar e navegar por uma coleção de livros de programação. A ideia é democratizar o acesso ao conhecimento técnico, disponibilizando materiais em PDF de forma simples e organizada. A aplicação carrega automaticamente os livros disponíveis no diretório, gera um arquivo com os metadados e exibe os livros em uma interface web paginada com busca em tempo real. Tecnologias: HTML5, CSS3, JavaScript, Python 3 e JSON.",
        repoLink: "https://github.com/karimoreira/biblioteca-livros-online",
        deployLink: "https://biblioteca-programacao.vercel.app/",
        deployText: "Biblioteca no ar",
        imgSrc: "img/bibliotecadelivros.png",
        imgAlt: "Imagem da aplicação da Biblioteca de Programação",
        customClass: "projeto"
    },
    {
        tag: "Projeto #Médico",
        title: "Agendamento Médico",
        description: "O desenvolvimento da aplicação Agendei foi uma experiência incrivelmente enriquecedora, que não só ampliou meus conhecimentos técnicos, mas também me proporcionou uma compreensão mais profunda sobre a importância de soluções na área da saúde. Este projeto é dividido em três partes: Agendei API, Agendei Mobile e Agendei Web. Tecnologias que usei para o processo: React + Vite, Expo Go, Postman, SQLite e APIs criadas.",
        repoLink: "https://github.com/karimoreira/Aplicacao-Medica-Agendei",
        imgSrc: "img/criarconta.png",
        imgAlt: "Imagem da aplicação médica",
        customClass: "projeto"
    },
    {
        tag: "Projeto #Java",
        title: "Gestão de Clientes",
        description: "Sistema desktop desenvolvido em Java para gestão de clientes em uma cafeteria. A aplicação oferece funcionalidades de CRUD, além de um sistema de autenticação com tela de login e criptografia de credenciais, garantindo segurança no acesso. Os dados são armazenados em um banco SQLite, utilizando JDBC para a comunicação. Padrão de arquitetura MVC presente promovendo organização, separação de responsabilidades e escalabilidade do código. O sistema também conta com filtros de busca, backup automatizado e geração de relatórios personalizados por meio da biblioteca JasperReports, permitindo a exportação e impressão de dados. A interface foi construída com Java Swing, apresentando o estilo visual clássico das aplicações Java desktop, priorizando clareza e funcionalidade, entregando uma experiência limpa, objetiva e eficiente para o usuário. Tecnologias: Java, Java Swing, SQLite com JDBC, JasperReports, Eclipse IDE, MVC.",
        repoLink: "https://github.com/karimoreira/sistema-java-desktop/",
        imgSrc: "img/cadastro.jpeg",
        imgAlt: "Sistema Java Desktop",
        customClass: "projeto"
    },
    {
        tag: "Projeto #Animação",
        title: "Sistema Solar",
        description: "O Sistema Solar é uma animação web criada para representar visualmente os planetas orbitando o Sol. O projeto simula o movimento orbital de todos os planetas do Sistema Solar, incluindo a nossa Lua orbitando a Terra. As órbitas são traçadas com efeitos de rotação e animação com CSS puro, com tamanhos e cores ajustados para uma boa representação visual de cada velocidade (não em escala física real haha). Cada planeta possui uma velocidade de rotação proporcional ao seu tempo orbital relativo. O objetivo é demonstrar de forma simples e interativa o funcionamento das órbitas planetárias usando recursos do front-end.",
        repoLink: "https://github.com/karimoreira/sistema-solar",
        imgSrc: "img/sistemasolar.png",
        imgAlt: "Imagem do projeto Sistema Solar",
        customClass: "projeto"
    },
    {
        tag: "Projeto #Hospedagem",
        title: "Hospedagem de Sites",
        description: "Este projeto foi desenvolvido para oferecer um serviço de hospedagem de sites de maneira simples e eficiente. A aplicação conta com uma interface intuitiva onde o usuário pode contratar planos, visualizar recursos disponíveis e realizar o gerenciamento do seu site com praticidade. A proposta é permitir que qualquer pessoa possa colocar seu site no ar com poucos cliques, aproveitando estabilidade e escalabilidade.",
        repoLink: "https://github.com/karimoreira/Site_Hospedagem_hDC_host",
        imgSrc: "img/hostsite.png",
        imgAlt: "Imagem do projeto de hospedagem",
        customClass: "projeto"
    },
    {
        tag: "Projeto #Fandom",
        title: "Foundation",
        description: "Este projeto é uma homenagem ao universo de Fundação, obra-prima de Isaac Asimov. Inspirado pela adaptação da Apple TV+, criando um fandom em React com personagens, Império Galáctico e a psico-história de Hari Seldon.",
        repoLink: "https://github.com/karimoreira/foundation-fan",
        imgSrc: "img/personagens-fundacao.png",
        imgAlt: "Fundação imagem",
        customClass: "projeto"
    },
    {
        tag: "Projeto #MemoryGame",
        title: "Memory Game - Rick and Morty",
        description: "O \"Memory Game - Rick and Morty\" é um jogo de memória baseado na Rick and Morty. O jogo desafia os usuários a encontrar pares de cartas correspondentes, usando personagens da série. O jogo oferece uma experiência divertida e interativa enquanto testa a memória dos jogadores.",
        repoLink: "https://github.com/karimoreira/rick-morty-game",
        imgSrc: "img/jogodamemoria.png",
        imgAlt: "Jogo da memória",
        customClass: "projeto"
    }
]

    let fullHTML = `
        <div class="separator">
            <h2 class="projects-title">Alguns dos meus projetos pessoais:</h2>
        </div>
    `;

    const projectsCards = projectsData.map(project => {
        const deployBtn = project.deployLink
            ? `<a href="${project.deployLink}" target="_blank">
                    <span>${project.deployText || 'Deploy da aplicação'}</span>
                </a>`
            : '';

        const cssClass = project.customClass || ''
        return `
            <div class="projeto ${cssClass}">
            <div class="projeto-details-box">
                <div class="projeto-main-info">
                <span>${project.tag}</span>
                <h3>${project.title}</h3>
                <p style="text-align: justify">
                    ${project.description}
                </p>
                <div class="projeto-links">
                    <a href="${project.repoLink}" target="_blank">
                    <img src="img/github.svg" alt="Link para o repositório" />
                    </a>
                    ${deployBtn}
                </div>
                </div>
                <div class="projeto-tools"></div>
            </div>
            <div class="projeto-image-box">
                <a href="${project.deployLink || project.repoLink}" target="_blank" class="projeto-img-link">
                <img src="${project.imgSrc}" alt="${project.imgAlt}" />
                </a>
            </div>
            </div>
        `;
    }).join('')

    projectsContainer.innerHTML = fullHTML + projectsCards;
}


const navToggle = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav-menu')
const body = document.body

body.classList.add('no-transition')
setTimeout(() => {
    body.classList.remove('no-transition')
}, 100)

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active')
        navToggle.classList.toggle('open')
    })
}

if (navMenu) {
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active')
                navToggle.classList.remove('open')
            }
        })
    })
}

let resizeTimer
window.addEventListener('resize', () => {
    body.classList.add('no-transition')
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        body.classList.remove('no-transition')
    }, 250)
})


const contactForm = document.getElementById('contactForm')
const formStatus = document.getElementById('formStatus')

if (contactForm && formStatus) {
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault()

        formStatus.textContent = 'Verificando segurança...'
        formStatus.className = 'form-status';

        if (typeof grecaptcha !== 'undefined' && grecaptcha.ready) {
            try {
                const token = await grecaptcha.execute('6Lfv7EgrAAAAAMJQJ5FGb7eTxnVBP4q4F6BnyvYT', 
                    { action: 
                        'submit_form' 
                    })
                
                const formData = new FormData(contactForm)
                formData.append('g-recaptcha-response', token)

                formStatus.textContent = 'Enviando...'

                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'

                    }
                });

                if (response.ok) {
                    formStatus.textContent = 'Mensagem enviada com sucesso! Em breve entrarei em contato.'
                    formStatus.classList.add('success')
                    contactForm.reset()
                } else {
                    const data = await response.json()
                    if (data.errors) {
                        formStatus.textContent = data.errors.map(error => error.message).join(', ')
                    } else if (data.message) {
                        formStatus.textContent = 'Erro: ' + data.message
                    }
                    else {
                        formStatus.textContent = 'Ocorreu um erro ao enviar a mensagem.'
                    }
                    formStatus.classList.add('error')
                }
            } catch (error) {
                formStatus.textContent = 'Não foi possível enviar. Tente novamente mais tarde.'
                formStatus.classList.add('error')
            }

        } else {
            formStatus.textContent = 'Erro. Por favor, recarregue a página e tente novamente.'
            formStatus.classList.add('error')
        }
    })
}
})