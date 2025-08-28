export default function LoadMoreButton({ onClick }) {
  return (
    <div className="text-center my-6">
      <button
        onClick={onClick}
        className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
      >
        Load More
      </button>
    </div>
  );
}
