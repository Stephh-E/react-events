import React from "react";

class PokemonCard extends React.Component {
    constructor(){
        super();

        this.state = {
            pokemonName: "",
            pokemonImage: ""
        }
    }

    async componentDidMount(){

    }

}


render(){
    return(
        <div lassName="pokemonCard">
            {this.state.pokemonName ?
            <>
                <h1> {this.state.pokemonName}</h1>
            </>
            :
            <ha> Loading...</ha>
            
            }


        </div>
    )


}