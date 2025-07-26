interface Props {
  onRetry: () => void;
}

const ErrorMessage = ({ onRetry }: Props) => (
  <div className="text-center text-red-600 py-6">
    <p>Something went wrong!</p>
    <button onClick={onRetry} className="mt-2 text-blue-600 underline">
      Retry
    </button>
  </div>
);

export default ErrorMessage;
