// Modal
const $orderOpenBtn = document.querySelector('#order-open');
const $modalOrder = document.querySelector('#modal-order');
const $orderCloseBtn = document.querySelector('#order-close');

const hendleOrderOpenBtnClick = () => {
  $modalOrder.classList.add('active');
};

const hendleOrderCloseBtnClick = () => {
  $modalOrder.classList.remove('active');
};

$orderOpenBtn.addEventListener('click', hendleOrderOpenBtnClick);
$orderCloseBtn.addEventListener('click', hendleOrderCloseBtnClick);
