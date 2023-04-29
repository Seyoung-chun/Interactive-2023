function clock() {}
let date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

hr_rotation = 30*hr + min/2; //720 degrees
min_rotation = 6 * min; //360 degrees
sec_rotation = 6 * sec; //360 degrees

hour.style.transform = 'rotate(${hr_rotation) deg)';
}

setInterval