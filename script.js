//declarando a constante display com base no id display
const display = document.querySelector("#display");
//declarando a constante buttons com base na tag button
const buttons = document.querySelectorAll("button");

//função para o clique nos botoes
buttons.forEach((item) => {
    item.onclick = () => {
        //se o item item.id for igual a clear
        if (item.id == "clear") {
            //limpar o display
            display.innerText = "";
            //se o item id for igual a barra de espaço
        } else if (item.id == "backspace") {
            //criamos uma variavel string que recebe todo conteudo do display e transforma em string
            let string = display.innerText.toString();
            //então ele tira um elemento dessa string
            display.innerText = string.substr(0, string.length - 1);
            //se o display for diferente de vazio e o clicado igual
        } else if (display.innerText != "" && item.id == "equal") {
            //ele realiza todas as operações através do Eval
            display.innerText = eval(display.innerText);
            //se o display estiver vazio e for clicado em igual
        } else if (display.innerText == "" && item.id == "equal") {
            //colocar no display 'vazio'
            display.innerText = "Vazio!";
            //fazemos um settimeout com uma arrow function com o parâmetro do display vazia, com um delay de 2 segundos
            setTimeout(() => (display.innerText = ""), 2000);
        } else {
            //se não display vai ser igual a item.id + item.id
            display.innerText += item.id;
        }
    };
});


//declarando a themeToggleBtn com base na classe .theme-toggle
const themeToggleBtn = document.querySelector(".theme-toggle");
//declarando a calculator com base na classe .calculator
const calculator = document.querySelector(".calculator");
//declarando a toggleIcon com base na classe .toggle-icon
const toggleIcon = document.querySelector(".toggle-icon");

// variavel isDark é verdadeira
let isDark = true;
//quando for clicado no themeToggleBtn
themeToggleBtn.onclick = () => {
    //ele colocar o toggle dark através do classList
    calculator.classList.toggle("dark");
    //e deixa ativo
    themeToggleBtn.classList.toggle("active");
    //se o tema for dark ele inverte e deixa claro
    isDark = !isDark;
};