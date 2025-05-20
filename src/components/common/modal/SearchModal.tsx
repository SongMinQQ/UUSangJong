"use client";
import React, { ChangeEvent, memo, useCallback, useMemo, useRef, useState } from "react";
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
import { Switch } from "@/components/ui/switch";

function SearchModal() {
  const {
    setDelivery,
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
    setTitleEnabled,
    setPriceEnabled,
    setDeliveryEnabled,
    titleEnabled,
    priceEnabled,
    deliveryEnabled,
  } = useSearch();

  const titleRef = useRef<HTMLInputElement>(null);
  const lowPriceRef = useRef<HTMLInputElement>(null);
  const highPriceRef = useRef<HTMLInputElement>(null);
  const isSoldRef = useRef<HTMLButtonElement>(null);
  const [orderByValue, setOrderByValue] = useState<string | undefined>(orderBy);
  const [sortByValue, setSortByValue] = useState<string | undefined>(sortBy);
  const [deliveryValue, setDeliveryValue] = useState<string | undefined>(delivery);
  const [isSoldValue, setIsSoldValue] = useState<boolean | undefined>(is_sold);
  const [lowPriceValue, setLowPriceValue] = useState<string | undefined>(low_price);
  const [highPriceValue, setHighPriceValue] = useState<string | undefined>(high_price);

  const priceRange = useMemo(
    () => [Number(lowPriceValue) || 0, Number(highPriceValue) || 3000000],
    [highPriceValue, lowPriceValue]
  );

  const handleOrderChange = useCallback(
    (value: string) => {
      setOrderByValue(value);
    },
    [setOrderByValue]
  );

  const handleSortChange = useCallback(
    (value: string) => {
      setSortByValue(value);
    },
    [setSortByValue]
  );

  const handleIsSoldChange = useCallback(
    (value: boolean) => {
      setIsSoldValue(value);
    },
    [setIsSoldValue]
  );

  const handleLowPriceChange = useCallback(
    (e?: ChangeEvent<HTMLInputElement>, value?: string) => {
      if (value) setLowPriceValue(value);
      if (e) setLowPriceValue(e.target.value);
    },
    [setLowPriceValue]
  );

  const handleHighPriceChange = useCallback(
    (e?: ChangeEvent<HTMLInputElement>, value?: string) => {
      if (value) setHighPriceValue(value);
      if (e) setHighPriceValue(e.target.value);
    },
    [setHighPriceValue]
  );

  const handlePriceRangeChange = useCallback(
    (range: number[]) => {
      handleLowPriceChange(undefined, String(range.at(0)));
      handleHighPriceChange(undefined, String(range.at(1)));
    },
    [handleHighPriceChange, handleLowPriceChange]
  );

  const handleDeliveryChange = useCallback(
    (value: string) => {
      setDeliveryValue(value);
    },
    [setDeliveryValue]
  );

  const handleDisabledTitle = useCallback(() => {
    setTitleEnabled();
  }, [setTitleEnabled]);

  const handleTogglePrice = useCallback(() => {
    setPriceEnabled();
  }, [setPriceEnabled]);

  const handleToggleDelivery = useCallback(() => {
    setDeliveryEnabled();
  }, [setDeliveryEnabled]);

  const handleSearchClick = useCallback(() => {
    if (titleRef.current?.value) setTitle(titleRef.current.value);
    else setTitle(undefined);
    if (lowPriceRef.current?.value) setLowPrice(lowPriceRef.current.value);
    else setLowPrice(undefined);
    if (highPriceRef.current?.value) setHighPrice(highPriceRef.current.value);
    else setHighPrice(undefined);
    setDelivery(deliveryValue);
    setOrderBy(orderByValue!);
    setSortBy(sortByValue!);
    setIsSold(isSoldValue!);
  }, [
    deliveryValue,
    isSoldValue,
    orderByValue,
    setDelivery,
    setHighPrice,
    setIsSold,
    setLowPrice,
    setOrderBy,
    setSortBy,
    setTitle,
    sortByValue,
  ]);

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
          <Select onValueChange={handleOrderChange} value={orderByValue}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="정렬" />
            </SelectTrigger>
            <SelectContent className="bg-[white]">
              <SelectItem value="title">제목 순</SelectItem>
              <SelectItem value="now_price">가격 순</SelectItem>
              <SelectItem value="post_id">시간 순</SelectItem>
            </SelectContent>
          </Select>
          <RadioGroup value={sortByValue} onValueChange={handleSortChange}>
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
        toggleSwitch={handleDisabledTitle}
        isView={titleEnabled}
      />
      {/* Delivery */}
      <div>
        <Label htmlFor="delivery" className="text-white font-bold text-lg mb-5">
          배송형태
          <Switch
            onClick={handleToggleDelivery}
            className="bg-gray-300 data-[state=checked]:bg-black"
            checked={deliveryEnabled}
          />
        </Label>
        {deliveryEnabled && (
          <RadioGroup
            value={deliveryValue}
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
        )}
      </div>
      {/* Date Picker */}
      <SearchDatePicker />
      {/* Price Range */}
      <div>
        <Label htmlFor="priceRange" className="text-white font-bold text-lg mb-5">
          가격 범위
          <Switch
            onClick={handleTogglePrice}
            className="bg-gray-300 data-[state=checked]:bg-black"
            checked={priceEnabled}
          />
        </Label>
        {priceEnabled && (
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
        )}
      </div>
      {priceEnabled && (
        <div className="flex justify-around">
          <LabeledInput
            title="최소"
            boxStyle="inline w-[150px]"
            className="w-[150px] border-[white]"
            value={lowPriceValue}
            onChange={handleLowPriceChange}
            ref={lowPriceRef}
            type={"number"}
            min={0}
            max={Number(high_price)}
            disableToggle={true}
            isView={priceEnabled}
          />
          <LabeledInput
            title="최대"
            boxStyle="inline w-[150px]"
            className="w-[150px] border-[white]"
            value={highPriceValue}
            onChange={handleHighPriceChange}
            ref={highPriceRef}
            type="number"
            min={Number(low_price)}
            max={3000000}
            disableToggle={true}
            isView={priceEnabled}
          />
        </div>
      )}
      {/* isSold Filter */}
      <div className="flex justify-around align-middle">
        <label htmlFor="showAvailableOnly" className="font-bold mt-auto mb-auto text-lg text-white">
          구매 가능한 상품 보기
        </label>
        <Checkbox
          id="showAvailableOnly"
          className=" text-center mt-auto mb-auto text-white ml-2"
          onCheckedChange={handleIsSoldChange}
          checked={isSoldValue}
          ref={isSoldRef}
        />
      </div>
      {/* Button Group */}
      <div className="flex justify-around align-middle">
        <DialogClose className="w-[150px] text-white cursor-pointer">Close</DialogClose>
        <Button
          variant={"outline"}
          onClick={handleSearchClick}
          className="w-[150px] mt-auto mb-auto bg-[#eee9e9] border-none cursor-pointer"
        >
          Search
        </Button>
      </div>
    </DialogContent>
  );
}

export default memo(SearchModal);
