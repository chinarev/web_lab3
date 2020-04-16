function User(name) {
	this.name = name;
	this.getName = getName;
}

// Допишите код здесь, чтобы программа вывела на консоль ожидаемый результат
function getName(){
	return this.name;
}
const me = new User('Rex');

console.log(me.getName()); // Rex