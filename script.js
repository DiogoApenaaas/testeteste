// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
      label.classList.add("required-popup");
    });
  
    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
      label.classList.remove("required-popup");
    });
  }
  
  function estilizarInputCorreto(input, helper) {
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
  }
  
  function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
  }
  
  // ---------- VALIDAÇÃO USERNAME ---------- //
  let usernameInput = document.getElementById("username");
  let usernameLabel = document.querySelector('label[for="username"]');
  let usernameHelper = document.getElementById("username-helper");
  
  togglePopup(usernameInput, usernameLabel);
  
  // Validar valor do input
  usernameInput.addEventListener("change", (e) => {
    let valor = e.target.value;

    if (valor.length < 3 ||  parseInt("username")) 
    {
      // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
      usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
      estilizarInputIncorreto(usernameInput, usernameHelper);
      inputsCorretos.username = false;
    } 
    
    else {
      // Adicionar estilos dinâmicos se o valor estiver correto
      estilizarInputCorreto(usernameInput, usernameHelper);
      inputsCorretos.username = true;
    }
  });
  
  // ---------- VALIDAÇÃO EMAIL ---------- //
  let emailInput = document.getElementById("email");
  let emailLabel = document.querySelector('label[for="email"]');
  let emailHelper = document.getElementById("email-helper");
  
  togglePopup(emailInput, emailLabel);
  
  // Validar valor do input
  emailInput.addEventListener("change", (e) => {
    let valor = e.target.value;
  
    if (valor.includes("@") && valor.includes(".com")) {
      // Adicionar estilos dinâmicos se o valor estiver correto
      estilizarInputCorreto(emailInput, emailHelper);
      inputsCorretos.email = true;
    } else {
      // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
      emailHelper.innerText = "Precisa inserir um email válido";
      estilizarInputIncorreto(emailInput, emailHelper);
      inputsCorretos.email = false;
    }
  });
  
  
  // -------------EVITAR ENVIO DO FORMULÁRIO----------------------//
  let btnSubmit = document.querySelector('button[type="submit"]');
  let inputsCorretos = {
    username: false,
    email: false,
  };
  
  btnSubmit.addEventListener("click", (e) => {
    if (
      inputsCorretos.username == false ||
      inputsCorretos.email == false 
    ) {
      e.preventDefault();
      alert("Os campos obrigatórios precisam ser preechidos corretamente!");
    } else {
      alert("Formulário enviado com sucesso!");
    }
  });