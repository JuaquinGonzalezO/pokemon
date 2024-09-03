import { usePokemon } from "../hooks/usePokemon"
import { SearchPokemon } from "./SearchPokemon"
import { ContenedorPokemon }from "./contenedorPokemon"

export const PokemonApp = ()=> {
    
    const{handleGetPokemon,pokemons,nombrePokemon} = usePokemon()

    return(
        <>
        {/*porps = una propiedad que entre componentes*/}
        <SearchPokemon handleGetPokemon ={handleGetPokemon}/>
        <ContenedorPokemon pokemons={pokemons} nombrePokemon={nombrePokemon}/>

        </>
      
    )
}