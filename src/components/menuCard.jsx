import StarRating from "./starRating";


function MenuCard({ item, rating, onRate}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm">
      <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <span className="whitespace-nowrap font-bold text-brand">Rs. {item.price}</span>
        </div>
        <p className="text-sm text-stone-600">{item.description}</p>
        <StarRating value={rating} onChange={onRate} />
        <span className="mt-auto w-fit rounded-full bg-amber-100 px-3 py-1 text-xs text-brand-dark">
          {item.category}
        </span>
      </div>
    </article>
  );
}

export default MenuCard;