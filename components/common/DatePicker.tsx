"use client";
import React, { FC, useState } from "react";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "../ui/button";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";
import { digitConverter } from "@/utils/HelperFunctions";

function range(start: number, end: number, step: number) {
  const result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
}

interface IDatePickerProps {
  lang: string;
  placeholder: string;
  addDate: (date: string) => void;
  value: string;
}

const DatePicker: FC<IDatePickerProps> = ({
  lang,
  placeholder,
  addDate,
  value,
}) => {
  const [date, setDate] = useState(new Date());
  const years = range(1980, new Date().getFullYear() + 1, 1);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = new Date(value).getDate();
  const month = new Date(value).getMonth() + 1;
  const year = new Date(value).getFullYear();

  const formattedDate = `${day < 10 ? "0" : ""}${digitConverter(day, lang)}-${
    month < 10 ? "0" : ""
  }${digitConverter(month, lang)}-${digitConverter(year, lang)}`;

  return (
    <div>
      <DateView
        value={formattedDate}
        calendarClassName={`${
          lang === "en" ? "!font-poppins" : "!font-aenk"
        } font-medium overflow-hidden  !border-[2px] !border-accent  !rounded-lg`}
        wrapperClassName="!block"
        placeholderText={placeholder}
        className={`!block w-full rounded-lg active:bg-transparent  focus:bg-transparent bg-transparent border-2 border-primary/50 h-[36px] text-muted-foreground text-[15px] lg:text-[16px] font-light px-2 ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
          lang === "en" ? "!font-poppins" : "!font-anek"
        }`}
        dateFormat="dd-MM-yyyy"
        openToDate={new Date()}
        maxDate={new Date()}
        renderCustomHeader={({
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="m-2 flex justify-between">
            <Button
              variant="ghost"
              size="icon"
              type="button"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              <LucideChevronLeft className="h-4 w-4" />
            </Button>
            <select
              className="font-poppins rounded-md font-medium bg-transparent hover:bg-transparent  cursor-pointer scroll-hidden focus-visible:ring-0 focus:ring-0 px-[2px] !border-[2px] border-primary/20"
              // value={getYear(date)}
              onChange={({ target: { value } }: { target: { value: any } }) =>
                changeYear(value)
              }
            >
              {years.map((option) => (
                <option
                  className="scroll-hidden font-poppins font-medium cursor-pointer px-1"
                  key={option}
                  value={option}
                >
                  {option}
                </option>
              ))}
            </select>

            <select
              className="font-poppins rounded-md bg-transparent hover:bg-transparent font-medium cursor-pointer scroll-hidden focus-visible:ring-0 focus:ring-0 px-[2px] !border-[2px] border-primary/20"
              // value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <Button
              variant="ghost"
              size="icon"
              type="button"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              <LucideChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
        selected={date}
        onChange={(date: any) => {
          setDate(date);
          return addDate(date);
        }}
      />
    </div>
  );
};

export default DatePicker;
