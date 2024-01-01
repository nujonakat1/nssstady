
document.querySelector('.offcanvas').addEventListener('click', function(event) {
if (event.target === this) {
    $(this).offcanvas('hide');
}
});

const drawerButton = document.getElementById('drawerButton');
const drawer = document.getElementById('drawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');

drawerButton.addEventListener('click', () => {
    drawer.classList.toggle('drawer-opened');
    drawerBackdrop.classList.toggle('drawer-opened');
});

drawerBackdrop.addEventListener('click', () => {
    drawer.classList.remove('drawer-opened');
    drawerBackdrop.classList.remove('drawer-opened');
});