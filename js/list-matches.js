// Accordion
let btnShowAccordion = document.querySelectorAll('.open-btn');
let accordion = document.querySelectorAll('.list-matches__accordion');
btnShowAccordion.forEach(btn => {
    btn.addEventListener('click', function(){
        btn.parentNode.parentNode.nextElementSibling.classList.toggle('accordion-show');
        $(btn.parentNode.parentNode.parentNode).toggleClass('active-item');
        $(btn).toggleClass('rotate');
    })
});
// Delete
let btnDeleteAccordion = document.querySelectorAll('.delete-btn');
let modalDelete = document.querySelector('.modal-delete');
let deleteOk = document.querySelector('.modal-delete__delete');
let deleteCancel = document.querySelector('.modal-delete__cancel');
btnDeleteAccordion.forEach(btn => {
    btn.addEventListener('click', function(){
        modalDelete.classList.add('show-modal');
        deleteOk.addEventListener('click', function(){
            btn.parentNode.parentNode.parentNode.remove();
            modalDelete.classList.remove('show-modal');
        });
        deleteCancel.addEventListener('click', function(){
            modalDelete.classList.remove('show-modal');
        });
    })
});