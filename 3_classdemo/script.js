function change(index){
    const p =document.querySelector('.show-classdemo');
    console.log('p',p);
    switch(index){
        case 1:
            p.innerHTML = '<iframe width=100% height=100% src="./w01/intro.html"></iframe>'
            break;
        case 2:
            p.innerHTML = '<iframe width=100% height=100% src="./w01/pokemon.html"></iframe>'
            break;
        case 3:
            p.innerHTML = '<iframe width=100% height=100% src="./w04/blog.html"></iframe>'
            break;
        case 4:
            p.innerHTML = '<iframe width=100% height=100% src="./w04/imageGallery.html"></iframe>'          
            break;
        case 5:
            p.innerHTML = '<iframe width=100% height=100% src="./w05/"></iframe>'
            break;
        case 6:
            p.innerHTML = '<iframe width=100% height=100% src="./w06 carousel modified"></iframe>'
            break;
    }
}