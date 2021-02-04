/*
 * get current date
 *
 */
export function get_current_date(): string {
  const date = new Date();
  return `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`;
}

