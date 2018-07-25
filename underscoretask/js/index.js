document.addEventListener("DOMContentLoaded", function() {

    function Person(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    var persons = [];
    var personsCount = 10;

    for (var i = 0; i < personsCount; i++) {
        persons.push(new Person("Name" + i, "LastName" + i, i * 2 + 16));
    }

    // посчитать средний возраст всех людей
    var averageAge = _.reduce(persons, function(memo, person) {
        return memo + person.age;

    }, 0) / persons.length;
    console.log("Средний возраст: " + averageAge);


    // Получить список людей с возрастом от 20 до 30 включительно, отсортировать их по возрастанию возраста
    var filteredPersons = _.chain(persons).filter(function(person) {
        return person.age >= 20 && person.age <= 30;
    }).sortBy("age").value();
    console.log("Список людей с возрастом от 20 до 30 включительно, отсортирон по возрастанию возраста");
    console.log(filteredPersons);

    // Добавить всем людям поле fullName, которое состоит из фамилии и имени через пробел
    _.each(persons, function(person) {
        person.fullName = person.lastName + " " + person.name;
    });
    console.log("Добавил всем людям поле fullName, которое состоит из фамилии и имени через пробел");
    console.log(persons);
});
