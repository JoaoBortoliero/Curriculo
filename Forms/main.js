let getRadio = document.getElementById('getRadio');
getRadio.addEventListener('click', () => {
    let elementRadio = document.getElementsByName('gender');
    for (let i = 0; i < elementRadio.length; i++) {
        if (elementRadio[i].checked) {
            document.getElementById('radioResult')
            .innerHTML = `O Genero selecionado é ${elementRadio[i].value}.`;
        }
    }
});

let getPlane = document.getElementById('getPlane');
getPlane.addEventListener('click', () => {
    let elementPlane = document.querySelector('#select1');
    document.querySelector('.planeResult').innerHTML = elementPlane.value + ".";
});

let getPriority = document.getElementById('getPriority');
getPriority.addEventListener('click', () => {
    let checkBoxes = document.querySelectorAll('input[type=checkbox]:checked');
    let textCheckBoxes = "";
    for (let i = 0; i < checkBoxes.length; i++) {
        textCheckBoxes = `${textCheckBoxes}, ${checkBoxes[i].value}`;
    }
    document.getElementById('priorityResult').innerHTML = textCheckBoxes;
})