function change(index){
    const p =document.querySelector('.show-classdemo');
    console.log('p',p);
    switch(index){
        case 1:
            p.innerHTML = '<iframe width=100% height=100% src="./midproject.html"></iframe>'
            break;
        case 2:
            p.innerHTML = '<iframe width=100% height=100% src="./midproject.html"></iframe>'
            break;
        case 3:
            p.innerHTML = '<iframe width=100% height=100% src="./midproject.html"></iframe>'
            break;
        case 4:
            p.innerHTML = '<iframe width=100% height=100% src="./classdemo/w01/intro.html"></iframe>'          
            break;
        case 5:
            p.innerHTML = '<iframe width=100% height=100% src="./classdemo/w01/pokemon.html"></iframe>'
            break;
        case 6:
            p.innerHTML = '<iframe width=100% height=100% src="./classdemo/w04/blog.html"></iframe>'
            break;
        case 7:
            p.innerHTML = '<iframe width=100% height=100% src="./classdemo/w04/imageGallery.html"></iframe>'
            break;
        case 8:
            p.innerHTML = '<iframe width=100% height=100% src="./classdemo/w05/index.html"></iframe>'
            break;
        case 9:
            p.innerHTML = '<iframe width=100% height=100% src="./classdemo/w06 carousel modified/index.html"></iframe>'
            break;
    }
}



