const LoadMoreButton = ({ onClick }: { onClick: () => void }) => (
  <div className="flex justify-center mt-6">
    <button
      onClick={onClick}
      className="px-6 py-2 text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800 transition"
    >
      Load More
    </button>
  </div>
);

export default LoadMoreButton;
