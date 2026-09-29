import { carregarProjetosDinamicos } from './projetos.js';

export function inicializarRotas() {
    document.querySelectorAll("nav a").forEach((link) => {
        link.dataset.rotaAbsoluta = link.href;
    });

    history.replaceState({ caminho: location.origin + location.pathname, hash: "" }, "");

    async function renderizarRota(caminho, hash) {
        const resposta = await fetch(caminho);

        if (!resposta.ok) {
            console.error(`Não foi possível carregar ${caminho} (status ${resposta.status})`);
            return;
        }

        const html = await resposta.text();
        const doc = new DOMParser().parseFromString(html, "text/html");
        const novoMain = doc.querySelector("main");
        const main = document.querySelector("main");

        if (!novoMain) {
            console.error(`A página ${caminho} não tem um elemento <main>.`);
            return;
        }

        main.innerHTML = "";
        main.className = novoMain.className;
        main.append(...novoMain.childNodes);
        
        carregarProjetosDinamicos();

        if (typeof AOS !== 'undefined') {
            AOS.init({ once: true });
            setTimeout(() => AOS.refresh(), 100);
        }

        if (hash) document.getElementById(hash)?.scrollIntoView();
    }

    function navegar(hrefAbsoluto) {
        const url = new URL(hrefAbsoluto);
        const caminho = url.origin + url.pathname; 
        const hash = url.hash.slice(1);

        history.pushState({ caminho, hash }, "", hrefAbsoluto);
        renderizarRota(caminho, hash);
    }

    document.addEventListener("click", (e) => {
        const link = e.target.closest("nav a");
        if (!link || !link.dataset.rotaAbsoluta) return;

        e.preventDefault();
        navegar(link.dataset.rotaAbsoluta);
    });

    window.addEventListener("popstate", (e) => {
        const { caminho, hash } = e.state || {};
        if (caminho) renderizarRota(caminho, hash);
    });
}