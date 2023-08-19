const validateDate = (dateString: string) => {
  const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;

  if (!regex.test(dateString)) {
    return false;
  }

  const parts = dateString.split('-');
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  const maxDay = new Date(year, month, 0).getDate();

  return day <= maxDay;
};

export default validateDate;
