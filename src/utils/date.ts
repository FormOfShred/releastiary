import { format, isToday as isDateToday } from "date-fns"

export const formatDate = (date: Date, short?: boolean) =>
  format(date, short ? "MMMM d" : "EEEE, MMMM d");

export const isToday = (date: Date) => isDateToday(date);