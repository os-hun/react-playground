/*
 * get current date
 *
 */
export function get_current_date(): string {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

