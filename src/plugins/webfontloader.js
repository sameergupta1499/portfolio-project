import WebFont from 'webfontloader'

export async function loadFonts() {
  WebFont.load({
    custom: {
      families: ['Antonio','Josefin Sans'],
      urls: ['https://fonts.googleapis.com/css2?family=Antonio:wght@100;200;300;400;500;600;700&family=Josefin+Sans:wght@200;300;400;500;600;700;800&display=swap'],
    },
    
  })
}