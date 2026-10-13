function divideNumbers(): void {
  if (num2 === 0) {
    console.log("Ошибка: деление на ноль невозможно.");
    return;
  }
  const result = num1 / num2;
  console.log(`Результат деления: ${result}`);
}