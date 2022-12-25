var html = document.querySelector('.root')

for(let i = 0; i < 101; i++) {
    var moduloTrois = i % 3;
    var moduluoCinq = i % 5;
    if(moduloTrois == 0 && moduluoCinq == 0) {
        html.innerHTML += `<p>` + i + ` Concept Image</p>`
    } else if (moduluoCinq == 0) {
        html.innerHTML += `<p>` + i + ` Image</p>`
    } else if (moduloTrois == 0) {
        html.innerHTML += `<p>` + i + ` Concept</p>`
    } else {
        html.innerHTML += `<p>` + i + `</p>`
    }

}