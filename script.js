

// Todos os textos traduzidos para EN e PT
const texts = {
    en: {
        aboutTitle: "About Me",
        aboutText:
            "I am a Flutter developer with over 7 years of experience, passionate about turning ideas into impactful, real solutions. Throughout my career, I have delivered high-performance, scalable projects for companies like Vivo, Prodesp, Poupatempo, GrooveTech, and Ciclic. Through my registered companies, I also work globally with clients in the USA, Europe, Brazil, and other international markets.",
        successTitle: "Success Cases",
        successCards: [
            {
                title: "📱 Poupatempo App",
                text: "App with over 10 million downloads that unifies public services for the São Paulo state. Responsible for Flutter architecture, robust security, efficient REST API integration, and user experience optimization for high scalability."
            },
            {
                title: "🏫 Classroom of the Future",
                text: "Educational app with over 1 million downloads connecting students, parents, and teachers for collaborative learning. Implemented Flutter and native code (Kotlin/Swift) features ensuring smooth integration. Used Firebase services for performance and monitoring."
            },
            {
                title: "🧪 TestPhone App",
                text: "Innovative tool for smart mobile device evaluation, using native Kotlin (Android) and Swift (iOS) for precise camera, audio, and screen diagnostics. Developed and optimized app performance with CI/CD integration."
            },
            {
                title: "🔒 Sentinel (Vivo)",
                text: "Corporate security app that detects physical intrusions, captures photos, videos, and sounds, collects Bluetooth and network data, and allows real-time remote monitoring. Implemented socket communication for immediate, personalized actions."
            },
            {
                title: "🛡️ Ciclic Insurance",
                text: "Insurance app with native purchase journey integrating various products like travel, pet, and mobile insurance. Developed in Flutter with Firebase, focusing on usability, security, and agile implementation."
            }
        ],
        businessTitle: "Partnership to Innovate",
        businessText: "I am open to collaborate on new product development and turning your ideas into reality. I can work directly as your technology partner or, if preferred, my company and specialized team can handle full app development. I also offer qualified technical professionals to join your team, ensuring expertise in every required position.",
        skillsTitle: "Technical Skills",
        collaborationTitle: "Collaboration History",
        contactTitle: "Contact",
        footerText: "© 2025 João Vitor Constâncio. All rights reserved.",
        heroDescription: "Senior Flutter Developer | Senior Mobile Engineer<br />7+ years of experience | Projects with millions of users",
    },
    pt: {
        aboutTitle: "Sobre Mim",
        aboutText:
            "Sou um desenvolvedor Flutter com mais de 7 anos de experiência, apaixonado por transformar ideias em soluções reais e impactantes. Ao longo da minha carreira, entreguei projetos de alta performance e escalabilidade para empresas como Vivo, Prodesp, Poupatempo, GrooveTech e Ciclic. Além disso, através das minhas empresas registradas, posso trabalhar globalmente para clientes dos EUA, Europa, Brasil e outros mercados internacionais.",
        successTitle: "Casos de Sucesso",
        successCards: [
            {
                title: "📱 Poupatempo App",
                text: "Aplicativo com mais de 10 milhões de downloads que unifica serviços públicos do estado de São Paulo. Responsável pela arquitetura em Flutter, segurança robusta, integração eficiente com APIs REST e otimização da experiência do usuário para alta escalabilidade."
            },
            {
                title: "🏫 Sala do Futuro",
                text: "App educativo com mais de 1 milhão de downloads que conecta estudantes, pais e professores para colaboração no aprendizado. Responsável por implementar funcionalidades em Flutter e código nativo (Kotlin/Swift) garantindo integração fluida. Utilizou Firebase para performance e monitoramento."
            },
            {
                title: "🧪 Testefone App",
                text: "Ferramenta inovadora para avaliação inteligente de dispositivos móveis, utilizando código nativo Kotlin (Android) e Swift (iOS) para diagnósticos precisos de câmera, áudio e tela. Atuei no desenvolvimento e otimização do app com integração CI/CD."
            },
            {
                title: "🔒 Sentinela (Vivo)",
                text: "Aplicativo de segurança corporativa que detecta invasões físicas, realiza captura de fotos, vídeos e sons, coleta dados de Bluetooth e rede, e permite monitoramento remoto em tempo real. Implementado com comunicação via sockets para ações imediatas e personalizadas."
            },
            {
                title: "🛡️ Ciclic Insurance",
                text: "App de seguros com jornada de compra nativa, integrando produtos variados como seguro viagem, pet e celular. Desenvolvido em Flutter com Firebase, focado em usabilidade, segurança e implementação ágil."
            }
        ],
        businessTitle: "Parceria para Inovar",
        businessText: "Estou aberto a colaborar para desenvolver novos produtos e transformar suas ideias em realidade. Posso atuar diretamente como seu parceiro de tecnologia ou, se preferir, minha empresa e equipe especializada podem assumir o desenvolvimento completo do seu aplicativo. Também ofereço a possibilidade de alocar profissionais técnicos qualificados para integrar seu time, garantindo expertise em cada posição necessária.",
        skillsTitle: "Habilidades Técnicas",
        collaborationTitle: "Histórico de Colaboração",
        contactTitle: "Contato",
        footerText: "© 2025 João Vitor Constâncio. Todos os direitos reservados.",
        heroDescription: "Desenvolvedor Flutter Sênior | Engenheiro Mobile Sênior<br />7+ anos de experiência | Projetos com milhões de usuários",

    }
};

// Função para trocar textos no HTML
function updateTexts(lang) {
    document.querySelector('.about h2').textContent = texts[lang].aboutTitle;
    document.querySelector('.about p').textContent = texts[lang].aboutText;

    document.querySelector('.success-cases h2').textContent = texts[lang].successTitle;

    // Atualizar cards de sucesso
    const cards = document.querySelectorAll('.success-cases .card');
    cards.forEach((card, i) => {
        card.querySelector('h3').textContent = texts[lang].successCards[i].title;
        card.querySelector('p').textContent = texts[lang].successCards[i].text;
    });

    document.querySelector('.business h2').textContent = texts[lang].businessTitle;
    document.querySelector('.business p').textContent = texts[lang].businessText;

    document.querySelector('.skills h2').textContent = texts[lang].skillsTitle;

    document.querySelector('.companies h2').textContent = texts[lang].collaborationTitle;

    document.querySelector('#contact h2').textContent = texts[lang].contactTitle;

    document.querySelector('footer p').textContent = texts[lang].footerText;
    document.getElementById('hero-description').innerHTML = texts[lang].heroDescription;

}
// === Tema escuro como padrão ===
const switchToggle = document.getElementById('theme-switch');
const langSwitch = document.getElementById('language-switch');

// Recuperar tema salvo
let currentTheme = localStorage.getItem('theme');

if (!currentTheme) {
    currentTheme = 'dark'; // Padrão
    localStorage.setItem('theme', 'dark');
}

if (currentTheme === 'dark') {
    document.body.classList.add('dark');
    switchToggle.checked = true;
} else {
    document.body.classList.remove('dark');
    switchToggle.checked = false;
}

// Evento para alternar tema
switchToggle.addEventListener('change', () => {
    if (switchToggle.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
});


langSwitch.addEventListener('change', () => {
    const selectedLang = langSwitch.value;
    updateTexts(selectedLang);
    localStorage.setItem('lang', selectedLang);
});
