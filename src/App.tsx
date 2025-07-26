import ErrorBoundary from './components/ErrorBoundary';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ErrorBoundary fallback={<div className="text-center text-red-500">Oops! Page crashed</div>}>
      <AppRoutes />
    </ErrorBoundary>
  );
}

export default App;
