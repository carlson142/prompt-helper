import { MdFormatListBulletedAdd } from "react-icons/md";

export default function AddNewPrompt() {
  return (
    <div className="bg-[#1dd1a1]/20 h-48 border-2 border-dotted border-[#10ac84] rounded-2xl p-2 cursor-pointer">
      <div className="flex items-center justify-between">
        <div>
          <MdFormatListBulletedAdd />
        </div>

        <div className="font-bold">Додай свій промпт!</div>
      </div>
    </div>
  );
}
