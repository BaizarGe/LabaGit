function getTwoNumbers(): void {
  console.log("Введите первое число:");
  num1 = parseFloat(prompt());
  if (isNaN(num1)) {
    console.log("Ошибка: введите корректное число.");
    getTwoNumbers();
    return;
  }