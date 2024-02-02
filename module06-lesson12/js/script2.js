let form = document.getElementById("loginForm");
form.addEventListener("submit", (event) => {
    event.preventDefault(); //it prevents the default behavior of a form when submitted / the page would not reload.

    console.log(event.target); //<form>
    console.log(event.currentTarget); //<form>

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let user = {
        username: "johndoe123",
        password: "qweqweqwe",
    };

    if (username === user.username && password === user.password) {
        console.log("Login Successfully");
    } else {
        console.log("Invalid Credentials");
    }
    form.reset();
});
