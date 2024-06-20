async function fetchAsync () {
  let a = await fetch('https://tikguarddatabase-minhvyhas-projects.vercel.app/addReport', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        id: '123123123',
        result:'asdf asdf'
    }),
    });
let b = await a.json();
console.log(b);
}
fetchAsync();