export const getCurrentDate = () => {
  // // Создаем объект Date с заданной датой
  // const date = new Date('2025-02-10'); // Обратите внимание на формат YYYY-MM-DD

  // // Получаем день, месяц и год
  // const day = String(date.getDate()).padStart(2, '0'); // Добавляем ведущий ноль
  // const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
  // const year = date.getFullYear();

  // // Форматируем дату в нужный формат
  // const formattedDate = `${day}.${month}.${year}`;
  // return formattedDate;

  return new Date().toISOString();
};
