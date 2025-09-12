document.querySelector("#post").addEventListener("click", () => {
    const message = document.getElementById("userInput").value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method : "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({text: message})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    });
});