//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    loadData() {
        let self = this
        let randomPokeID = Math.floor(Math.random() * 1000) + 1; // random integer from 1 to 1000
        
        // Get User Information From RandomUser API: 
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/',
            success: async function (dataResult) {
                 self.data.firstName = dataResult.results[0].name.first
                 self.data.lastName = dataResult.results[0].name.last
                 self.data.city = dataResult.results[0].location.city
                 self.data.picture = dataResult.results[0].picture.medium
            }
        })

       // Get Favorite Quote From Kanye API: 
       $.ajax({
        method: "GET",
        url: 'https://api.kanye.rest/',
        success: async function (dataResult) {
             self.data.favoriteQuote = dataResult.quote
      
        }
    })
    
        //Get Favorite Pokemon From PokeAPI: 
        $.ajax({
            method: "GET",
            url: 'https://pokeapi.co/api/v2/pokemon/' + randomPokeID +'/',
            success: async function (dataResult) {
                 self.data.favoritePokemonName = dataResult.name
                 self.data.favoritePokemonPicture = dataResult.sprites.front_default
          
            }
        })

        //Get About Me Sentence From Bacon Ipsum API:
        $.ajax({
            method: "GET",
            url: 'https://baconipsum.com/api/?type=meat-and-filler',
            success: async function (dataResult) {
                 self.data.aboutMeSentence = dataResult
                 
          
            }
        })

        return self.data
    }
}
