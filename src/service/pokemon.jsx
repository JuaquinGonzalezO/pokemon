const api_key ='UAvo5IVRBGc1bqNGd6aaSnkTUSG198IV'


export const reqPokemon = async (nombre) =>{
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}/`)
        const data  = await resp.json()
        const pokemons =({
        img : data.sprites.other.showdown.front_default,
        peso: data.weight,
        altura: data.height,

       })

       return (pokemons
       )
    } catch (err) {
        console.error(err)
    }
   
}
