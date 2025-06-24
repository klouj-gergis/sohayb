import { ShoppingBag, Search, Menu } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n } = useTranslation('global');

  const lang = i18n.language
  
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <header className="w-full bg-olive-dark text-white px-4 sm:px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl sm:text-3xl text-white font-bold">
          <img src="/public/images/logo.png" alt="logo" className="w-40" />
        </a>
        <div className="hidden md:flex gap-5">
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-base items-center">
          <a href="/" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        <div className="flex  border rounded-3xl p-1">
          <button className={` ${lang === 'ar' ? "bg-olive" : ''} p-1 rounded-full text-xs hover:cursor-pointer`} onClick={() => {
            handleChangeLanguage("ar")
          }}>ar</button>
          <button className={` ${lang === 'en' ? "bg-olive" : ''} p-1 rounded-full text-xs hover:cursor-pointer`} onClick={() => {
            handleChangeLanguage("en")
          }}>en</button>
        </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-olive"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 px-2 text-sm">
          <a href="/" className="block hover:underline">Home</a>
          <a href="#about" className="block hover:underline">About</a>
          <a href="#contact" className="block hover:underline">Contact</a>
          <div className="flex  border rounded-3xl p-1 w-fit">
          <button className={` ${lang === 'ar' ? "bg-olive" : ''} p-1 rounded-full text-xs hover:cursor-pointer`} onClick={() => {
            handleChangeLanguage("ar")
          }}>ar</button>
          <button className={` ${lang === 'en' ? "bg-olive" : ''} p-1 rounded-full text-xs hover:cursor-pointer`} onClick={() => {
            handleChangeLanguage("en")
          }}>en</button>
        </div>
        </div>
      )}
    </header>
  );
}
