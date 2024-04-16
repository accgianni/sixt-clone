"use client";

import { Menu, CarFront, Globe, User } from "lucide-react";
import Logo from "./assets/Logo";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

const menu = [
  { name: "Gérer mes réservations", icon: CarFront },
  { name: "FR | €", icon: Globe },
];

export default function Nav() {
  const { isSignedIn, user } = useUser();

  return (
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center gap-3">
        <Menu className="cursor-pointer" color="white" />
        <Logo />
      </div>

      <ul className="flex items-center -mr-3">
        {menu.map((item, index) => (
          <Link key={index} href="#">
            <li className="flex items-center gap-x-2 px-3 font-bold text-white text-sm tracking-[0.0086em]">
              <item.icon />
              <span className="hidden md:block">{item.name}</span>
            </li>
          </Link>
        ))}

        {isSignedIn ? (
          <li className="flex items-center gap-x-2 px-3 font-bold text-white text-sm tracking-[0.0086em]">
            <UserButton />
            <span className="hidden md:block">{user.firstName}</span>
          </li>
        ) : (
          <Link href="#">
            <li className="flex items-center gap-x-2 px-3 font-bold text-white text-sm tracking-[0.0086em]">
              <User />
              <span className="hidden md:block">Connexion | Inscription</span>
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
}
