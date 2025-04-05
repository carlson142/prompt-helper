type BtnProps = {
  color: string;
  text: string;
  onClick?: () => void;
};

export const CommonButton: React.FC<BtnProps> = ({ color, text, onClick }) => {
  console.log(color);

  return (
    <button
      className="w-full cursor-pointer rounded-2xl py-3 text-2xl hover:-translate-y-1 transition-all"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
