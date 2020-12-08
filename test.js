const number = 99999999999;
const end = (number*2);
const size = 100000;
let list = {};
let serial = 0;

const addOne = function(){
    let id = 'r'+serial.toString(36)+'c';
    list[id] = (
        Math.round(
            Math.random()*end
        )-number
    );
    serial++;
}

const fillUp = function (){
    for (let i = 0 ; size > i ; i ++)
        addOne();
}
fillUp();


