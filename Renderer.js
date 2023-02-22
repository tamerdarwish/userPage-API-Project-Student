
class Renderer {

    userRender(dataObject){
        const source = $('#user-data-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(dataObject);
        $('.user-container').append(newHTML);
    }

    quoteRender(dataObject){
        const source = $('#quote-data-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(dataObject);
        $('.quote-container').append(newHTML);
    }

    pokemonRender(dataObject){
        const source = $('#pokemon-data-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(dataObject);
        $('.pokemon-container').append(newHTML);
    }

    aboutMeRender(dataObject){
        const source = $('#meat-data-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(dataObject);
        $('.meat-container').append(newHTML);
    }

    friendsRender(){

    }

    mainRender(){
        
    }

}