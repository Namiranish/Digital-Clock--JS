const time = document.getElementById('time');
const timeFrame = document.getElementById('time-format')

setInterval(displayTime,1000);

function displayTime(){
    let today = new Date();
let Hours = today.getHours();
let Mint = today.getMinutes();
let Sec = today.getSeconds();

if(Hours<10){
    Hours = '0' + Hours
}

if(Mint<10){
    Mint = '0' + Mint
}

if(Sec<10){
    Sec = '0' + Sec
}

time.innerText = `${Hours}:${Mint}:${Sec}`;
timeFrame.innerText = (Hours<12)? 'AM':'PM';
}