interface Props {
  onClick: () => void;
}

const LoadMoreButton = ({ onClick }: Props) => (
  <div className="text-center mt-6">
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Load More
    </button>
  </div>
);

export default LoadMoreButton;
