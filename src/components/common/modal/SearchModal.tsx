"use client";
import React, { memo, useCallback, useMemo, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { DialogClose, DialogContent, DialogTitle } from "@/components/ui/dialog";
import SearchDatePicker from "../SearchDatePicker";
import LabeledInput from "../LabeledInput";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useSearch } from "@/store/store";

function SearchModal() {
  const {
    setDelivery,
    setDueDate,
    setHighPrice,
    setIsSold,
    setLowPrice,
    setOrderBy,
    setSortBy,
    setTitle,
    low_price,
    high_price,
    title,
    orderBy,
    sortBy,
    delivery,
    is_sold,
  } = useSearch();

  const titleRef = useRef<HTMLInputElement>(null);
  const lowPriceRef = useRef<HTMLInputElement>(null);
  const highPriceRef = useRef<HTMLInputElement>(null);

  const defaultOrderBy = useMemo(() => (orderBy ? orderBy : "title"), [orderBy]);
  const defaultSortBy = useMemo(() => (sortBy ? sortBy : "desc"), [sortBy]);

  const priceRange = useMemo(
    () => [Number(low_price) ?? 0, Number(high_price) ?? 3000000],
    [high_price, low_price]
  );

  console.log(priceRange);

  const handleOrderChange = useCallback(
    (value: string) => {
      setOrderBy(value);
    },
    [setOrderBy]
  );

  const handleSortChange = useCallback(
    (value: string) => {
      setSortBy(value);
    },
    [setSortBy]
  );

  const handleIsSoldChange = useCallback(
    (value: boolean) => {
      setIsSold(value);
    },
    [setIsSold]
  );

  const handlePriceRangeChange = useCallback(
    (range: number[]) => {
      console.log(range);
      setLowPrice(String(range.at(0)));
      setHighPrice(String(range.at(1)));
    },
    [setHighPrice, setLowPrice]
  );

  const handleDeliveryChange = useCallback(
    (value: string) => {
      setDelivery(value);
    },
    [setDelivery]
  );

  const handleSearchClick = useCallback(() => {
    if (titleRef.current?.value) setTitle(titleRef.current.value);
    if (lowPriceRef.current?.value) setLowPrice(lowPriceRef.current.value);
    if (highPriceRef.current?.value) setHighPrice(highPriceRef.current.value);
  }, [setHighPrice, setLowPrice, setTitle]);

  return (
    <DialogContent
      onPointerDownOutside={(e) => e.preventDefault()}
      className="fixed top-[59%] left-[85%] m-0 w-[413.62px] h-[770px] border-none bg-[#222222b2] [&>button.absolute]:hidden"
    >
      {/* Dialog Title */}
      <DialogTitle className="text-white">
        Search
        <div className="flex flex-row justify-around mt-4">
          {/* Sort */}
          <Select onValueChange={handleOrderChange} defaultValue={defaultOrderBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="정렬" />
            </SelectTrigger>
            <SelectContent className="bg-[white]">
              <SelectItem value="title">제목 순</SelectItem>
              <SelectItem value="price">가격 순</SelectItem>
              <SelectItem value="due_date">시간 순</SelectItem>
            </SelectContent>
          </Select>
          <RadioGroup defaultValue={defaultSortBy} onValueChange={handleSortChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="asc" id="r1" />
              <Label htmlFor="r1">오름차순</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="desc" id="r2" />
              <Label htmlFor="r2">내림차순</Label>
            </div>
          </RadioGroup>
        </div>
        <Separator className="mt-5 bg-white " />
      </DialogTitle>
      {/* Title Filter */}
      <LabeledInput
        title="상품명"
        className="w-full border-[white]"
        defaultValue={title}
        ref={titleRef}
      />
      {/* Delivery */}
      <div>
        <Label htmlFor="delivery" className="text-white font-bold text-lg mb-5">
          배송형태
        </Label>
        <RadioGroup
          value={delivery}
          onValueChange={handleDeliveryChange}
          className="text-white flex flex-row justify-around"
          id="delivery"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="quick" id="quick" />
            <Label htmlFor="quick">로켓배송</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="normal" id="normal" />
            <Label htmlFor="normal">일반배송</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="early" id="early" />
            <Label htmlFor="early">새벽배송</Label>
          </div>
        </RadioGroup>
      </div>
      {/* Date Picker */}
      <SearchDatePicker />
      {/* Price Range */}
      <div>
        <Label htmlFor="priceRange" className="text-white font-bold text-lg mb-5">
          가격 범위
        </Label>
        <Slider
          max={3000000}
          className="
    [&_[data-slot=slider-track]]:bg-gray-200
    [&_[data-slot=slider-track]]:h-[0.5px]
    [&_[data-slot=slider-thumb]]:w-5
    [&_[data-slot=slider-thumb]]:h-5
  "
          value={priceRange}
          step={100}
          onValueChange={handlePriceRangeChange}
          id="priceRange"
        />
      </div>
      <div className="flex justify-around">
        <LabeledInput
          title="최소"
          boxStyle="inline w-[150px]"
          className="w-[150px] border-[white]"
          value={Number(low_price ?? 0)?.toLocaleString()}
          onChange={() => {}}
          ref={lowPriceRef}
        />
        <LabeledInput
          title="최대"
          boxStyle="inline w-[150px]"
          className="w-[150px] border-[white]"
          value={Number(high_price ?? 3000000)?.toLocaleString()}
          onChange={() => {}}
          ref={highPriceRef}
        />
      </div>
      {/* isSold Filter */}
      <div className="flex justify-around align-middle">
        <label htmlFor="showAvailableOnly" className="font-bold mt-auto mb-auto text-lg text-white">
          구매 가능한 상품 보기
        </label>
        <Checkbox
          id="showAvailableOnly"
          className=" text-center mt-auto mb-auto text-white ml-2"
          onCheckedChange={handleIsSoldChange}
          checked={is_sold}
        />
      </div>
      {/* Button Group */}
      <div className="flex justify-around align-middle">
        <DialogClose className="w-[150px] text-white">Close</DialogClose>
        <Button
          variant={"outline"}
          onClick={handleSearchClick}
          className="w-[150px] mt-auto mb-auto bg-[#eee9e9] border-none"
        >
          Search
        </Button>
      </div>
    </DialogContent>
  );
}

export default memo(SearchModal);
