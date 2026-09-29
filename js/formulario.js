export function inicializarFormulario() {
    document.addEventListener("submit", (e) => {
        const form = e.target.closest("form");
        if (!form) return;

        e.preventDefault();

        const alerta = document.getElementById("alerta-form");
        
        if (form.checkValidity()) {
            if (alerta) alerta.style.display = "none";
          
            const formData = new FormData(form);
            const novoCadastro = Object.fromEntries(formData.entries());
            const cadastrosSalvos = JSON.parse(localStorage.getItem('comunidagro_cadastros')) || [];
            
            cadastrosSalvos.push(novoCadastro);
            localStorage.setItem('comunidagro_cadastros', JSON.stringify(cadastrosSalvos));
            console.log("Cadastros atuais na memória:", cadastrosSalvos);
            
            const toastToggle = document.getElementById("toast-toggle");
            if (toastToggle) {
                toastToggle.checked = true; 
                form.reset(); 

                setTimeout(() => {
                    toastToggle.checked = false;
                }, 4000);
            }
        } else {
            if (alerta) {
                alerta.style.display = "block";
                alerta.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });

    document.addEventListener("input", (e) => {
        const alvo = e.target;

        if (alvo.id === "cpf") {
            let valor = alvo.value.replace(/\D/g, ""); 
            
            if (valor.length > 3) valor = valor.replace(/^(\d{3})(\d)/, "$1.$2");
            if (valor.length > 6) valor = valor.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
            if (valor.length > 9) valor = valor.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
            
            alvo.value = valor.substring(0, 14); 
        }

        if (alvo.id === "cep") {
            let valor = alvo.value.replace(/\D/g, "");
            if (valor.length > 5) valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");
            alvo.value = valor.substring(0, 9);
        }
    });
}