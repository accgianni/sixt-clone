import { Luggage, User, Gauge, Check } from "lucide-react";
import Image from "next/image";

export default function Card({ content }: { content: any }) {
  console.log(content);

  const total = content.price * 4;

  return (
    <div className="bg-[url('/images/cardBackground.jpg')] bg-cover bg-center rounded-xl hover:outline hover:outline-offset-4 hover:outline-4 hover:outline-gray-500 cursor-pointer text-white grid grid-rows-[1fr_auto_1fr]">
      <div className="p-4">
        <div className="mb-5">
          <h4 className="font-bold  leading-6">{content.name}</h4>
          <p className="text-[#828287] text-xs">
            ou similaire | {content?.typeOfVehicule}
          </p>
        </div>

        <div className="flex items gap-x-2">
          <div className="flex items-center gap-x-1 rounded-full bg-white/15 h-6 pl-2 pr-3 w-fit">
            <User size={16} />
            <span className="text-xs">{content?.passengers}</span>
          </div>

          <div className="flex items-center gap-x-1 rounded-full bg-white/15 h-6 pl-2 pr-3 w-fit">
            <Luggage size={16} />
            <span className="text-xs">{content?.passengers}</span>
          </div>

          <div className="flex items-center gap-x-1 rounded-full bg-white/15 h-6 pl-2 pr-3 w-fit">
            <Gauge size={16} />
            <span className="text-xs">{content?.gearbox}</span>
          </div>
        </div>
      </div>

      <div className="relative pb-[50%]">
        <Image
          src={content.image.url || "/"}
          alt={content.name}
          fill
          className="object-cover object-center max-w-full"
        />
      </div>

      <div className="mt-auto p-4">
        <div className="flex items-center gap-x-2">
          <Check size={16} color="#3ce900" />
          <span className="text-xs">Incl. 800 km</span>
        </div>

        <div className="flex items-end gap-x-2 mt-2">
          <span className="font-bold text-sm">
            <span className="text-2xl">{content.price}</span> € /jour
          </span>
          <span className="text-[#828287] text-sm leading-6">
            {total} € total
          </span>
        </div>
      </div>
    </div>
  );
}
