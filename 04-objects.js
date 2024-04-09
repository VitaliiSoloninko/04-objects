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

const logger = {
	keys(withText = true) {
		if (withText) {
			console.log('Object keys:', Object.keys(this))
		} else {
			console.log(Object.keys(this))
		}
	},

	keysAndValues() {
		Object.keys(this).forEach(key => {
			console.log('Key:', key)
			console.log('Value:', this[key])
		})
	},
}

// const bound = logger.keys.bind(person)
// bound(false)
// попередні 2 рядки з іншим записом
// logger.keys.bind(person)()

// 2-3 метод, зразу викливає функцію
// Робля те саме, то яка різниця питання на собесі
// logger.keys.call(person, false)
// // всі параметри тут наприклад це false, false треба передавати через кому
// logger.keys.apply(person, [false])
// // функція прикмає 2 параметри і 2 параметр завжди масив

class Human {
	isHuman = true
	humanGreet() {
		console.log('greet from human')
	}
}
class Person extends Human {
	constructor(name, age) {
		super()
		this.name = name ?? 'Undefined name'
		this.age = age ?? 'Undefined age'
	}
	sayHello() {
		console.log('Hello from', this.name)
	}
	myAge() {
		console.log('My age is', this.age)
	}
}

const person1 = new Person('Vitalii', 36)
const person2 = new Person('Dilya', 35)

person1.sayHello()
person1.myAge()

person2.sayHello()
person2.myAge()

console.log(person1.humanGreet())
