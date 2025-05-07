import { useCallback, useState } from "react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { DateRange } from "react-day-picker";
import { addDays, addMonths, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";

export default function SearchDatePicker() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addMonths(new Date(), 1),
  });

  const handleDate = useCallback((range: DateRange | undefined) => {
    console.log(range);
    if (range?.from && range?.to && range.to < range.from) {
      setDateRange({ from: range.to, to: range.from });
    } else {
      setDateRange(range);
    }
  }, []);

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
                !dateRange && "text-muted-foreground"
              )}
            >
              <CalendarIcon />
              {dateRange?.from ? (
                dateRange.to ? (
                  <>
                    {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                  </>
                ) : (
                  format(dateRange.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
        </div>

        <PopoverContent className="w-auto p-0 border-none" align="start">
          <Calendar
            initialFocus
            mode="range"
            selected={dateRange}
            onSelect={handleDate}
            numberOfMonths={2}
            className="bg-white rounded-sm border-none"
            classNames={{
              day_range_start:
                "bg-indigo-600 text-white hover:bg-indigo-700 font-semibold shadow-md",
              day_range_middle: "bg-indigo-100 text-indigo-700 rounded-none",
              day_range_end: "bg-indigo-600 text-white hover:bg-indigo-700 font-semibold shadow-md",
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
