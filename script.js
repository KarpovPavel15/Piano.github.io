const keyboard=[113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 97, 115, 100, 102];
const keys=['q','w','e','r','t','y','u','i','o','p','a','s','d','f'];

function init() {
    let out='';
    for (let i=0;i<keyboard.length;i++){
        if(i===2||i===6||i===9||i===13){
            out+='<div class="key"  keys="'+keys[i]+'" datatype="'+keyboard[i]+'"><div class="key_sec">' +
                '<div class="key_sec_elementLeft"></div>' +
                '</div>' +
                '</div>'
        }
        else if(i===0||i===3||i===7||i===10){
            out+='<div class="key"  keys="'+keys[i]+'" datatype="'+keyboard[i]+'"><div class="key_sec">' +
                '<div class="key_sec_elementRight1"></div>' +
                '</div>' +
                '</div>'
        }
        else out+='<div class="key"  keys="'+keys[i]+'" datatype="'+keyboard[i]+'"><div class="key_sec">' +
            '<div class="key_sec_elementLeft"></div>' +
            '<div class="key_sec_elementRight"></div>' +
            '</div>' +
            '</div>'
    }
    document.querySelector('#container_piano-area').innerHTML=out;
}
init();
document.onkeypress=function (event) {
    document.querySelectorAll('#container_piano-area .key').forEach(function (element) {
        element.classList.remove('active');
    });
    document.querySelector('#container_piano-area .key[datatype="'+event.keyCode+'"]').classList.add('active');
    document.querySelector('#container_piano-area .key[keys="'+event.key+'"]').classList.add('active');
    let key1=event.keyCode;
    switch (key1) {
        case 113:
            let soundDo = document.getElementById("audio1");
            soundDo.play();
            break;
        case 119:
            let soundRe = document.getElementById("audio2");
            soundRe.play();
            break;
        case 101:
            let soundMi = document.getElementById("audio3");
            soundMi.play();
            break;
        case 114:
            let soundFa = document.getElementById("audio4");
            soundFa.play();
            break;
        case 116:
            let soundSol = document.getElementById("audio5");
            soundSol.play();
            break;
        case 121:
            let soundLya = document.getElementById("audio6");
            soundLya.play();
            break;
        case 117:
            let soundSi = document.getElementById("audio7");
            soundSi.play();
            break;
        case 105:
            let soundDoSec = document.getElementById("audio8");
            soundDoSec.play();
            break;
        case 111:
            let soundReSec = document.getElementById("audio2");
            soundReSec.play();
            break;
        case 112:
            let soundMiSec = document.getElementById("audio3");
            soundMiSec.play();
            break;
        case 97:
            let soundFaSec = document.getElementById("audio4");
            soundFaSec.play();
            break;
        case 115:
            let soundSolSec = document.getElementById("audio5");
            soundSolSec.play();
            break;
        case 100:
            let soundLyaSec = document.getElementById("audio6");
            soundLyaSec.play();
            break;
        case 102:
            let soundSiSec = document.getElementById("audio7");
            soundSiSec.play();
            break;
    }
};

document.querySelectorAll('#container_piano-area .key').forEach(function (element) {
    element.onclick=function (event) {
        document.querySelectorAll('#container_piano-area .key').forEach(function (element) {
            element.classList.remove('active');
        });
        let key=this.getAttribute('datatype');
        this.classList.add('active');
        switch (key) {
            case "113":
                let soundDo = document.getElementById("audio1");
                soundDo.play();
                break;
            case "119":
                let soundRe = document.getElementById("audio2");
                soundRe.play();
                break;
            case "101":
                let soundMi = document.getElementById("audio3");
                soundMi.play();
                break;
            case "114":
                let soundFa = document.getElementById("audio4");
                soundFa.play();
                break;
            case "116":
                let soundSol = document.getElementById("audio5");
                soundSol.play();
                break;
            case "121":
                let soundLya = document.getElementById("audio6");
                soundLya.play();
                break;
            case "117":
                let soundSi = document.getElementById("audio7");
                soundSi.play();
                break;
            case "105":
                let soundDoSec = document.getElementById("audio8");
                soundDoSec.play();
                break;
            case "111":
                let soundReSec = document.getElementById("audio2");
                soundReSec.play();
                break;
            case "112":
                let soundMiSec = document.getElementById("audio3");
                soundMiSec.play();
                break;
            case "97":
                let soundFaSec = document.getElementById("audio4");
                soundFaSec.play();
                break;
            case "115":
                let soundSolSec = document.getElementById("audio5");
                soundSolSec.play();
                break;
            case "100":
                let soundLyaSec = document.getElementById("audio6");
                soundLyaSec.play();
                break;
            case "102":
                let soundSiSec = document.getElementById("audio7");
                soundSiSec.play();
                break;
        }
    }
});
