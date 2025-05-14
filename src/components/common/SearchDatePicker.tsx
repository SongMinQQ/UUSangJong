import { useCallback, useState } from "react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { addMonths, format, formatDate } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { useSearch } from "@/store/store";

export default function SearchDatePicker() {
  const { setDueDate, due_date } = useSearch();
  const [date, setDate] = useState<Date>(new Date(due_date || addMonths(Date.now(), 1)));

  const handleDate = useCallback(
    (date: Date | undefined) => {
      if (date) {
        setDueDate(formatDate(date, "yyyy.MM.dd"));
        setDate(date);
      }
    },
    [setDueDate]
  );

  return (
    <div className="gap-2">
      <Popover>
        <div className="block">
          <p className="text-white font-bold text-lg mb-2">경매 기한</p>

          <PopoverTrigger asChild>
            <Button
              id="date_from"
              name="ABC"
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal text-white bg-transparent",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon />
              {date ? format(date, "LLL dd, y") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
        </div>

        <PopoverContent
          className="w-auto p-4 bg-[#fefdf6] border-none rounded-md z-50"
          align="center"
        >
          <Calendar
            initialFocus
            mode="single"
            selected={date}
            onSelect={handleDate}
            numberOfMonths={1}
            classNames={{
              day_selected: "bg-[#4c4528] text-white",
              day_today: "text-[#4c4528] border-1 rounded-full",
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
