import { ChangeEvent, Ref } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface LabeledInputProps {
  title: string;
  titleSize?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  ref?: Ref<HTMLInputElement>;
  value?: string;
  defaultValue?: string;
  boxStyle?: string;
}

export default function LabeledInput({
  title,
  titleSize = "text-lg",
  className,
  ref,
  value,
  defaultValue,
  boxStyle,
  onChange,
}: Partial<LabeledInputProps>) {
  return (
    <div className={boxStyle}>
      <Label className={`text-white font-bold ${title ? "mb-2" : ""} ${titleSize}`}>{title}</Label>
      <Input
        onChange={onChange}
        ref={ref}
        className={`text-white ${className}`}
        value={value}
        defaultValue={defaultValue}
      />
    </div>
  );
}
