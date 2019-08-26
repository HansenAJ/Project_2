let imageExists = document.getElementsByClassName("baseImage")[0];

if(imageExists)
    imageExists.addEventListener("change", picChange);

//change imgsrc to selected image

function picChange(){
    let selection = document.getElementsByClassName("baseImage")[0].value;
    document.getElementsByClassName("shipImg")[0].className = 'shipImg';
    console.log("InnerHTML = " + selection)
    selection = selection.replace(/\s/g, '')
    document.getElementsByClassName("image")[0].value = selection;
    document.getElementsByClassName("shipImg")[0].classList.add(selection)
} 