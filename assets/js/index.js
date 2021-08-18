//...........Основной уровень:

//...........1 Вывести знак тире 3 раза

/*
let amount = 3,
  i = 1
while (i <= amount) {
  console.log('-')
  i++
}
*/

//...........2 Решить предыдущую задачу, но количество повторений задаёт пользователь

/*
let amount = +prompt('Введите количество знаков -')
  i = 1
while (i <= amount) {
  console.log('-')
  i++
}
*/

//...........3 Оформить решение задачи 2 в виде функции

/*
let amount = +prompt('Введите количество знаков -')

function user() {
  let i = 1
  while (i <= amount) {
    i++
    console.log('-')
  }
}

user()
*/

//...........4 Написать функции AddNumbers(+), SubNumbers(-), MultNumbers(*), DivNumbers(/), которые выполняют простейшие операции
//...........между числами и вызвать их. Для тестирования числа спросить у пользователя

/*
let number1 = +prompt('Введите первую цифру')
let number2 = +prompt('Введите вторую цифру')

function AddNumbers() {
  result = number1 + number2
  console.log(result)
}
AddNumbers()

function SubNumbers() {
  result = number1 - number2
  console.log(result)
}
SubNumbers()

function MultNumbers() {
  result = number1 * number2
  console.log(result)
}
MultNumbers()

function DivNumbers() {
  result = number1 / number2
  console.log(result)
}
DivNumbers()
*/

//...........5 пользователь вводит число.   Вывести все числа от введённого до нуля

/*
let amount = +prompt('Введите число')

function allNumbers() {
  for (amount; amount >= 0; amount--) {
    console.log(amount)
  }
}
allNumbers()
*/

//...........Высокий уровень:

//...........1 запросить число и его степень в качестве параметров.
//...........не забудьте проверить что степень может быть 0 или отрицательная

/*
let amount = +prompt('Введите число')
let rate = +prompt('Введите степень')

function arguments() {
  result = Math.pow(amount, rate)
  console.log(`Число ${amount} в степени ${rate}`, 'будет равно', result)
}

arguments()
*/

/*
let amount = +prompt('Введите число')
let rate = +prompt('Введите степень')

function arguments() {
  if (rate < 0) {
    result = amount ** rate
    console.log(
      `Число ${amount} в в отрицательной степени ${rate}`,
      'будет равно',
      result,
    )
  } else {
    result = amount ** rate
    console.log(
      `Число ${amount} в положительной степени ${rate}`,
      'будет равно',
      result,
    )
  }
}

arguments()
*/

//...........2 делить число 1000 на 2 до тех пор, пока не получится число меньше 50.
//...........вывести это число (результат) и сколько раз делений произвели

/*
let int = 1000
let num = 0

function divNumbers() {
  while (int >= 50) {
    int /= 2
    num++
  }
  console.log(`Результат деления : ${int}`)
  console.log(`Количество делений : ${num}`)
}

divNumbers()
*/

//3 пользователь вводит число. найти ближайшее к нему, которое кратно на 11

/*
let amount = +prompt('Введите число')

function nearNumber() {
  console.log(Math.round(amount / 11))
}

nearNumber()
*/
