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
    }
    
}