import Pokemon from "./Pokemon.js";

const pokemon = new Pokemon("Ditto", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png", $(".pokemonok"))
const pokemon2 = new Pokemon("Meowth", "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/52.ogg", $(".pokemonok"))

pokemon.beszel()

console.log(pokemon.nev)
console.log(pokemon.mondat)
pokemon.harciero = 2
delete pokemon.nev
console.log(pokemon)

//pokemon.nev = "Roland"
pokemon.mondat = "Szép napunk van"
pokemon.beszel()