type BtnProps = {
  color: string;
  text: string;
  onClick?: () => void;
};

export const CommonButton: React.FC<BtnProps> = ({ color, text, onClick }) => {
  return (
    <button
      className="w-full py-3 text-2xl transition-all cursor-pointer rounded-2xl hover:-translate-y-1"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
