// function getFood() {
//   food = "chooocolate";
//   console.log(food);
//   var food;
// }

// getFood();

// let a = 1;
// let b = 2;

// [a, b] = [b, a];
// console.log("a: ", a);
// console.log("b: ", b);

// const values = [1, 2];

// const [first, two, third = 3] = values;
// console.log("third: ", third);

// function sum(...numbers) {
//   console.log(numbers);
// }

// sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

// const ex = [1,2,3,5,6,7]
// console.log(...ex)

//-----------Materi keyword this-----------------//
// function People(name, age, hobby) {
//   this.name = name;
//   this.age = age;
//   this.hobby = hobby;
// }

// People.prototype.introMyself = function () {
//   // this -> People
//   console.log("this: ", this);
//   setTimeout(() => {
//     // this -> ?? --->jika tidak menyertakan keyword new maka akan bernilai undifined, kecuali jika kita menggunakan arrow functin di param setTimeout
//     console.log("this in settimeout function: ", this);
//     console.log(`Hello! nama saya ${this.name}`);
//   }, 300);
// };

// const programmer = new People("John", (18)[("Coding", "Read Book")]);
// programmer.introMyself();

//--------------Default Parameter--------------//

// function sayHello(name = "stranger", greate = "Hello") {
//   console.log(`${greate} ${name}`);
// }

// sayHello("Dimas", "Hai");
// sayHello();

//-------------Class pada javascript-------------//

// class Car {
//   //Sama seperti function constructor
//   constructor(manufacture, color) {
//     this.manufacture = manufacture;
//     this.color = color;
//     this.engineActive = false;
//   }

//   //Sama seperti Car.prototype.startEngine
//   startEngines() {
//     console.log("Mobil dinyalakan...");
//     this.engineActive = true;
//   }

//   //Sama seperti Car.prototype.info
//   info() {
//     console.log(`Manufacture: ${this.manufacture}`);
//     console.log(`Color: ${this.color}`);
//     console.log(`Engines: ${this.engineActive}`);
//   }
// }

// const johnCar = new Car("Hondo", "Red");
// johnCar.startEngines();
// johnCar.info();

//Intance merupakan hasil realisasi dari blueprint classnya

//Property accesor

// class Car {
//   constructor(manufacture, color) {
//     this.manufacture = manufacture;
//     this._color = color;
//     this.engineActive = false;
//   }

//   get color() {
//     return `Warna mobil: ${this._color}`;
//   }

//   set color(value) {
//     console.log(`Warna mobil diubah dari ${this._color} menjadi ${value}`);
//     this._color = value;
//   }
// }

// const johnCar = new Car("Honda", "Red");

// johnCar.color = "White";
// console.log(johnCar.color);

//Ketika menggunakan getter/setter kita perlu mengubah nama properti aslinya dengan property accesor yang kita buat
//Berdasarkan code convention kita harus menambahkan underscore pada property accesor yang kita buat

///-----Inheritance pada class-------//
// class Vehicle {
//   constructor(licensePlate, manufacture) {
//     this.licensePlate = licensePlate;
//     this.manufacture = manufacture;
//     this.engineActive = false;
//   }

//   startEngines() {
//     console.log(`Mesin kendaraan ${this.licensePlate} dinyalakan`);
//   }

//   info() {
//     console.log(`Nomor Kendaraan: ${this.licensePlate}`);
//     console.log(`Manufacture: ${this.manufacture}`);
//     console.log(`Mesin: ${this.engineActive ? "Active" : "Inactive"}`);
//   }

//   parking() {
//     console.log(`Kendaraan ${this.licensePlate} parkir!`);
//   }
// }

// class Car extends Vehicle {
//   constructor(licensePlate, manufacture, wheels) {
//     super(licensePlate, manufacture);
//     this.wheels = wheels;
//   }

//   droveOff() {
//     console.log(`Kendaraan ${this.licensePlate} melaju!`);
//   }

//   openDoor() {
//     console.log(`Membuka pintu!`);
//   }
//   //Overifing method:
//   info() {
//     super.info();
//     console.log(`Jumlah roda: ${this.wheels}`);
//   }
// }

// const johnCar = new Car("H123S", "Hondo", 4);

// johnCar.startEngines();
// johnCar.openDoor();
// johnCar.info();
/*
  keyword super digunakan untuk mengakses properti dan method yang ada pada indek class 
*/

//Penggunaa super juga sangat berguna ketika kita akan melakukan overriding method

//--------Static method in class------//
/*
  Static method adalah method yang hanya bisa diakses melalui classnya langsung dan tidak bisa diakses oleh instance
*/
// class Vehicle {
//   constructor(licensePlate, manufacture) {
//     this.licensePlate = licensePlate;
//     this.manufacture = manufacture;
//     this.engineActive = false;
//   }

/* kode lainnya */
// }

// class VehicleFactory {
//   static repair(vehicles) {
//     vehicles.forEach((vehicle) =>
//       console.log(`Kendaraan ${vehicle.licensePlate} sedang diperbaiki`)
//     );
//   }
// }

// const johnCar = new Car("H121S", "Honda", 4);
// const tomMotor = new Motorcycle("GF121J", "Yamaha", 2);
// const dimasCar = new Car("TA1408K", "Tesla", 4);

// VehicleFactory.repair([johnCar, tomMotor, dimasCar]);

//------Settimeout-------///

// console.log('Selamat datang!');

// setTimeout(() => {
//   console.log('Terimakasih sudah mampir, silakan datang kembali!')
// }, 3000);

// console.log('Ada yang bisa dibantu?');

//setTimeout() tidak akan menghentikan JavaScript untuk mengeksekusi kode yang ada selanjutnya

//-------Promise-----------//
// const executorFunction = (resolve, reject) => {
//   const isCoffeeMakerReady = true;
//   if (isCoffeeMakerReady) {
//     resolve("Kopi berhasil dibuat");
//   } else {
//     reject("Mesin Kopi tidak bisa digunakan ");
//   }
// };

// const coffe = new Promise(executorFunction)
//   .then((val) => console.log(val))
//   .catch((error) => console.log(error));
// console.log(coffe);

//---------Promise All ----------//
//Promise All dapat menerima banyak promise dalam bentuk array

const arabicOrder = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Kopi arabika selesai!");
    }, 4000);
  });
};

const robustaOrder = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Kopi robusta selesai! ");
    }, 2000);
  });
};
const lebericaorder = () => {
  return new Promise((resolve) => {
    resolve("Kopi liberica selesai");
  });
};

const promise = [arabicOrder(), robustaOrder(), lebericaorder()];

Promise.all(promise).then((val) => console.log(val));
