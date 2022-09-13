// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("cizz-bizz")
//     } else if (i % 3 == 0) {

//         console.log('cizz')
//     } else if (i % 5 == 0) {

//         console.log("bizz")
//     } else {
//         console.log(i)
//     }
// }

/**2 */
// for (let j = 1; j <= 10; j++) {
//     for (let k = 1; k <= j; k++) {

//         document.write("-Y-") + document.write("-O-");
//         // let k ="*"
//         // document.getElementById("write").innerHTML = k
//     }
//     document.write("<br>")
// }
// const star = "*";
// for (let index = 1; index <= 5; index++) {
//  document.write(star.repeat(index));
// }

/**
1 ile 100 arasindaki asal sayilar */
// let not_Prime="";
// for (let counter = 2; counter <= 100; counter++) {

//     let notPrime = false;

//     for (let i = 2; i < counter; i++) {
//         if (counter % i === 0) {
//             notPrime = true;
//         }
//     }
//     if (notPrime === false) {
//         not_Prime+= "  "+counter;
        
//     }
    
// }
// document.write(not_Prime);
// // bir asal sayi nasil bulunur 
// // bir asal sayi bir ve kendisine bolunebilen sayidir
// // bir asal sayi ikiden itibaren kendisine 
// // kadar bolunememelidir.
// for (let mainIndex = 2; mainIndex < 101; mainIndex++) {

// const primeNumber = mainIndex;
// let dividable = false;

// //bu for dongusu, asal sayi adayi sayiyi 2'den kendisine kadar bolme yontemiyle 
// //sayinin asal sayi olup olmadigini anlamaya calisir

// for (let index = 2; index < primeNumber; index++) {

//     if (primeNumber % index == 0) {

//         dividable = true;
//     }
// }

// if (dividable == false) {

//     console.log(primeNumber, "is a prime number")

// } else {
//     console.log(primeNumber, "is NOT a prime number")
// }
// Bu program asagidaki durumlari kontrol edebilmelidir.
// 1. Cabbar Usta sadece kirmizi ve siyah arabalari tamir etmektedir.
// 2. Sadece BMW, Audi ve VW markalarini kabul etmektedir.
// 3. BMW arabalarinda sadece kirmizi olanlari ve yas araligi 2010 ile 2019 arasindakileri kabul etmektedir.
// 4. Audi de ise sadece yas araligi 2005 ile 2010 veya 2014 ile 2020 arasindakileri kabul etmektedir.
// 5. VW de ise sadece siyah olanlari ve yas araligi 2001 ile 2018 arasindakileri kabul etmektedir.
// 6. Bu seneden itibaren de Cabbar Usta, 2020 cikisli siyah renkli BMWleri de kabul etmektedir.
// 7. 5 yildan uzun sureli sabit musterilerine ise, tum araba modellerinde (tum yas araligi ve tüm renkler) hizmet vermektedir.
// let sonuc = document.getElementById("sonuc")

// function cabbars() {
//     let autoModel = document.getElementById("model").value;
//     let autoColor = document.getElementById("color").value;
//     let autoYear = document.getElementById("year").value;
//     let customYear = document.getElementById("custom_year").value;

//     // // 5 yillik musteri
//     // let customYear = 5;
//     // let autoColor ="red";
//     // let autoYear= 2010;
//     // let autoModel ="bmv";

//     if (customYear > 4) {
//         console.log("arabanizi tamir ediyoruz")
//         sonuc.innerHTML = "arabanizi tamir ediyoruz";
//     }

//     // bmw
//     else if (autoModel == "bmw" && ((autoColor == "red" && (autoYear >= 2010 && autoYear <= 2019)) || (autoColor == "black" && autoYear == 2020))) {
//         console.log("arabanizi tamir ediyoruz")
//         sonuc.innerHTML = "arabanizi tamir ediyoruz";
//     }

//     //audi
//     else if (autoModel == "audi" && (autoColor == "red" || "black") && ((autoYear >= 2005 && autoYear <= 2010) || (autoYear <= 2020))) {
//         console.log("arabanizi tamir ediyoruz")
//         sonuc.innerHTML = "arabanizi tamir ediyoruz";
//     }

//     // vw
//     else if (autoModel == "vw" && (autoColor == "black") && (autoYear >= 2001 && autoYear <= 2018)) {
//         console.log("arabanizi tamir ediyoruz")
//         sonuc.innerHTML = "arabanizi tamir ediyoruz";
//     }
//     // geriye kalan kosullar
//     else {
//         console.log("uzgunum arabanizi tamir edemeyiz")
//     }
// }
/**
 * 
 * let isim = document.querySelector("#ad");
   let password = document.querySelector("#password")
   let button = document.querySelector('#button')
   let passwords = "12345";
   let names = "ali"
   function degerlendirme() {
    if ((passwords == password.value) && (names == isim.value)) {
        alert('Hosgeldin');
    } else {
        alert('yeniden dene');
    }
}
button.addEventListener('click', degerlendirme);
 * Kullanici sifresi ve Kullanici Adi dogru ise alert ile ekranda onay mesaji veren bir Login Sistemi oluşturunuz.
 */
