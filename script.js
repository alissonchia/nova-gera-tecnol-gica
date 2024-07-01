const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está navegando na internet quando se depara com um anúncio de um novo dispositivo tecnológico incrível: um assistente virtual super avançado. Ele promete não apenas responder todas as suas dúvidas, mas também criar imagens e áudios extremamente realistas para facilitar o entendimento. Qual é a sua primeira reação diante dessa inovação?",
        alternativas: [
            " Sinto-me fascinado pela ideia de ter acesso a um assistente tão poderoso. Decido experimentá-lo imediatamente para ver como ele pode me auxiliar em diferentes áreas do conhecimento",
            " Embora a tecnologia pareça impressionante, prefiro confiar na minha capacidade de pesquisa tradicional e no diálogo com amigos e especialistas para obter informações e realizar meus projetos."
        ]
    },
    {
        enunciado: "Após decidir experimentar o assistente virtual, você começa a interagir com ele. Ele responde suas perguntas de forma clara e objetiva, além de criar representações visuais e sonoras que parecem incrivelmente reais. Como você pretende aproveitar ao máximo essa nova ferramenta?",
        alternativas: [
            " Utilizo o assistente para aprender sobre temas complexos de maneira mais dinâmica e eficiente, aproveitando sua capacidade de explicar conceitos de forma visual e auditiva.",
            "Embora reconheça a utilidade do assistente, prefiro usá-lo apenas ocasionalmente, mantendo meu método tradicional de estudo e pesquisa como principal fonte de aprendizado.",
        ]
    },
    {
        enunciado: "Depois de algum tempo usando o assistente virtual, você percebe as mudanças que essa tecnologia trouxe para sua vida. Como você avalia o impacto desse avanço tecnológico em sua rotina diária e na forma como você adquire conhecimento?",
        alternativas: [
            " Aprecio a praticidade e eficiência que o assistente virtual trouxe para minha vida, facilitando meu aprendizado e aumentando minha produtividade em projetos e estudos. Aprecio a praticidade e eficiência que o assistente virtual trouxe para minha vida, facilitando meu aprendizado e aumentando minha produtividade em projetos e estudos.",
            "Embora reconheça os benefícios, sinto que a tecnologia pode limitar minha habilidade de aprender de forma independente e crítica, então busco equilibrar seu uso com métodos mais tradicionais."
        ]
    },
    {
        enunciado: "À medida que a tecnologia continua avançando rapidamente, você considera como isso pode impactar seu futuro e suas decisões pessoais. Como você planeja integrar ou adaptar-se às novas inovações tecnológicas que surgirem?",
        alternativas: [
            "Estou empolgado para ver como novas tecnologias como essa podem continuar a transformar minha vida e estou aberto a explorar novas possibilidades conforme elas surgem.",
            "Embora seja fascinante, prefiro adotar uma abordagem mais cautelosa em relação às novas tecnologias, garantindo que elas realmente me agreguem valor antes de integrá-las completamente em minha rotina."
        ]
    },
    {
        enunciado: "Com o passar do tempo, você começa a refletir sobre os impactos mais amplos dessa tecnologia na sociedade e em questões éticas. Como você enxerga esses aspectos e qual é sua posição sobre eles?",
        alternativas: [
           "Acredito que avanços tecnológicos como o assistente virtual podem trazer benefícios significativos para a sociedade, desde que sejam implementados com responsabilidade e consideração pelos aspectos éticos envolvidos.",
            "Tenho preocupações sobre como essa tecnologia pode ser usada de maneiras que prejudiquem a privacidade das pessoas ou perpetuem desigualdades sociais, então procuro estar consciente desses desafios ao explorar suas capacidades."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();