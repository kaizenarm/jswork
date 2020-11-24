function modal(){
    //Modal

    //То как я сделал вызов и закрытие модального окна
    // const modal = document.querySelector('.modal'),
    //       showModal = document.querySelector('[data-modal]'),
    //       closeModal = document.querySelector('[data-close]');

    // showModal.addEventListener('click', () => {
    //     modal.style.display = 'block';
    // });

    // closeModal.addEventListener('click', () => {
    //     modal.style.display = 'none';
    // });

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        // modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modelTimerId);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    modal.addEventListener('click', (e) => {
        if(e.target == modal || e.target.getAttribute('data-close') == ''){
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code == "Escape" && modal.classList.contains('show')){
            closeModal();
        }
    });

    const modelTimerId = setTimeout(openModal, 50000);

    function showModalByScroll() { //открытие модалки в конце страницы
        if (window.pageYOffset + document.documentElement.
            clientHeight >= document.documentElement.scrollHeight){ //Если прокрученная часть + та часть которая отображается = всей высоте тогда выполняем показ
                openModal();
                window.removeEventListener('scroll', showModalByScroll);
            }
    }

    window.addEventListener('scroll', showModalByScroll);

    
}

module.exports = modal;