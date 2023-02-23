//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    loadData() {
        let self = this
        let randomPokeID = Math.floor(Math.random() * 1000) + 1; // random integer from 1 to 1000
        
        // Get User Information From RandomUser API: 
        $.get('https://randomuser.me/api/')
        .then((dataResult)=> {
            self.data.firstName = dataResult.results[0].name.first
            self.data.lastName = dataResult.results[0].name.last
            self.data.city = dataResult.results[0].location.city
            self.data.state = dataResult.results[0].location.state
            self.data.picture = dataResult.results[0].picture.medium
        })  

        //Get 6 Friends Information From RandomUser API: 
        self.data.friends = []
        for(let i = 0 ; i < 6; i++){
            $.get('https://randomuser.me/api/')
            .then((dataResult)=> {
                self.data.friends.push( { id: i, name: dataResult.results[0].name.first + ' ' +dataResult.results[0].name.last})
            }) 
        }
       
       // Get Favorite Quote From Kanye API: 
        $.get('https://api.kanye.rest/')
        .then((dataResult)=> {
            self.data.favoriteQuote = dataResult.quote
        }) 
    
        //Get Favorite Pokemon From PokeAPI: 
        $.get('https://pokeapi.co/api/v2/pokemon/' + randomPokeID +'/')
        .then((dataResult)=> {
            self.data.favoritePokemonName = dataResult.name
            self.data.favoritePokemonPicture = dataResult.sprites.front_default
        }) 
  
        //Get About Me Sentence From Bacon Ipsum API:
        $.get('https://baconipsum.com/api/?type=meat-and-filler')
        .then((dataResult)=> {
            self.data.aboutMeSentence = dataResult
        }) 
    }
}
