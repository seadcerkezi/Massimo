export const generateNewDate = () => {
  const currentDate = new Date();

  // Extract year, month, and day from the current date
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Month is zero-based, so add 1
  const day = currentDate.getDate();

  // Create a formatted date string
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};
