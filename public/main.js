document.getElementsByClassName("baseImage")[0].addEventListener("change", picChange);

//change imgsrc to selected image

function picChange(){
    let selection = document.getElementsByClassName("baseImage")[0].value;
    document.getElementsByClassName("shipImg")[0].className = 'shipImg';
    console.log("InnerHTML = " + selection)
    selection = selection.replace(/\s/g, '')
    document.getElementsByClassName("image")[0].value = selection;
    document.getElementsByClassName("shipImg")[0].classList.add(selection)
} 