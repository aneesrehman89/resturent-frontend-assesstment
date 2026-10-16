function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-stone-900 text-stone-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="font-display text-xl text-white">Heaven Homes</h3>
          <p className="mt-2 text-sm">Home-style cooking since 2000.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Visit Us</h4>
          <p className="mt-2 text-sm">12 Main Boulevard, Lahore</p>
          <p className="text-sm">+92 300 0000000</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Hours</h4>
          <p className="mt-2 text-sm">Mon–Thu: 12pm – 11pm</p>
          <p className="text-sm">Fri–Sun: 12pm – 1am</p>
        </div>
      </div>
      <p className="border-t border-stone-700 py-4 text-center text-xs">
        © {year} Heaven Homes. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;