// let sonuc = document.getElementById("sonuc");


// sonuc.addEventListener('click', login);
// const password = 123456;
// const userName = "yavuz";
// function login() {

//     let passwords = document.getElementById("username").value;
//     let userNames = document.getElementById("password").value;

//     if (passwords == password && userNames == userName) {
//         console.log("ok")
//         sonuc.innerHTML = "ok";
//     } else {
//         console.log("tekrar deneyiniz")
//     }
// }
// let myColor = ["Red", "Green", "White", "Black"];  
//Yukaridaki dizeyi konsola "red+green+white+black" seklinde yazdirin.

// let myColor = ["Red", "Green", "White", "Black"];

// console.log(myColor.join("--"));

// let arrayString = myColor.join("+");
// console.log(arrayString);
// console.log(arrayString.toLowerCase());
// Verilen bir Array içinden rastgele bir eleman alip ekrana yazdiriniz.


// let names = ["Ahmet", "Mehmet", "Selami", "Necmi", "Bekir", "Ayse", "Seyma"]; 

// let lenght = names.length;

// console.log(lenght);

// function getRandomInt() {
//     return Math.floor(Math.random() * lenght);
//   }

//   console.log(names[getRandomInt(lenght)]);
// Verilen iki Array'in elemanlarini karsilastiriniz ve iki dizide de ortak olan elemanlarin toplamini bulunuz. 

// let array1 = [1,5,2,-6,23,100];
// let array2 = [1,15,32,-6,213,100];
// let lenght = array1.length;

// let toplam = 0;
// for (let index = 0; index < array1.length; index++) {
//     const element = array1[index];
//     if(array2.includes(element) == true){
//         toplam += element
//         console.log(toplam)
//     }
//     console.log(toplam)
// }
// console.log(toplam)
/**
 * Verilen bir cümlede verilen bir kelimenin kaç defa geçtiğini bulan bir program yazınız. Yapilan programda aranan kelimeyi ve kaynak cümleyi gireceğiniz input alanlari oluşturacaksınız.
 */
// let data = "HiCoders gönüllüleri, HiCoders egitmenleri, HiCoders yöneticileri ve HiCoders ögrencileri olarak, HiCoders JS BootCamp’i icra ediyoruz.";
// const anahtar = "HiCoders";
// let array = data.split(" ");
// console.log(array);
// let toplam = 0;
// for (let index = 0; index < array.length; index++) {
//     let element = array[index]
//     if (element === anahtar) {
//         toplam++;
//     }
// }
// console.log("Toplam:", toplam)

// let cumle = "HiCoders gönüllüleri, HiCoders egitmenleri, HiCoders yöneticileri ve HiCoders ögrencileri olarak, HiCoders JS BootCamp’i icra ediyoruz."
// const arama = "HiCoders"
// let array = cumle.split(" ")
// let toplam = 0
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (element === arama) {
//         toplam++
//     }
// }
// console.log(toplam)

const fotoContainer = document.querySelector("#Container");

let images = [
    "https://images.unsplash.com/photo-1638091990389-7f4d9bbe8d81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "https://images.unsplash.com/photo-1638369321326-6af6b7a5cdf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "https://images.unsplash.com/photo-1637978472664-579db27c8b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "https://images.unsplash.com/photo-1637582177422-2405387d370f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "https://images.unsplash.com/photo-1638160292949-2bbaec1bf98e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=395&q=80", "https://images.unsplash.com/photo-1603162361777-165a7fd9b780?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80", "https://images.unsplash.com/photo-1602600220542-f3b3b7f3bf1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80", "https://images.unsplash.com/photo-1638201977824-6d2a56ffa803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "https://images.unsplash.com/photo-1636520529106-568f8c5dc5b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "https://images.unsplash.com/photo-1638025739413-b729d9556d4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80", "https://images.unsplash.com/photo-1637881063426-9474cd2c69de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
];

let html = "";
for (let index = 0; index < images.length; index++) {
    let image = images[index];
    let row = `
        <div class="carousel-item">
            <img src="${image}" class="d-block w-75 h-25" alt="...">
        </div>
    `;
    html += row;
}


fotoContainer.innerHTML = `
<div class="container-fluid">
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
<div class="carousel-item active">
<img src="${images} " class="d-block w-75 h-50" alt="...">
</div>
        ${html}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
        </div>
        </div>
`;
// // random sayi;
// let randomNumber="";
// function sayiUret() {
//     document.getElementById("numberRandom").innerHTML = randomInt(10, 20);
//   }

//   function randomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
// // //fill map ile array list olusturma
// const array = Array(10)
//     .fill(1)
//     .map((n, i) => n + i)

// console.log(array)