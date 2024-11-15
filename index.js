//criar promises 
const myPromise = new Promise((resolve, reject) => {
    const nome = "João";

    if (nome === "João"){
        resolve('Usuário encontrado.');
    } else {
        reject('Usuário não encontrado.');
    }
})

myPromise.then((data) => {
    console.log(data)
}) .catch((error) =>{
    console.log(`ERRO:: ${error}`)
})

//encadeamento de .then's
myPromise.then((data) => {
    return data.toUpperCase()
}).then((stringModified) => {
    console.log(stringModified)
})

//resolvendo várias promises em 'race' - a partir da primeira que for resolvida
const p1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log('P1 ok! Timeout');
    }, 2000)
}) 

const p2 = new Promise ((resolve, reject) => {
    console.log('P2 ok!')
})

const p3 = new Promise ((resolve, reject) => {
    console.log('P3 ok!')
})

const resolveRace = Promise.race([p1, p2,p3]).then((data) => {
    console.log(data)
});  

//fetch API - API do GitHub 
const userName = 'Maria Clara';

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json'  
    }
}).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data.name)
}).catch((error) => {
    console.log(error)
})

const baseUrl = 'https://dattebayo-api.onrender.com';
const collectionName = 'characters';


fetch(`${baseUrl}/${collectionName}`, {
    method: 'GET',
    headers: {
        Accept: 'https://dattebayo-api.onrender.v3+json'
    }
}).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})