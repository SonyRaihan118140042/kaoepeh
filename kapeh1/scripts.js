// modals

const cartmodal = document.getElementById('cartmodal');
const checkoutmodal = document.getElementById('checkoutmodal');



// modal cart button open / close

const modalcartopen = document.getElementById('cartmodal--btn');
const modalcartclose = document.getElementById('cartmodal--closebtn');


// checkout modal button open / close

const checkoutmodalopen = document.getElementById('cartmodalcheckout--button');
const checkoutmodalclose = document.geteleme


//event listener click

modalcartopen.addEventListener('click', open_cartmodal);
modalcartclose.addEventListener('click', close_cartmodal);
checkoutmodalopen.addEventListener('click', open_checkoutmodal);






//functions

function open_cartmodal()
{
    cartmodal.style.display = 'block';
}

function close_cartmodal()
{
    cartmodal.style.display = 'none';
}

function open_checkoutmodal()
{
    checkoutmodal.style.display = 'block';
    cartmodal.style.display = 'none';

}