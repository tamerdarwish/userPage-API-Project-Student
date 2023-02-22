
class Renderer {

    userRender(dataObject){
        const source = $('#user-data-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(dataObject);
        $('.user-container').append(newHTML);
    }

    quoteRender(){

    }

    contentRender(){

    }

    friendsRender(){

    }

    mainRender(){
        
    }

}