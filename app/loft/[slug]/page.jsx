"use client";
import { useParams } from "next/navigation";

const lofts = [
  {
    slug: "loft-industrial",
    name: "Лофт Индустриальный",
    price: "от 3 500 ₽ / час",
    capacity: "до 100 человек",
    metro: "Павелецкая",
    image: "/loft-industrial.jpg",
    description: "Просторный лофт с кирпичными стенами, винтажной мебелью и панорамными окнами.",
  },
  {
    slug: "loft-elegy",
    name: "Лофт Элегия",
    price: "от 4 000 ₽ / час",
    capacity: "до 50 человек",
    metro: "Цветной бульвар",
    image: "/loft-elegy.jpg",
    description: "Уютное пространство с белыми стенами, авторским декором и зоной для фуршета.",
  },
  {
    slug: "loft-panorama",
    name: "Лофт Панорама",
    price: "от 6 000 ₽ / час",
    capacity: "до 80 человек",
    metro: "Бауманская",
    image: "/loft-panorama.jpg",
    description: "Лофт с огромными окнами и видом на город. Отлично подойдёт для вечеринки или съёмки.",
  },
  {
    slug: "loft-a",
    name: "Лайтрум Студия",
    price: "от 2 500 ₽ / час",
    capacity: "до 40 человек",
    metro: "Курская",
    image: "/loft-lightroom.jpg",
    description: "Светлая студия с циклорамой, мягким светом и интерьером в стиле минимализм.",
    tags: ["Фотосессия", "Презентация"],
  },
];

export default function LoftDetail() {
  const params = useParams();
  const slug = params?.slug;

  if (!slug) {
    return <div className="p-10 text-center text-zinc-600">Загрузка...</div>;
  }

  const loft = lofts.find((l) => l.slug === slug);

  if (!loft) {
    return <div className="text-center p-10 text-red-500">Лофт не найден</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <a href="/" className="text-orange-600 underline block mb-4">← Назад к каталогу</a>
      <img src={loft.image} alt={loft.name} className="w-full h-64 object-cover rounded mb-6" />
      <h1 className="text-3xl font-bold mb-2">{loft.name}</h1>
      <p className="text-zinc-600 mb-1">Вместимость: {loft.capacity}</p>
      <p className="text-zinc-600 mb-4">Метро: {loft.metro}</p>
      <p className="text-lg text-zinc-800 mb-6">{loft.description}</p>
      <p className="text-orange-600 font-bold text-xl mb-6">{loft.price}</p>

      <div className="bg-zinc-50 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-2">Оставить заявку</h3>
        <form className="space-y-3">
          <input type="text" placeholder="Ваше имя" className="w-full border px-4 py-2 rounded" />
          <input type="tel" placeholder="Телефон" className="w-full border px-4 py-2 rounded" />
          <input type="datetime-local" className="w-full border px-4 py-2 rounded" />
          <textarea placeholder="Комментарий (необязательно)" className="w-full border px-4 py-2 rounded" />
          <button type="submit" className="w-full bg-orange-500 text-white rounded py-2 hover:bg-orange-600">Отправить</button>
        </form>
      </div>
    </div>
  );
}
