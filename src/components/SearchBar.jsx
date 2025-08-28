export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Cari artikel..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full md:w-1/3 px-4 py-2 border rounded-full focus:outline-none focus:ring focus:border-blue-400"
    />
  );
}
