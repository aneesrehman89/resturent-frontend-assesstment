function StarRating({ value, onChange }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center gap-1">
      {stars.map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star === value ? 0 : star)}
          aria-label={`Rate ${star} out of 5`}
          className={`text-2xl leading-none transition ${
            star <= value ? "text-amber-500" : "text-stone-300 hover:text-amber-300"
          }`}
        >
          ★
        </button>
      ))}
      <span className="ml-2 text-sm text-stone-500">
        {value > 0 ? `${value}/5` : "Rate it"}
      </span>
    </div>
  );
}

export default StarRating;