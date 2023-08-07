const image = {
  foto1: ".//assents/avatar.png",
  foto2: ".//assents/foto2.png",
  alt:"foto de estefane"
}

function toggleMode () {
  const html = document.body
  html.classList.toggle("light")

  const img = document.querySelector('#profile img')

  if(html.classList.contains("light")){
    img.setAttribute("src",image.foto2 )
    img.setAttribute("title",image.alt)
    }
  else{
    img.setAttribute("src", image.foto1)
  }
}
function loadImg(){
  const img = document.querySelector("#profile img") 
  
  img.setAttribute("src", image.foto1)
  img.setAttribute("title", image.alt)
}
loadImg()
