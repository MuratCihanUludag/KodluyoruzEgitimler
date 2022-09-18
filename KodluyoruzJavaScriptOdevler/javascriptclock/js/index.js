let Name = prompt("Adınızı Giriniz ")
let nameText = Name
let info = document.querySelector("#myName")
info.innerHTML = `${nameText}`


function DatesAndHours() {
    let date = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} ${new Date().toLocaleDateString('tr-TR', {weekday: 'long'})}`//new Date kullanılarak saat dk ve saniye alınmıştır sonrasında tolocaledtastring ile gün alınmıştır
    document.getElementById("myClock").innerHTML = `${date}` // date myClock id sine bağlanmıştır
}
setInterval(DatesAndHours, 1000); // her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır

