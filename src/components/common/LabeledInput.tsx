import { ChangeEvent, Ref } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

interface LabeledInputProps {
  title: string;
  titleSize?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  toggleSwitch?: () => void;
  className?: string;
  ref?: Ref<HTMLInputElement>;
  value?: string;
  defaultValue?: string;
  boxStyle?: string;
  type?: string;
  min?: number;
  max?: number;
  step?: number;
  disableToggle?: boolean;
  isView?: boolean;
}

export default function LabeledInput({
  title,
  titleSize = "text-lg",
  className,
  ref,
  value,
  type,
  min,
  max,
  step,
  defaultValue,
  boxStyle,
  disableToggle = false,
  isView,
  onChange,
  toggleSwitch,
}: Partial<LabeledInputProps>) {
  console.debug("inputlael", title, isView);
  return (
    <div className={boxStyle}>
      <Label className={`text-white font-bold ${title ? "mb-2" : ""} ${titleSize}`}>
        {title}
        {!disableToggle && (
          <Switch
            onClick={toggleSwitch}
            className="bg-gray-300 data-[state=checked]:bg-black"
            checked={isView}
          ></Switch>
        )}
      </Label>
      {isView && (
        <Input
          onChange={onChange}
          ref={ref}
          className={`text-white ${className}`}
          value={value}
          defaultValue={defaultValue}
          type={type}
          min={min}
          max={max}
          step={step}
        />
      )}
    </div>
  );
}
