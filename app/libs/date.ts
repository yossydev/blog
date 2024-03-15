const birthday = {
  year: 2001,
  month: 11,
  date: 24,
};

export function getAge() {
  const today = new Date();
  const thisYearsBirthday = new Date(
    today.getFullYear(),
    birthday.month - 1,
    birthday.date,
  );
  let age = today.getFullYear() - birthday.year;

  if (today < thisYearsBirthday) {
    age--;
  }

  return age;
}
