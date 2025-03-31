type Props = {
  title: string;
  id: string;
};

export const PromptNameComponent: React.FC<Props> = (props) => {
  return (
    <div className="cursor-pointer hover:bg-[var(--primary-fadeGreen)] p-3 transition-all rounded-2xl hover:translate-x-1">
      {props.title}
    </div>
  );
};
