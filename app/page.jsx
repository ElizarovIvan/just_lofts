"use client";

export default function Home() {
  return (
    <main className="bg-[#fffaf5] px-6 py-12 max-w-7xl mx-auto">
      {/* Логотип и хедер */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-orange-600">Just Lofts</h1>
        <nav className="space-x-4 text-zinc-800 font-medium">
          <a href="#">Каталог</a>
          <a href="#">Владельцам</a>
          <a href="#">Контакты</a>
        </nav>
      </header>

      {/* ФИЛЬТРЫ */}
      <section className="mb-10">
        <div className="flex flex-wrap justify-center gap-4">
          <select className="border rounded px-4 py-2 w-60">
            <option>Любая станция метро</option>
          </select>
          <select className="border rounded px-4 py-2 w-60">
            <option>Вместимость</option>
          </select>
          <select className="border rounded px-4 py-2 w-60">
            <option>Сценарий</option>
          </select>
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
            Найти
          </button>
        </div>
      </section>

      {/* ПОПУЛЯРНЫЕ ЛОФТЫ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Популярные лофты</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Лофт Индустриальный", price: "от 5.500 ₽/час", metro: "Павелецкая", image: "/loft-1.jpg" },
            { name: "Светлый Лофт", price: "от 5.000 ₽/час", metro: "Крбаточка", image: "/loft-2.jpg" },
            { name: "Лофт Манхэттен", price: "от 2.000 ₽/час", metro: "Курская", image: "/loft-3.jpg" },
            { name: "Lofi Design Студия", price: "от 5.500 ₽/час", metro: "Таганская", image: "/loft-4.jpg" }
          ].map((loft, i) => (
            <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
              <img src={loft.image} alt={loft.name} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-zinc-900">{loft.name}</h3>
                <p className="text-sm text-zinc-600">{loft.price}</p>
                <p className="text-xs text-orange-500">{loft.metro}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ЛОФТЫ ДЛЯ... */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Лофты для…</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {["Вечеринка", "Свадьба", "Фотосессия", "Детский праздник"].map((tag, i) => (
            <div
              key={i}
              className="bg-zinc-200 h-28 rounded-lg flex items-center justify-center text-zinc-800 text-sm font-medium hover:bg-orange-100 cursor-pointer"
            >
              {tag}
            </div>
          ))}
        </div>
      </section>

      {/* ПОЧЕМУ JUST LOFTS */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Почему Just Lofts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>✅ <strong>Удобное расположение</strong> <br /> Удобное расположение, метро</div>
          <div>✅ <strong>Живая поддержка</strong> <br /> Отвечаем быстро и по делу</div>
          <div>📸 <strong>Реальные фото</strong> <br /> Соответствуют реальности</div>
          <div>💰 <strong>Прямые цены</strong> <br /> Без скрытых наценок</div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Отзывы клиентов</h2>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="font-semibold mb-1">Валерия</p>
          <p className="text-zinc-600">Отличное место для вечеринки! Всё организовали быстро, лофт полностью соответствует по фото.</p>
        </div>
      </section>

      {/* ПОМОЧЬ С ПОДБОРОМ */}
      <section className="bg-orange-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Помочь с подбором?</h3>
        <form className="space-y-3">
          <input type="text" placeholder="Имя" className="w-full border rounded px-4 py-2" />
          <input type="tel" placeholder="Телефон" className="w-full border rounded px-4 py-2" />
          <textarea placeholder="Комментарий" className="w-full border rounded px-4 py-2" />
          <button className="bg-orange-500 text-white w-full py-2 rounded hover:bg-orange-600">Отправить</button>
        </form>
      </section>
    </main>
  );
}
