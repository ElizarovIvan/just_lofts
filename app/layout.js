// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Just Lofts",
  description: "Найдите идеальный лофт в Москве",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
