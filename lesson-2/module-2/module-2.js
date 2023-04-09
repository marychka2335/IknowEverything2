// ! Arrays and function
//TODO:=========task-1=================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallerNumber(arr) {
//   if (!Array.isArray(arr)) {
//     throw new Error("Аргументи повинні бути масивом!")
//   }
// let min = arr[0]

//   for (const item of arr){
//     if (item < min) {
//      min = item
//    }
//   }
//   return min
// }

// const smallestNumber = findSmallerNumber(numbers);
// console.log(smallestNumber); // 2

//TODO:=========task-2=================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// const calculateAverage = function () {
// let sum = 0
// let counts = 0

//   for (argument of arguments) {
//     if (typeof argument !== "number") {
//       continue
//     }
//     sum += argument
//     counts += 1
//   }

//   return sum / counts

// }

// console.log(calculateAverage(10, 10, 20, 200, "hello")); // 60

//TODO:=========task-3=================
const filmoteka = [
  {
    id: 1,
    title: "Duna",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 10,
    actors: [
      "Amelia Gibson",
      "Cameron Clayton",
      "Viola Vasquez",
      "Lula Collins",
      "Victor Nichols",
    ],
    adult: false,
  },
  {
    id: 2,
    title: "Venom",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 8,
    actors: [
      "Inez Greer",
      "Barry Curtis",
      "Blanche Rios",
      "Glen Perry",
      "Logan Powers",
    ],
    adult: true,
  },
  {
    id: 3,
    title: "Luca",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 9,
    actors: [
      "Marguerite Gibbs",
      "Lora Alvarez",
      "Jorge Simpson",
      "Thomas Hall",
      "Darrell Hunter",
    ],
    adult: false,
  },
  {
    id: 4,
    title: "Free Guy",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 6,
    actors: [
      "Calvin Andrews",
      "Mamie Myers",
      "Madge Townsend",
      "Ralph Kim",
      "Jorge Reese",
    ],
    adult: true,
  },
  {
    id: 5,
    title: "Saw",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 7,
    actors: [
      "Adele Marsh",
      "Melvin Burgess",
      "Jesus Reese",
      "Harriet Moreno",
      "Curtis Cox",
    ],
    adult: true,
  },
];

//? Напишіть функцію getAllTitlesOfFilms(films), яка повертає масив із усіма назвами фільмів.
// function getAllTitlesOfFilms(arr) {
//   let filmTitles = [];
//   for (const { title } of arr) {
//     filmTitles.push(title);
//   }
//   return filmTitles;
// }
// console.log(getAllTitlesOfFilms(filmoteka));
//? Напишіть функцію findFilmByName(films, filmTitle), яка шукає фільм за назвою.
// function findFilmByName(films, filmTitle) {
//   for (const film of films) {
//     if (film.title === filmTitle) {
//       return film;
//     }
//   }
//   return `${filmTitle} не знайдено!`;
// }
// console.log(findFilmByName(filmoteka, "Saw"));
//? Напишіть функцію getAdultFilms(films), яка повертає масив усіх дорослих фільмів.
// function getAdultFilms(films) {
//   const allAdultFilms = [];
//   for (const film of films) {
//     if (film.adult) {
//       allAdultFilms.push(film);
//     }
//   }
//   return allAdultFilms;
// }
// console.log(getAdultFilms(filmoteka));
//? Напишіть функцію getNotAdultFilms(films), яка повертає масив усіх фільмів без обмеження.
// function getNotAdultFilms(films) {
//   const allNotAdultFilms = [];
//   for (const film of films) {
//     if (!film.adult) {
//       allNotAdultFilms.push(film);
//     }
//   }
//   return allNotAdultFilms;
// }
// console.log(getNotAdultFilms(filmoteka));
//TODO:============task-4===============
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.
// const styles = ["Джаз", "Блюз"];
// console.log(styles);
// styles.push("Рок-н-рол");
// console.log(styles);
// styles[1] = "Класика";
// console.log(styles);
// console.log(styles.shift());
// console.log(styles);
// styles.unshift("Реп", "Реггі");
// console.log(styles);
//TODO:============task-5==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

//? Answer
// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Аргументи повинні бути числами!";
//   }
//   return a < b ? a : b;
// }
// //?

// const result = min("123", 2);
// console.log(result); // 5

//TODO:=============task-6=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

//? Answer
// function sumAdjacentNumbers(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     newArr.push(arr[i] + arr[i + 1]);
//   }
//   return newArr;
// }
// //?

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// const result = sumAdjacentNumbers(someArr);
// console.log(result); // [33, 45, 39, 17, 25, 27, 29]
// console.log(someArr);

//TODO:============task-7==============
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

// const musicGenres = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп'];

//? Answer

//?

// logItems(musicGenres);

//TODO:=============task-8=================
// Функція formatMessage(message, maxLength)
// приймає рядок (параметр message) і форматує його,
// якщо довжина перевищує значення параметрі maxLength.

//? Answer

//?

// console.log(formatMessage('Curabitur ligula sapien', 16)); //Повертає 'Curabitur ligula...'.
// console.log(formatMessage('Curabitur ligula sapien', 23)); //Повертає 'Curabitur ligula sapien'.
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); //Повертає 'Nunc sed turpis...'.
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); //Повертає 'Nunc sed turpis a felis in nunc fringilla'.
