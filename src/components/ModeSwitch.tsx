type ModeSwitchProps = {
  mode: 'pagination' | 'loadmore';
  onModeChange: (mode: 'pagination' | 'loadmore') => void;
};

const ModeSwitch = ({ mode, onModeChange }: ModeSwitchProps) => {
  return (
    <div className="mt-4 flex justify-center gap-4">
      <button
        onClick={() => onModeChange('pagination')}
        className={`px-4 py-2 rounded ${
          mode === 'pagination' ? 'bg-black text-white' : 'bg-gray-200 text-black'
        }`}
      >
        Page Controls
      </button>
      <button
        onClick={() => onModeChange('loadmore')}
        className={`px-4 py-2 rounded ${
          mode === 'loadmore' ? 'bg-black text-white' : 'bg-gray-200 text-black'
        }`}
      >
        Infinite Scroll
      </button>
    </div>
  );
};

export default ModeSwitch;
