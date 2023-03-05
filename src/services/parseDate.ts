export const parseDate = (date: Date | string) => {
  return `${new Date(date).getHours()}:${new Date(date).getMinutes()}`;
};
