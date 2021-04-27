let question_arr = [
  "1. Что означает название бренда Mazda?",
  "2. Как называется символ автомобилей Rolls-Royce в виде статуэтки «летящей девушки»?",
  "3. Помимо автомобилей и мотоциклов, фирма БМВ выпускает",
  "4. Какой девиз у бренда БМВ?",
  "5. Существует легенда о том, что к названию этого автомобиля имел отношение Сталин",
  "6. Как правильно сказать <Спасибо> если вас пропустили на дороге?",
  "7. Что означает название Subaru?",
  "8. Что означает название бренда Acura?",
];
let a1_arr = [
  "Регион в северной части Японии",
  "Парящая леди",
  "Велосипеды",
  "Нам есть что предложить",
  "Победа",
  "Мигнуть дальним светом",
  "Старейший лес на юге Японии",
  "Сокращение от имен создателей бренда",
];
let a2_arr = [
  "Означает успех, достаток",
  "Дух экстаза",
  "Яхты",
  "С удовольствием за рулем",
  "Нива",
  "Поднять руку",
  "Горный массив",
  "Аккуратность, точность",
];
let a3_arr = [
  "Бренд назван по фамилии его основателя",
  "Парящий дух",
  "Самокаты",
  "Для тех кто за рулем",
  "Чайка",
  "Мигнуть 1-2 раза аварийкой",
  "Созвездие Плеяд",
  "Эксклюзивность, роскошь",
];
let answer_arr = [
  "Бренд назван по фамилии его основателя",
  "Дух экстаза",
  "Велосипеды",
  "С удовольствием за рулем",
  "Победа",
  "Мигнуть 1-2 раза аварийкой",
  "Созвездие Плеяд",
  "Аккуратность, точность",
];

let n_right_answer_arr = [3, 2, 1, 2, 1, 3, 3, 2];
let n_answer = 7;
let right_answers = 0;

answers(n_question.value);
btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);

function f_out() {
  console.log(y1.checked);
  console.log(y2.checked);
  console.log(y3.checked);
  if (y1.checked) {
    n_a = 1;
  }
  if (y2.checked) {
    n_a = 2;
  }
  if (y3.checked) {
    n_a = 3;
  }
  console.log(n_a);
  if (n_a == n_right_answer) {
    right_answers += 1;
    answer.classList.add("hidden");
    right_div.classList.remove("hidden");
    wrong_div.classList.add("hidden");
    console.log("n_question.value = " + n_question.value);
    console.log("n_answer = " + n_answer);
    console.log("right_answ = " + right_answers);
    if (n_question.value == n_answer) {
      btn.classList.add("hidden");
      btn2.classList.add("hidden");
      let el1 = document.createElement("p");
      el1.innerHTML = "<b>" + right_answers + "</b>";
      right_div.appendChild(el1);
      alert("Вы завершили прохождение теста.");
      resa.classList.remove("hidden");
    }
  } else {
    right_answers -= 1;
    right_div.classList.add("hidden");
    wrong_div.classList.remove("hidden");
  }

  if (right_answers < 0) {
    right_answers = 0;
  }
  if (right_answers > 8) {
    right_answers = 8;
  }

  if (n_question.value == 0) {
    desc.classList.add("hidden");
    im.classList.add("hidden");
  }
  if (right_answers - n_question.value >= 2) {
    right_answers -= 1;
    console.log("try_count_answ= " + right_answers);
  }
}

function f_out1() {
  answer.classList.toggle("hidden");
  btn1.classList.toggle("opend");
}

function f_out2() {
  right_div.classList.add("hidden");
  k = Number(n_question.value);
  k += 1;
  answers(k);
}

function answers(k) {
  n_question.value = k;
  question.innerHTML = question_arr[n_question.value];
  a1.innerHTML = a1_arr[n_question.value];
  a2.innerHTML = a2_arr[n_question.value];
  a3.innerHTML = a3_arr[n_question.value];
  answer.innerHTML = answer_arr[n_question.value];
  n_right_answer = n_right_answer_arr[n_question.value];
}
