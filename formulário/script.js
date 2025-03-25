let nome = document.querySelector("#nome")
let sobrenome = document.querySelector("#sobrenome")
let nascimento = document.querySelector("#nascimento")
let rg = document.querySelector("#rg")
let cpf = document.querySelector("#cpf")
let rua = document.querySelector("#rua")
let bairro = document.querySelector("#bairro")
let estado = document.querySelector("#estado")
let cidade = document.querySelector("#cidade")
let cep = document.querySelector("#cep")
let email = document.querySelector("#email")
let imgPerfil = document.querySelector("#imgPerfil")
let login = document.querySelector("#login")
let senha = document.querySelector("#senha")
let confirmeSenha = document.querySelector("#confirmeSenha")
let serie = document.querySelector("#serie")
let sexoMasculino = document.querySelector("#masculino")
let sexoFeminino = document.querySelector("#feminino")
let sexoNaoDizer = document.querySelector("#prefironaodizer")
let internet = document.querySelector("#internet")
let celular = document.querySelector("#celular")
let notebook = document.querySelector("#notebook")
let computador = document.querySelector("#computador")
let corBackground = document.querySelector("#corBackground")
let corFonte = document.querySelector("#corFonte")
let mensagem = document.querySelector("#mensagem")
let aniversario = document.querySelector("#aniversario")
let data = document.querySelector("#data")
let mes = document.querySelector("#mes")
let semana = document.querySelector("#semana")
let umnumerointeiro = document.querySelector("#umnumerointeiro")
let numeroentre7_14 = document.querySelector("#numeroentre7_14")
let homepage = document.querySelector("#homepage")
let botaoEnviar = document.querySelector("#botaoEnviar")

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '')
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false
    }
    let soma = 0
    let resto
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (11 - i)
    }
    resto = (soma * 10) % 11
    if (resto === 10 || resto === 11) resto = 0
    if (resto !== parseInt(cpf.charAt(9))) return false
    soma = 0
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (12 - i)
    }
    resto = (soma * 10) % 11
    if (resto === 10 || resto === 11) resto = 0
    if (resto !== parseInt(cpf.charAt(10))) return false
    return true
}

function validarCEP(cep) {
    return /^\d{8}$/.test(cep)
}

function validarSenhas(senha, confirmeSenha) {
    if (senha !== confirmeSenha) {
        return "As senhas não coincidem."
    }
    return null
}

function validarSexo() {
    return sexoMasculino.checked || sexoFeminino.checked || sexoNaoDizer.checked
}

function validarRecursos() {
    return internet.checked || celular.checked || notebook.checked || computador.checked
}

document.addEventListener("click", (e) => {
    elemento = e.target
    if (elemento === botaoEnviar) {
        e.preventDefault()
        let erros = []
        if (!nome.value.trim()) {
            erros.push("O campo Nome é obrigatório.")
        }
        if (!sobrenome.value.trim()) {
            erros.push("O campo Sobrenome é obrigatório.")
        }
        if (!nascimento.value) {
            erros.push("O campo Nascimento é obrigatório.")
        }
        if (!rg.value.trim()) {
            erros.push("O campo RG é obrigatório.")
        } else if (!/^\d{6,9}$/.test(rg.value)) {
            erros.push("O campo RG deve conter entre 6 e 9 dígitos.")
        }
        if (!cpf.value.trim()) {
            erros.push("O campo CPF é obrigatório.")
        } else if (!validarCPF(cpf.value)) {
            erros.push("O CPF informado é inválido.")
        }
        if (!rua.value.trim()) {
            erros.push("O campo Rua é obrigatório.")
        }
        if (!bairro.value.trim()) {
            erros.push("O campo Bairro é obrigatório.")
        }
        if (!estado.value.trim()) {
            erros.push("O campo Estado é obrigatório.")
        }
        if (!cidade.value.trim()) {
            erros.push("O campo Cidade é obrigatório.")
        }
        if (!cep.value.trim()) {
            erros.push("O campo CEP é obrigatório.")
        } else if (!validarCEP(cep.value)) {
            erros.push("O campo CEP deve conter 8 dígitos.")
        }
        if (!email.value.trim()) {
            erros.push("O campo Email é obrigatório.")
        } else if (!/\S+@\S+\.\S+/.test(email.value)) {
            erros.push("O Email informado é inválido.")
        }
        if (!login.value.trim()) {
            erros.push("O campo Login de usuário é obrigatório.")
        }
        if (!senha.value.trim()) {
            erros.push("O campo Senha é obrigatório.")
        }
        if (!confirmeSenha.value.trim()) {
            erros.push("O campo Confirme a senha é obrigatório.")
        }
        let senhaErro = validarSenhas(senha.value, confirmeSenha.value)
        if (senhaErro) {
            erros.push(senhaErro)
        }
        if (!serie.value.trim()) {
            erros.push("O campo Série favorita é obrigatório.")
        }
        if (!validarSexo()) {
            erros.push("O campo Sexo é obrigatório.")
        }
        if (!validarRecursos()) {
            erros.push("Selecione pelo menos um recurso disponível em casa.")
        }
        if (!corBackground.value) {
            erros.push("O campo Cor de fundo é obrigatório.")
        }
        if (!corFonte.value) {
            erros.push("O campo Cor de fonte é obrigatório.")
        }
        if (!mensagem.value.trim()) {
            erros.push("O campo Mensagem é obrigatório.")
        }
        if (!aniversario.value) {
            erros.push("O campo Aniversário é obrigatório.")
        }
        if (!data.value) {
            erros.push("O campo Data é obrigatório.")
        }
        if (!mes.value) {
            erros.push("O campo Mês e ano é obrigatório.")
        }
        if (!semana.value) {
            erros.push("O campo Semana é obrigatório.")
        }
        if (!umnumerointeiro.value) {
            erros.push("O campo Número inteiro é obrigatório.")
        }
        if (!numeroentre7_14.value) {
            erros.push("O campo Número entre 7 e 14 é obrigatório.")
        }
        if (!homepage.value.trim()) {
            erros.push("O campo Homepage é obrigatório.")
        }
        if (erros.length > 0) {
            alert("Erros encontrados:\n" + erros.join("\n"))
        } else {
            alert("Formulário enviado com sucesso!")
        }
    }
})