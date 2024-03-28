const object = {}
console.log(typeof object) // тип обект
console.log(typeof null) // помилково теж тип обект

// ====================== Objects

const person = {
	name: 'Vitalii', // key: 'meaning' ключ: 'значення'
	age: 36,
	isYoutuber: false,
	languages: ['ua', 'ru', 'de', 'en'],
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
console.log(person)
person.greet()
person.arrow()
person.info()
