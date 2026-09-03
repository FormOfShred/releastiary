import { formatDate, isToday } from "@/utils/date";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { addDays } from "date-fns";

type DateNavigatorProps = {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const DatePicker = (
  {
    label,
    date,
    setDate,
    month,
    setMonth
  }: 
  {
    label: string,
    date: Date,
    setDate: (date: Date) => void;
    month: Date;
    setMonth: (month: Date) => void;
  }
) => {
  return (
    <Popover>
      <PopoverTrigger 
        render={
          <Button 
            variant="outline" 
            size="lg" 
            className="hover:bg-accent/10 hover:border-accent/40 hover:text-accent"
            onDoubleClick={() => setDate(new Date())}
          />
        }
      >
        {label}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-background">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          month={month}
          onMonthChange={setMonth}
          className="rounded-lg border"
          required
        />
      </PopoverContent>
    </Popover>
  )
};

const DateNavigator = ({ selectedDate, setSelectedDate }: DateNavigatorProps) => {
  const [calendarMonth, setCalendarMonth] = useState<Date>(new Date());

  const datePickerLabel = isToday(selectedDate) ? "Today" : formatDate(selectedDate, true);

  const goToPreviousDay = () => {
    const date = addDays(selectedDate, -1);

    setSelectedDate(date);
    setCalendarMonth(date);
  };

  const goToNextDay = () => {
    const date = addDays(selectedDate, 1);

    setSelectedDate(date);
    setCalendarMonth(date);
  };

  return (
    <div className="border-b bg-background/50">
      <div className="max-w-6xl mx-auto p-5 flex justify-between items-center flex-wrap gap-2">
        <div className="flex gap-1">
          <Button 
            variant="outline" 
            size="icon-lg" 
            className="hover:bg-accent/10 hover:border-accent/40 hover:text-accent"
            onClick={goToPreviousDay}
          >
            <ChevronLeft />
          </Button>
          <DatePicker 
            label={datePickerLabel} 
            date={selectedDate} 
            setDate={setSelectedDate}
            month={calendarMonth}
            setMonth={setCalendarMonth}
          />
          <Button 
            variant="outline" 
            size="icon-lg" 
            className="hover:bg-accent/10 hover:border-accent/40 hover:text-accent"
            onClick={goToNextDay}
          >
            <ChevronRight />
          </Button>
        </div>
        <div 
          className="flex gap-1"
        >
          <span 
            className="font-bold text-3xl"
          >
            {formatDate(selectedDate)}
          </span>
          <span 
            className="text-sm text-muted-foreground"
          >
            {selectedDate.getFullYear()}
          </span>
        </div>
      </div>
    </div>
  )
}

export default DateNavigator;