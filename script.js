let joke = document.getElementById('jokeDisplay');
let btn = document.getElementById('jokeBtn');
btn.addEventListener('click', generateJoke);
generateJoke();

async function generateJoke(){  
    const res = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
    const data = await res.json();
    joke.innerHTML = data.joke;
}





//second API for jokes

// async function generateJoke(){
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     const res = await fetch('https://icanhazdadjoke.com/', config);
//     const data = await res.json();
//     joke.innerHTML = data.joke;
// }   