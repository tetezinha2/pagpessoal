const defaultConfig = {
    main_title: "Estefany Lauryn",
    about_content: "Olá! Sou a Estefany Lauryn e esta é minha página pessoal. Aqui você pode conhecer um pouco mais sobre mim, minha jornada acadêmica e as pessoas especiais da minha vida.",
    course_content: "Estou dedicada aos meus estudos e sempre em busca de novos conhecimentos. Meu curso tem sido uma jornada incrível de aprendizado e crescimento pessoal.",
    friends_content: "Tenho a sorte de ter amigos maravilhosos que tornam minha vida mais alegre e colorida. Cada um deles é especial e contribui de forma única para minha jornada.",
    family_content: "Minha família é minha base e meu porto seguro. São eles que me apoiam em todos os momentos e me inspiram a ser uma pessoa melhor a cada dia."
};

/**
 * Mostra a seção de conteúdo selecionada e atualiza o botão ativo.
 * @param {string} sectionId - O ID da seção a ser exibida.
 */
function showSection(sectionId) {
    // Remove a classe 'active' de todas as seções e botões
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.nav-button').forEach(button => {
        button.classList.remove('active');
    });

    // Adiciona a classe 'active' à seção selecionada
    document.getElementById(sectionId).classList.add('active');
    
    // Encontra o botão que acionou o evento (usando event.target, que deve ser passado)
    // No seu HTML original, 'event' é uma variável global implícita. 
    // Em um ambiente de produção moderno, é melhor passar 'this' para a função.
    // Como o JS original usava 'event', mantenho a estrutura, mas o botão 
    // ativo é definido pelo evento do clique.
    // Aqui estou assumindo que esta função é chamada via 'onclick' em um botão.
    // Uma implementação mais robusta seria:
    const clickedButton = document.querySelector(`.nav-button[onclick*="${sectionId}"]`);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}

async function onConfigChange(config) {
    const mainTitle = config.main_title || defaultConfig.main_title;
    const aboutContent = config.about_content || defaultConfig.about_content;
    const courseContent = config.course_content || defaultConfig.course_content;
    const friendsContent = config.friends_content || defaultConfig.friends_content;
    const familyContent = config.family_content || defaultConfig.family_content;

    document.getElementById('mainTitle').textContent = mainTitle;
    document.getElementById('aboutContent').textContent = aboutContent;
    document.getElementById('courseContent').textContent = courseContent;
    document.getElementById('friendsContent').textContent = friendsContent;
    document.getElementById('familyContent').textContent = familyContent;
}

function mapToCapabilities(config) {
    return {
        recolorables: [],
        borderables: [],
        fontEditable: undefined,
        fontSizeable: undefined
    };
}

function mapToEditPanelValues(config) {
    return new Map([
        ["main_title", config.main_title || defaultConfig.main_title],
        ["about_content", config.about_content || defaultConfig.about_content],
        ["course_content", config.course_content || defaultConfig.course_content],
        ["friends_content", config.friends_content || defaultConfig.friends_content],
        ["family_content", config.family_content || defaultConfig.family_content]
    ]);
}

// Inicializa o SDK (mantido para compatibilidade com o código original)
if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
    });
}