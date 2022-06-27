
const input = document.getElementById('input');


function clickAlert () {

        alert('I was clicked!');

}

function addingEventListener(e, cb) {

    return input.addEventListener(e, cb);



};

addingEventListener('click', clickAlert);


