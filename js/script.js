let $ = document
const buttomElem = $.querySelector('button')
const modalParent = $.querySelector('.modal-parent')
const section = $.querySelector('section')
const X = $.querySelector('.X')

buttomElem.addEventListener('click' , function(){
    modalParent.style.display = 'block'
    section.style.filter = 'blur(10px)'
})

X.addEventListener('click' , function(){
    modalParent.style.display = 'none'
    section.style.filter = 'blur(0px)'
})

document.bady.addEventListener('keyup' , function(event){
    if(keyCode === 27){
      modalParent.style.display = 'none'
      section.style.filter = 'blur(0px)'
    }
})
