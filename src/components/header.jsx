const links = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/90 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-3 sm:flex-row sm:justify-between">
        <a href="#home" className="font-display text-2xl font-bold text-brand-dark">
          Saffron House
        </a>
        <nav>
          <ul className="flex gap-4 text-sm sm:gap-6 sm:text-base">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-stone-700 hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;