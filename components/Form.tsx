import { CarFront, Bus, Search, Calendar, Plus } from "lucide-react";

export default function Form() {
  return (
    <div className="bg-white p-3 md:pt-4 md:pb-[3.25rem] md:px-6 rounded-2xl">
      <div className="flex item-center gap-2 mb-4">
        <button className="text-white text-sm bg-black rounded-full flex items-center gap-2 p-2 px-3">
          <CarFront size={16} />
          <span>Véhicules</span>
        </button>

        <button className="text-black bg-gray-100 text-sm rounded-full flex items-center gap-2 p-2 px-3">
          <Bus size={16} />
          <span>Utilitaires</span>
        </button>
      </div>

      <div>
        <div className="flex items-center">
          <div className="flex items-end gap-4 grow">
            <div className="basis-1/2">
              <label className="text-xs font-bold">Retrait et retour</label>
              <div className="w-full border border-gray-300 p-3 rounded-xl relative mt-1">
                <Search className="absolute" width={20} />
                <input
                  placeholder="Aéroport, ville ou adresse"
                  type="text"
                  className="outline-none w-full h-full pl-8"
                />
              </div>
            </div>

            <div className="hidden md:flex items-center text-gray-500 basis-1/2 h-14 cursor-pointer pr-4 mr-4">
              <Plus className="mx-2" />
              <span>Lieu de retour différent</span>
            </div>
          </div>

          <div>
            <div className="flex-1 flex items-end gap-x-4">
              <div className="w-[13.5rem]">
                <label className="text-xs font-bold">Date de départ</label>
                <div className="flex items-center mt-1">
                  <button className="border border-gray-300 p-3 rounded-s-xl flex items-center gap-x-2 basis-1/2">
                    <Calendar />
                    <span className="text-nowrap">16. avr.</span>
                  </button>
                  <button className="border border-gray-300 p-3 rounded-r-xl flex items-center gap-x-2 -ml-[1px] basis-1/2">
                    <span>12:30</span>
                  </button>
                </div>
              </div>

              <div className="w-[13.5rem]">
                <label className="text-xs font-bold">Date de retour</label>
                <div className="flex items-center mt-1">
                  <button className="border border-gray-300 p-3 rounded-s-xl flex items-center gap-x-2 basis-1/2">
                    <Calendar />
                    <span className="text-nowrap">20. avr.</span>
                  </button>
                  <button className="border border-gray-300 p-3 rounded-r-xl flex items-center gap-x-2 -ml-[1px] basis-1/2">
                    <span>08:30</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="bg-orange text-white font-bold h-[3.35rem] px-10 rounded-xl"
              >
                Voir les véhicules
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
