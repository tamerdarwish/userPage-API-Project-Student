let api = new APIManager()
let render = new Renderer()
let myData = api.loadData().then()
render.userRender(api.data)