const object = {}
// console.log(typeof object) // тип обект
// console.log(typeof null) // помилково теж тип обект

// ====================== Objects

const person = {
	name: 'Vitalii', // key: 'meaning' ключ: 'значення'
	age: 36,
	isYoutuber: false,
	languages: ['ua', 'ru', 'en'],
	address: {
		city: 'Rivne',
		street: 'Soborna',
	},
	'complex key': 'complex value', // якщо 2 слова в ключі, то в лапки треба брати
	// complex value - комплексне значення
	[new Date().getTime()]: 'computed value', // Вичисляємі ключі, computed value - обчислене значення
	['key_' + 21 * 2]: 'computed value2',
	// всередині обєкта можна створювати функцію
	greet() {
		console.log('Greet from person', this)
	},
	// стрілочні функції
	// this не створює свій контекст, тому не визиває в обєкті певний даних
	// він визиває дані загального обєкту window, windows === this = true
	arrow: () => {
		console.log('Person Arrow', this)
	},
	// всередині обєкта визиваємо певне значення
	info() {
		// console.log('Person name', person.name) // це не універсально і називається гавно код
		console.log('Person name', this.name)
	},
}
// console.log(person)
// person.greet()
// person.arrow()
// person.info()

// Як звертатися до даних з обекту
// console.log(person.address)
// console.log(person['address'])
// console.log(person['complex key'])

// динамічний ключ
// const addressKey = 'address'
// console.log(person[addressKey])

// Змінювати дані обекта
// person.age++ // зміна
// person.languages.push('de') // додавання
// console.log(person.age)
// console.log(person.languages)

// person.address = undefined // приховування, не правильно
// delete person.address // видалення
// console.log(person)

// Деструктуризація, в окрему змінну отримати тільки частину обєкту
// Наприклад імя вік мови

// -------------- Destructuring
// const name = person.name
// const age = person.age
// const languages = person.languages

// const name = 'Petr'

// const { age, name: firstName = 'Test', languages } = person
// // name - звідки беремо firstName - нова змінна 'Test' - стандартне значення

// console.log(languages, age, firstName)

// ----------- Ітерація по ключах обекту

// 1 варінат
// якщо використовувати цикл в обєктах, то часто може бути помилка
// for (let key in person) {
// 	// if перевірка, щоб не заходив в глобальний прототип
// 	// питають на співбесіді
// 	if (person.hasOwnProperty(key)) {
// 	}
// 	console.log(person[key])
// }

// 2 варінат

// console.dir(Object) // щоб побачити методи
// на виході ми отримаюмо масив з ключів
// Object.keys(person).forEach(key => {
// 	console.log(person[key])
// })

// Контекст Context this
