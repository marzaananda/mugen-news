export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 mt-12 py-6">
      <div className="max-w-6xl mx-auto text-center text-black text-sm">
        © {new Date().getFullYear()} MyMedia. All rights reserved.
      </div>
    </footer>
  );
}
