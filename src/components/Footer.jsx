import { Facebook, Instagram, Youtube, Linkedin, Twitter, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white mt-12">
      {/* Bagian Atas */}
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 items-start">
        
        {/* Kiri - Logo + Menu */}
        <div className="flex items-start space-x-10">
          <img src="/logo3.png" alt="Logo" className="w-12 h-auto" />
          <div className="flex flex-col space-y-3 text-black">
            <a href="/" className="hover:text-blue-600 transition">Home</a>
            <a href="/blog" className="hover:text-blue-600 transition">Blog</a>
          </div>
        </div>

        {/* Tengah - Kosong untuk jarak */}
        <div></div>

        {/* Kanan - Email dan Sosial Media */}
        <div className="text-right text-black font-medium flex flex-col items-end">
          <div>{/* email nya di sini */}</div>
          <div className="flex justify-end space-x-5 mt-44">
            <a href="#"><Facebook size={22} className="hover:text-blue-600 transition" /></a>
            <a href="#"><Instagram size={22} className="hover:text-pink-600 transition" /></a>
            <a href="#"><Youtube size={22} className="hover:text-red-600 transition" /></a>
            <a href="#"><Linkedin size={22} className="hover:text-blue-700 transition" /></a>
            <a href="#"><Twitter size={22} className="hover:text-sky-500 transition" /></a>
          </div>
        </div>
      </div>

      <hr />

      {/* Bagian Bawah */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-sm text-gray-600">
        <div>Mugen Tsuna`Okami</div>
        <div>© 2025. All Rights Reserved.</div>
        <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
      </div>
    </footer>
  );
}
