import { inicializarRotas } from './router.js';
import { inicializarFormulario } from './formulario.js';
import { carregarProjetosDinamicos } from './projetos.js';

// 1. Inicializa rotas e interatividade
inicializarRotas();
inicializarFormulario();

// 2. Garante que os projetos carregam
carregarProjetosDinamicos();

// 3. Inicializa o AOS e força o recalculo para os elementos não ficarem invisíveis
if (typeof AOS !== 'undefined') {
    AOS.init({ once: true });
    setTimeout(() => {
        AOS.refresh();
    }, 100);
}
