import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FilterSection({ filter, setBrand, orderPrice }: any) {
  const [brandList, setBrandList] = useState<any>([]);

  const brandSet = new Set();

  useEffect(() => {
    if (filter) {
      handlerFilter();
    }
  }, [filter]);

  const handlerFilter = () => {
    filter.forEach((element: any) => {
      brandSet.add(element.marque);
    });

    setBrandList(Array.from(brandSet));
  };

  return (
    <div className="py-6 px-20">
      <div className="flex items-center gap-x-2">
        <Select onValueChange={(e) => orderPrice(e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Trier par" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="-1">Prix du plus bas au plus élevé</SelectItem>
            <SelectItem value="1">Prix du plus élevé au plus bas</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(e) => setBrand(e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Marque" />
          </SelectTrigger>
          <SelectContent>
            {brandList.map((item: string, index: number) => (
              <SelectItem value={item} key={index}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
