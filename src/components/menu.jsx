import { menuItems } from "../data/menu";
import MenuCard from "./menuCard";

function Menu() {
  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center font-display text-3xl font-bold text-brand-dark sm:text-4xl">
        Our Menu
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Menu;