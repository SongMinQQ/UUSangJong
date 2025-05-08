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
      className="w-[413.62px] h-[790.32px] border-none bg-[#222222b2] fixed [&>button.absolute]:hidden"
    >
      <DialogTitle className="text-white">Search</DialogTitle>
      <Separator className=" bg-white " />
      <Slider inverted={true} />
    </DialogContent>
  );
}

export default memo(SearchModal);
