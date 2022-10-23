const createDiv = function (){
    const div = document.createElement('div')
    const text = document.createTextNode("Cargo tracking app");
    div.append(text)
    document.body.append(div)
} 
createDiv()