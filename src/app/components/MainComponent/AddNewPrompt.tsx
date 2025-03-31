import { MdFormatListBulletedAdd } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function AddNewPrompt() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/add-new-prompt");
  };

  return (
    <div
      onClick={handleClick}
      className="bg-[#1dd1a1]/20 h-48 border-2 border-dotted border-[#10ac84] rounded-2xl p-2 cursor-pointer flex flex-col hover:bg-[#1dd1a1]/40 transition-all"
    >
      <div className="flex items-center justify-between">
        <div>
          <MdFormatListBulletedAdd />
        </div>

        <div className="font-bold">Додай свій промпт!</div>
      </div>

      <div className="flex items-center flex-1 text-justify">
        <span className="">
          Додати новий промпт — це ваш шанс отримати більш точні та релевантні
          відповіді, які відповідають саме вашим потребам. Створіть промпт
          зараз, щоб підвищити ефективність і заощадити час!
        </span>
      </div>
    </div>
  );
}
