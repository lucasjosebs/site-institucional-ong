const todosProjetos = [
    {
        categoria: "realizados",
        id: "modal-horta",
        status: "Realizado",
        classeBadge: "badge-realizado",
        titulo: "Horta Comunitária Vila Esperança",
        descricao: "Nosso projeto mais emblemático. Construída em um terreno cedido pela prefeitura, ao lado da Escola Municipal Vila Esperança, a horta foi erguida com mãos de familiares de alunos e das próprias crianças da escola e da creche vizinha. Hoje, a horta produz hortaliças e temperos que são utilizados na merenda escolar, além de servir como sala de aula ao ar livre para atividades pedagógicas sobre meio ambiente e alimentação."
    },
    {
        categoria: "realizados",
        id: "modal-oficinas",
        status: "Realizado",
        classeBadge: "badge-realizado",
        titulo: "Oficinas de Manejo de Hortas e Frutíferas",
        descricao: "Realizamos ciclos de oficinas gratuitas voltadas a moradores da comunidade interessados em aprender técnicas de plantio, adubação orgânica, controle natural de pragas e poda. As oficinas acontecem mensalmente e já capacitaram dezenas de famílias, muitas das quais hoje mantêm suas próprias hortas em casa."
    },
    {
        categoria: "realizados",
        id: "modal-capacitacao",
        status: "Realizado",
        classeBadge: "badge-realizado",
        titulo: "Capacitação de Educadores",
        descricao: "Antes de levar a horta para dentro das escolas, capacitamos professores e cuidadores de creches para que possam incorporar o cultivo de alimentos ao currículo pedagógico, unindo aprendizado prático e consciência ambiental."
    },
    {
        categoria: "andamento",
        id: "modal-doacao",
        status: "Em Andamento",
        classeBadge: "badge-andamento",
        titulo: "Programa de Doação de Mudas Frutíferas",
        descricao: "Estamos desenvolvendo um programa de doação de mudas frutíferas para famílias cadastradas, com o objetivo de incentivar o cultivo doméstico e a alimentação saudável. As mudas serão distribuídas em eventos comunitários e acompanhadas por orientações sobre plantio e cuidados."
    },
    {
        categoria: "andamento",
        id: "modal-vasos",
        status: "Em Andamento",
        classeBadge: "badge-andamento",
        titulo: "Programa de Frutíferas em Vasos",
        descricao: "Projeto que orienta famílias com pouco ou nenhum espaço externo a cultivarem árvores frutíferas anãs em vasos, como limão, goiaba e pitanga, dentro de casa ou em pequenas varandas."
    },
    {
        categoria: "futuros",
        id: "modal-trocas",
        status: "Futuro",
        classeBadge: "badge-futuro",
        titulo: "Rede de Trocas Comunitárias",
        descricao: "Um projeto pensado para criar um sistema de troca de mudas, sementes e excedente de colheita entre famílias participantes da rede COMUNIDAGRO."
    },
    {
        categoria: "futuros",
        id: "modal-curso",
        status: "Futuro",
        classeBadge: "badge-futuro",
        titulo: "Curso Online Gratuito sobre Horticultura Urbana",
        descricao: "Estamos desenvolvendo um curso online gratuito que abordará técnicas de horticultura urbana, cultivo em vasos e manejo sustentável, com o intuito de alcançar pessoas de outras regiões interessadas em iniciar suas próprias hortas."
    },
    {
        categoria: "futuros",
        id: "modal-expansao",
        status: "Futuro",
        classeBadge: "badge-futuro",
        titulo: "Expansão das Hortas Comunitárias",
        descricao: "Nosso objetivo é expandir as hortas comunitárias para mais 10 escolas e creches nos próximos 3 anos, levando o aprendizado prático sobre cultivo de alimentos para um número maior de crianças e famílias."
    }
];

export function carregarProjetosDinamicos() {
    const secoes = ['realizados', 'andamento', 'futuros'];
    secoes.forEach(secaoId => {
        const projetosDaSecao = todosProjetos.filter(projeto => projeto.categoria === secaoId);
        if (projetosDaSecao.length === 0) return;
        const htmlGerado = projetosDaSecao.map(projeto => `
            <article>
                <span class="badge ${projeto.classeBadge}">${projeto.status}</span>
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                
                <input type="checkbox" id="${projeto.id}" class="modal-toggle">
                <label for="${projeto.id}" class="btn-saiba-mais">Saiba mais</label>

                <div class="modal-overlay">
                    <div class="modal-conteudo">
                        <label for="${projeto.id}" class="modal-fechar">&times;</label>
                        <h3>${projeto.titulo}</h3>
                        <p>${projeto.descricao}</p>
                    </div>
                </div>
            </article>
        `).join('');
        const tituloSecao = document.getElementById(secaoId);
        if (tituloSecao) {
            tituloSecao.insertAdjacentHTML('afterend', htmlGerado);
        }
    });
}