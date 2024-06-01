const imgs = [
    "Surface_Laptop_3_01.jpg",
    "Surface_Laptop_3_02.jpg",
    "Surface_Laptop_3_03.jpg",
    "Surface_Laptop_3_04.jpg",
    "Surface_Laptop_3_05.jpg",
    "Surface_Laptop_3_06.jpg",
    "Surface_Laptop_3_07.jpg",
    "Surface_Laptop_3_08.jpg"
];

const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImg = document.createElement("img");

bgImg.src = `images/${chosenImg}`;

document.body.appendChild(bgImg);