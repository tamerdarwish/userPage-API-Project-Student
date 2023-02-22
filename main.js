$("#load-user-button").on("click",function(){
   let apiObject = new APIManager()

   $("#display-button").on("click",function(){
    apiObject.loadData()
   })
  
  })

  
 

let api = new APIManager()
//let render = new Renderer()
//let myData = api.loadData()
//console.log(api.data)
//render.userRender(api.data)