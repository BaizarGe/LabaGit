function getTwoNumbers(): void {
  console.log("Введите первое число:");
  num1 = parseFloat(prompt());
  if (isNaN(num1)) {
    console.log("Ошибка: введите корректное число.");
    getTwoNumbers();
    return;
  }

  console.log("Введите второе число:");
  num2 = parseFloat(prompt());
  if (isNaN(num2)) {
    console.log("Ошибка: введите корректное число.");
    getTwoNumbers();
    return;
  }
}