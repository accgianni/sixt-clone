"use client";

import DeviseSection from "../components/DeviseSection";
import FilterSection from "../components/FilterSection";
import GalerieSection from "../components/GalerieSection";
import HeaderSection from "../components/HeaderSection";
import SloganSection from "../components/SloganSection";
import { getCarList } from "@/services";
import { useState, useEffect } from "react";

export default function Home() {
  const [carList, setCarList] = useState<any>([]);
  const [carFilter, setCarFilter] = useState<any>([]);

  const getCars = async () => {
    const result: any = await getCarList();
    setCarList(result.carLists);
    setCarFilter(result.carLists);
  };

  useEffect(() => {
    getCars();
  }, []);

  const filterBrand = (brand: string) => {
    const filterListByBrand = carFilter.filter(
      (item: any) => item.marque == brand
    );

    setCarList(filterListByBrand);
  };

  const filterPrice = (order: any) => {
    const filterListByPrice = [...carFilter].sort((a, b) =>
      order == -1 ? a.price - b.price : b.price - a.price
    );

    setCarList(filterListByPrice);
  };

  return (
    <>
      <SloganSection />
      <HeaderSection />
      <DeviseSection />
      <FilterSection
        filter={carFilter}
        setBrand={(value: string) => filterBrand(value)}
        orderPrice={(value: string) => filterPrice(value)}
      />
      <GalerieSection content={carList} />
    </>
  );
}
