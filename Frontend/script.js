// document.getElementById("registerForm").addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     const response = await fetch("http://localhost:5000/register", {
//         method: "POST",
//         headers: { "Content-type": "application/json"},
//         body: JSON.stringify({ name, email, password }),
//     });

//     const data = await response.json();
//     document.getElementById("message").textContent = data.error || "Registro feito!"
// })

// document.getElementById("loginForm").addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const email = document.getElementById("loginEmail").value;
//     const password = document.getElementById("loginPassword").value;

//     const response = await fetch("http://localhost:5000/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//     });

//     const data = await response.json();

//     if(data.token){
//         localStorage.setItem("token", data.token);
//         document.getElementById("message").textContent = "Logado com sucesso!";
//     } else {
//         document.getElementById("message").textContent = data.error;
//     }
// });