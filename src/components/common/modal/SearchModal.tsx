"use client";
import React, { memo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { DialogClose, DialogContent, DialogTitle } from "@/components/ui/dialog";
import SearchDatePicker from "../SearchDatePicker";
import LabeledInput from "../LabeledInput";
import { Checkbox } from "@/components/ui/checkbox";

function SearchModal() {
  // State for the toggle switch
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  // State for the price range slider
  const [priceRange, setPriceRange] = useState([0, 100]);

  // State for min/max input fields
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <DialogContent
      onPointerDownOutside={(e) => e.preventDefault()}
      className="fixed top-[59%] left-[85%] m-0 w-[413.62px] h-[770px] border-none bg-[#222222b2] [&>button.absolute]:hidden"
    >
      <DialogTitle className="text-white">
        Search
        <Separator className="mt-5 bg-white " />
      </DialogTitle>
      <div className="flex justify-around align-middle">
        <label htmlFor="showAvailableOnly" className="font-bold mt-auto mb-auto text-lg text-white">
          구매 가능한 상품 보기
        </label>
        <Checkbox id="showAvailableOnly" className=" text-center mt-auto mb-auto text-white ml-2" />
      </div>
      <LabeledInput title="상품명" className="w-full border-[white]" defaultValue={minPrice} />
      <SearchDatePicker />
      <Slider
        max={100}
        className="
    [&_[data-slot=slider-track]]:bg-gray-200
    [&_[data-slot=slider-track]]:h-[0.5px]
    [&_[data-slot=slider-thumb]]:w-5
    [&_[data-slot=slider-thumb]]:h-5
  "
        value={priceRange}
      />
      <div className="flex justify-around">
        <LabeledInput
          title="최소"
          boxStyle="inline w-[150px]"
          className="w-[150px] border-[white]"
          defaultValue={minPrice}
        />
        <LabeledInput
          title="최대"
          boxStyle="inline w-[150px]"
          className="w-[150px] border-[white]"
          defaultValue={maxPrice}
        />
      </div>
      <div className="flex justify-around align-middle">
        <DialogClose className="w-[150px] text-white">Close</DialogClose>
        <Button variant={"outline"} className="w-[150px] mt-auto mb-auto bg-[#eee9e9] border-none">
          Search
        </Button>
      </div>
    </DialogContent>
  );
}

export default memo(SearchModal);
