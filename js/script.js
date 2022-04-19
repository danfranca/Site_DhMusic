function ValidarFormulario() {
    var username = document.getElementById("nome-usuario");
    var password = document.getElementById("senha");
  
    if (username.value == "admin@admin.com" && password.value == "admin") {
      localStorage.setItem("acesso", true);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Bem vindo. Usuário autenticado! ",
        showConfirmButton: false,
        timer: 1500,
      });
  
      window.location.href = "usuario.html";
    } else {
      Swal.fire("Algo de errado!", "Usuário ou senha inválidos!", "warning");
    }
  }
  