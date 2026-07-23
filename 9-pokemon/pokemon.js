const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function(){
    const url = JSON.parse(this.responseText)['abilities'][0]['ability']['url'];
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('load', function(){
        console.log(JSON.parse(this.responseText)['effect_entries'].find((o) => o.language.name == 'en')['effect'])
    })
}
)

