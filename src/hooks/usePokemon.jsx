import { useState } from "react"
import { reqPokemon } from "../service/pokemon"

export const usePokemon = () => {


    const [pokemons, setPokemons] = useState([])
    const [nombrePokemon, setNombrePokemon] = useState('')
  
    const handleGetPokemon = (e,nombre) =>{
        e.preventDefault()

    reqPokemon(nombre).then((pokemons)=>{
        setPokemons(pokemons )
        })
     setNombrePokemon(nombre)
   }
   /*retorno de hook*/
   return{
    handleGetPokemon,
    pokemons,
    nombrePokemon
   }
}