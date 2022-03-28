const fetchPokemon = () => {
    const pokeName = document.getElementById('pokeName')
    const pokeNamevalor = pokeName.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeNamevalor.toLowerCase()}`
    fetch(url)
    .then((res)=>{
        if(res.status != 200){
            cambioImg("img/error.png")
        }else{
            return res.json();
        }
    }).then((dato)=>{
        const pokeImg = dato.sprites.front_default;
        const datoTipoPokemon = dato.types[0].type.name;
        const estadisticas = [] = dato.stats;
        const movimientos = [] = dato.moves;
        const height = dato.height
        const weight = dato.weight
        alturaypeso(height,weight)
        moves(movimientos);
        stats(estadisticas);
        tipo(datoTipoPokemon);
        cambioImg(pokeImg);
    }) 
}

const cambioImg = (valorImg)=>{
    const pokeImg = document.getElementById('pokeImg')
    pokeImg.src = valorImg;
}
const tipo = (datoTipoPokemon) =>{
    const tipo = document.getElementById('tipo')
    tipo.textContent = datoTipoPokemon;
}

const stats = (estadisticas) =>{
    const hp = document.getElementById('hp')
    const attack = document.getElementById('attack')
    const defense = document.getElementById('defense')
    const special_attack = document.getElementById('special_attack')
    const special_defense = document.getElementById('special_defense')
    const speed = document.getElementById('speed')

    hp.textContent = estadisticas[0].base_stat;
    attack.textContent = estadisticas[1].base_stat;
    defense.textContent = estadisticas[2].base_stat;
    special_attack.textContent = estadisticas[3].base_stat;
    special_defense.textContent = estadisticas[4].base_stat;
    speed.textContent = estadisticas[5].base_stat;
}
const moves = (movimientos) =>{
    const datos = movimientos.slice(0,6);

    const moves = document.getElementById('move')
    const moves2 = document.getElementById('move1')
    const moves3 = document.getElementById('move2')
    const moves4 = document.getElementById('move3')
    const moves5 = document.getElementById('move4')
    const moves6 = document.getElementById('move5')
    
    moves.textContent = datos[0].move.name;
    moves2.textContent = datos[1].move.name;
    moves3.textContent = datos[2].move.name;
    moves4.textContent = datos[3].move.name;
    moves5.textContent = datos[4].move.name;
    moves6.textContent = datos[5].move.name;    
}

const alturaypeso = (altura, peso) =>{
    const a= document.getElementById('altura')
    const p = document.getElementById('peso')

    a.textContent = altura;
    p.textContent = peso;
}
//fetchPokemon();