"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="inline w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A4.992 4.992 0 0112 14c1.657 0 3.156.804 4.121 2.057M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconMetro = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="inline w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7m-6-6h12" />
  </svg>
);

export default function Home() {
  const [filters, setFilters] = useState({
    city: "Москва",
    capacity: "",
    metro: "",
    eventType: "",
  });

  const lofts = [
    {
      slug: "loft-industrial",
      name: "Лофт Индустриальный",
      price: "от 3 500 ₽ / час",
      capacity: "до 100 человек",
      metro: "Павелецкая",
      image: "/loft-industrial.jpg",
      description: "Просторный лофт с кирпичными стенами, винтажной мебелью и панорамными окнами.",
      tags: ["Вечеринка", "День рождения"],
    },
    {
      slug: "loft-elegy",
      name: "Лофт Элегия",
      price: "от 4 000 ₽ / час",
      capacity: "до 50 человек",
      metro: "Цветной бульвар",
      image: "/loft-elegy.jpg",
      description: "Уютное пространство с белыми стенами, авторским декором и зоной для фуршета.",
      tags: ["Свадьба", "Фотосессия"],
    },
    {
      slug: "loft-panorama",
      name: "Лофт Панорама",
      price: "от 6 000 ₽ / час",
      capacity: "до 80 человек",
      metro: "Бауманская",
      image: "/loft-panorama.jpg",
      description: "Лофт с огромными окнами и видом на город. Отлично подойдёт для вечеринки или съёмки.",
      tags: ["Фотосессия", "Вечеринка"],
    },
  ];

  const filteredLofts = lofts.filter((loft) => {
    const matchCapacity = !filters.capacity || loft.capacity.includes(filters.capacity);
    const matchMetro = !filters.metro || loft.metro === filters.metro;
    const matchEvent = !filters.eventType || loft.tags?.includes(filters.eventType);
    return matchCapacity && matchMetro && matchEvent;
  });

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-zinc-900">Just Lofts</h1>
        <nav className="space-x-4 text-zinc-700">
          <a href="#" className="hover:text-orange-600 font-medium">Каталог</a>
          <a href="#" className="hover:text-orange-600 font-medium">Владельцам</a>
          <a href="#" className="hover:text-orange-600 font-medium">Контакты</a>
        </nav>
      </header>

      <main className="px-6 py-10 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-2">Найдите идеальный лофт в Москве</h2>
          <p className="text-zinc-600">Для вечеринок, дней рождения, мероприятий и фотосессий</p>
        </div>

        {/* ФИЛЬТРЫ */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <select
            className="border rounded px-4 py-2 w-60"
            onChange={(e) => setFilters({ ...filters, capacity: e.target.value })}
          >
            <option value="">Любое количество человек</option>
            <option value="до 50">до 50 человек</option>
            <option value="до 100">до 100 человек</option>
            <option value="до 150">до 150 человек</option>
          </select>

          <select
            className="border rounded px-4 py-2 w-60"
            onChange={(e) => setFilters({ ...filters, metro: e.target.value })}
          >
            <option value="">Любая станция метро</option>
            <option value="Павелецкая">Павелецкая</option>
            <option value="Цветной бульвар">Цветной бульвар</option>
            <option value="Бауманская">Бауманская</option>
          </select>

          <Button className="w-40" onClick={() => setFilters({ city: "Москва", capacity: "", metro: "", eventType: "" })}>
            Сбросить
          </Button>
        </div>

        {/* СЦЕНАРИИ */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {["День рождения", "Вечеринка", "Свадьба", "Детский праздник", "Фотосессия"].map((tag) => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-full text-sm ${
                filters.eventType === tag
                  ? "bg-orange-500 text-white"
                  : "bg-zinc-100 hover:bg-orange-100 text-zinc-700"
              }`}
              onClick={() => setFilters({ ...filters, eventType: filters.eventType === tag ? "" : tag })}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* ЛОФТЫ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLofts.map((loft, index) => (
            <Link key={index} href={`/loft/${loft.slug}`}>
              <div className="cursor-pointer border rounded-lg overflow-hidden shadow hover:shadow-xl transition hover:scale-[1.01]">
                <img src={loft.image} alt={loft.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{loft.name}</h3>
                  <p className="text-sm text-zinc-600 mb-1"><IconUsers />{loft.capacity}</p>
                  <p className="text-sm text-zinc-600 mb-1"><IconMetro />{loft.metro}</p>
                  <p className="text-orange-600 font-bold text-lg">{loft.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
