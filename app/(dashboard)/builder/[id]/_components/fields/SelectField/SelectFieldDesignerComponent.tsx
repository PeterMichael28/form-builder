import { Label } from "@/components/ui/label";
import { FormElementInstance } from "../../FormElements";
import { SelectFieldCustomInstance } from "./SelectFieldFormElement";
import { Select, SelectValue, SelectTrigger } from "@/components/ui/select";


export default function SelectFieldDesignerComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    const element = elementInstance as SelectFieldCustomInstance;
    const { label, required, placeHolder, helperText } = element.extraAttributes;
    return (
      <div className="flex flex-col gap-2 w-full">
        <Label>
          {label}
          {required && "*"}
        </Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={placeHolder} />
          </SelectTrigger>
        </Select>
        {helperText && <p className="text-muted-foreground text-[0.8rem]">{helperText}</p>}
      </div>
    );
  }
  