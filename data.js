let biodata = document.getElementById("biodata");

const nama = "john";
const umur = 18;
const asal = "jaksel";
const hobi = "mancing";
const umr = 1;

function generateBiodata() {

    console.log(`nama saya adalah ${nama}
umur saya adalah ${umur} tahun
saya berasal dari ${asal}
saya memiliki hobi ${hobi}
dan penghasilan saya ${umr} miliyarddd`);

    let generasi;

    if (umur >= 0 && umur < 7) {
    generasi = "generasi lebih (c)emas 2024";
    console.log("kecik banget cik");
    } 

    else if (umur >= 7 && umur < 15) {
    generasi = "generasi (c)emas 2024";
    console.log("bocil lu!");
    } 

    else if (umur >= 15 && umur < 21) {
    generasi = "generasi cemerlang";
    console.log("selamat anda memasuki fase remaja :D");
    } 

    else if (umur >= 21 && umur < 30 ) {
    generasi = "generasi penerus bangsa";
    console.log("dewasa itu mengerikan men");
    } 

    else {
    generasi = "sepuh jir";
    console.log("tuwak");
    }
    
    console.log(`kamu adalah, ${generasi}`);

    return biodata.innerHTML = generasi
}

 generateBiodata();