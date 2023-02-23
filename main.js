
const api = new APIManager()
const render = new Renderer()

$("#load-user-button").on("click",function(){
  emptyAll()
  api.loadData()
  })

  $("#display-button").on("click",function(){
    render.mainRender(api.data)
   })


   const emptyAll = function(){
    $('.user-container').empty()
    $('.quote-container').empty()
    $('.pokemon-container').empty()
    $('.meat-container').empty()
    $('.friends-container').empty()
}