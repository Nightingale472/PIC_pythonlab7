
var groupmates = [
    {
        "name": "Александр",
        "surname": "Иванов",
        "group": "ББТ1702",
        "marks": [4, 3, 5]
    },
    {
        "name": "Иван",
        "surname": "Петров",
        "group": "БСТ1702",
        "marks": [4, 4, 4]
    },
    {
        "name": "Кирилл",
        "surname": "Смирнов",
        "group": "БАП1801",
        "marks": [5, 5, 5]
    },
    {
        "name": "Мария",
        "surname": "Кузнецова",
        "group": "ББТ1702",
        "marks": [5, 4, 4]
    },
    {
        "name": "Ольга",
        "surname": "Соколова",
        "group": "БАП1801",
        "marks": [3, 3, 4]
    }
];

var rpad = function (str, length) {
    str = str.toString();
    while (str.length < length) {
        str = str + ' ';
    }
    return str;
};


var printStudents = function (students) {
    console.log(
        rpad("Имя", 15),
        rpad("Фамилия", 15),
        rpad("Группа", 10),
        rpad("Оценки", 20)
    );
    for (var i = 0; i <= students.length - 1; i++) {
        console.log(
            rpad(students[i]['name'], 15),
            rpad(students[i]['surname'], 15),
            rpad(students[i]['group'], 10),
            rpad(students[i]['marks'], 20)
        );
    }
    console.log('\n');
};

var filterByGroup = function (students, groupName) {
    var result = [];
    for (var i = 0; i < students.length; i++) {
        if (students[i]['group'] === groupName) {
            result.push(students[i]);
        }
    }
    return result;
};

var averageMark = function (student) {
    var marks = student['marks'];
    if (marks.length === 0) return 0;
    var sum = 0;
    for (var i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
};

var filterByAverageMark = function (students, minAvg) {
    var result = [];
    for (var i = 0; i < students.length; i++) {
        if (averageMark(students[i]) > minAvg) {
            result.push(students[i]);
        }
    }
    return result;
};

console.log('Все студенты:');
printStudents(groupmates);

var groupToFilter = prompt("Введите название группы для фильтрации (например, ББТ1702):");
if (groupToFilter !== null && groupToFilter.trim() !== '') {
    console.log('Студенты группы "' + groupToFilter + '":');
    printStudents(filterByGroup(groupmates, groupToFilter.trim()));
}

var minAvgInput = prompt("Введите минимальный средний балл (например, 4.5):");
if (minAvgInput !== null && minAvgInput.trim() !== '') {
    var minAvg = parseFloat(minAvgInput);
    if (!isNaN(minAvg)) {
        console.log('Студенты со средним баллом выше ' + minAvg + ':');
        printStudents(filterByAverageMark(groupmates, minAvg));
    }
}