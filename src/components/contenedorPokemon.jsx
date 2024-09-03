export const ContenedorPokemon = ({pokemons, nombrePokemon}) =>{
    return(

        <>
        <div className="d-flex flex-row justify-content-center alig-items-center row row-cols-2 row-cols-lg- g-2 g-lg-3 mt-2">

        <h1>{nombrePokemon}</h1>
        <img className="m-5  w-25"  src={pokemons.img} alt="image"/>
        </div>
        
        <table class="table">
        <thead class="table-dark"> </thead>
            <h2>tabla del Pokemon</h2>
        <tbody id="pokemonTableBody">
        <p>{"Peso =" + pokemons.peso/10 +"kg"}</p>
            <p>{"Altura = " +pokemons.altura/10 + "m"}</p>
        </tbody>
        </table>

       
       
        </>
    )

}