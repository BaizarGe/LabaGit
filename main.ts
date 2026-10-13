function printMenu(): void {
  console.log("\nМеню:");
  console.log("1. Ввести два числа");
  console.log("2. Выполнить сложение");
  console.log("3. Выполнить вычитание");
  console.log("4. Выполнить деление");
  console.log("5. Возвести число в степень 3");
  console.log("6. Выход");
}

let num1: number | null = null;
let num2: number | null = null;

function main(): void {
  printMenu();

  while (true) {
    const choice = parseInt(prompt("Выберите действие:")) as number;
    if (choice >= 1 && choice <= 6) {
      switch (choice) {
        case 1:
          getTwoNumbers();
          break;
        case 2:
          addNumbers();
          break;
        case 3:
          subtractNumbers();
          break;
        case 4:
          divideNumbers();
          break;
        case 5:
          raiseToPower(3);
          break;
        case 6:
          console.log("Завершение работы.");
          return;
        default:
          console.log("Неверный выбор. Попробуйте снова.");
      }
    } else {
      console.log("Неверный выбор. Попробуйте снова.");
    }
  }
}

main();