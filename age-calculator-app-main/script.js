const dayInput=document.getElementById('input1');
const monthInput=document.getElementById('input2');
const yearInput=document.getElementById('input3');
const form=document.querySelector('.form');
const input=document.querySelector('.input');
const span1=document.querySelector('.s1');
const span2=document.querySelector('.s2');
const span3=document.querySelector('.s3');
const inputs=document.querySelector('.iput');

let dates={
    year: null,
    month: null,
    day: null
};
if(dates.year!==null) {
    yearInput.value=dates.year;
}
if(dates.month!==null) {
    monthInput.value=dates.month;
}
if(dates.day!==null) {
    dayInput.value=dates.day;
}
function errorWithMessage(input,message) {
    input.className='iput';
    input.style.borderColor='hsl(0, 100%, 67%)';
    const div=input.nextElementSibling;
    const labels=input.previousElementSibling;
    labels.style.color='hsl(0, 100%, 67%)';
    div.innerText=message;
    div.className='error';
}
function successWithMessage(iput) {
    iput.className='iput';
    iput.style.borderColor='hsl(0, 0%, 86%)';
    const div1=iput.nextElementSibling;
    const labels1=iput.previousElementSibling;
    labels1.style.color='hsl(0, 1%, 44%)';
    div1.className='success';
}
function calculDate() { 
    var d1 = dayInput.value;
    var m1 = monthInput.value;
    var y1 = yearInput.value;
        
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
    if(d1 > d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if(m1 > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
        
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
      
    span1.innerText=y;
    span2.innerText=m;
    span3.innerText=d;
        
    successWithMessage(dayInput);
    successWithMessage(monthInput);
    successWithMessage(yearInput);
}
function wholeError() {
    if((dayInput.value.length==0)&&(monthInput.value.length==0)&&(yearInput.value.length==0)) {
        errorWithMessage(dayInput,'This field is required');
        errorWithMessage(monthInput,'This field is required');
        errorWithMessage(yearInput,'This field is required');
        
        span1.innerText="--";
        span2.innerText="--";
        span3.innerText="--";
    } else {
        calculDate();
        validDate();
    }
}
function validDate() {

    if(dayInput.value>31) {
        errorWithMessage(dayInput,'Must be a valid day');

        span1.innerText="--";
        span2.innerText="--";
        span3.innerText="--";
    } else {
        successWithMessage(dayInput);
    }


    if(monthInput.value>12) {
        errorWithMessage(monthInput,'Must be a valid month');
        
        span1.innerText="--";
        span2.innerText="--";
        span3.innerText="--";
    } else {
        successWithMessage(monthInput);
    }


    var newdate= new Date();
    var newyear=newdate.getFullYear();
    if(yearInput.value>newyear) {
        errorWithMessage(yearInput,'Must be in the past');
        
        span1.innerText="--";
        span2.innerText="--";
        span3.innerText="--";
    } else {
        successWithMessage(yearInput);
    }
}
function successOrerror() {
    var month2 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(dayInput.value>month2[monthInput.value-1]) {
        errorWithMessage(dayInput,'Must be a valid date');
        errorWithMessage(monthInput,'');
        errorWithMessage(yearInput,'');
        // yearInput.style.borderColor='hsl(0, 100%, 67%)';
        // monthInput.style.borderColor='hsl(0, 100%, 67%)';
        
        span1.innerText="--";
        span2.innerText="--";
        span3.innerText="--";
    } else {
        successWithMessage(dayInput);
        wholeError();
    }
}
form.addEventListener('submit', function(event) {
    event.preventDefault();
    successOrerror();
});
