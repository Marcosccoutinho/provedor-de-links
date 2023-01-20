function togglemode() {
    const html = document.documentElement
    html.classList.toggle("light")
   // pegar uma tag img
  const image = document.querySelector ( "#profile img" );

  // substitui a imagem
  if  ( html.classList.contains( "light" ))  {
    // se tiver modo light, adicione a imagem light
    image.setAttribute( "src" ,  "./imagens/marcos-oculos-light.png" );
  }  else {
    // define o modo de viver sem luz, mantém a imagem normal
    image.setAttribute ( "src" ,  "./imagens/marcos-foto.png" );
  } 
    
}