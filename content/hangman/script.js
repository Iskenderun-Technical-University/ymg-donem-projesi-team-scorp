const kelimeler = ['Yazılım', 'Computer', 'Pyhton', 'Deneme', 'Sahil'];
let seçilenKelime = kelimeler[Math.floor(Math.random() * kelimeler.length)];
const harfSeç = document.getElementById('harf');
const hataHarf = document.getElementById('wrong-letters');
const tekrarOynaBtn = document.getElementById('play-button');
const uyari = document.getElementById('popup-container');
const bildirim = document.getElementById('bildirim-box');
const sonuc = document.getElementById('final-message');
const adamParça= document.querySelectorAll(".adam-bölüm");
const harfOnay = [];
const yanlisHarf = [];

function güncelleHatalıHarf(){
    hataHarf.innerHTML = `
    ${yanlisHarf.length > 0 ? '<p>Hatalı Harf</p>' : ''}
    ${yanlisHarf.map(harf => `<span>${harf}</span>`)}
    `;
    adamParça.forEach((parca,alt) => {
        const engel = yanlisHarf.length;
        if(engel > alt) {
            parca.style.display = 'block'   
        }
        else{
            parca.style.display = 'none';
        }
    });
    if(yanlisHarf.length === adamParça.length){
        sonuc.style.fontSize = "60px";
        sonuc.innerText = 'Kaybettin!!';
        uyari.style.display = 'flex';
        uyari.style.background = "rgba(11, 4, 51, 0.237)";
    }
}

function yenile(){
    yanlisHarf.splice(0);
    harfOnay.splice(0);

    seçilenKelime = kelimeler[Math.floor(kelimeler.length * Math.random())];
    uyari.style.display = 'none';
    harfPrint();
    güncelleHatalıHarf();
}


function harfPrint(){
    harfSeç.innerHTML = `
    ${seçilenKelime.split('').map( letter =>` <span class="letter">
    ${harfOnay.includes(letter) ? letter : ''}
    </span>`
    ).join('')}`;
    const doldurKelime = harfSeç.innerText.replace(/\n/g, '');
    if(doldurKelime === seçilenKelime){
        sonuc.innerText = 'Dogru Tahmin!';
        sonuc.style.fontSize = "60px";
        uyari.style.display= 'flex';
        uyari.style.background = "rgba(11, 4, 51, 0.237)";
    }
}

window.addEventListener('keydown', e =>{
    if(e.keyCode >= 65 && e.keyCode <=90){
        const harf = e.key;
        if(seçilenKelime.includes(harf)){
            if(!harfOnay.includes(harf)){
                harfOnay.push(harf);
                harfPrint();
            } else{
                bildirimGöster();
            }
        } 
        else{
            if(!yanlisHarf.includes(harf)){
                yanlisHarf.push(harf);

                güncelleHatalıHarf  ();
            } else{
                bildirimGöster();
            }
        }
    }
});

function bildirimGöster(){
    bildirim.classList.add('show');

    timeOut(() => {
        bildirim.classList.remove('show');
    }, 2000);
}

tekrarOynaBtn.addEventListener('click', yenile);
harfPrint();

