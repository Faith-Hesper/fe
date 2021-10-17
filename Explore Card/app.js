const panels = document.querySelectorAll('.panel');
const img =document.getElementById('t')
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(params) {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

function upload(obj) {
    let file = obj.files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        img.setAttribute("src",this.result)
    }
}