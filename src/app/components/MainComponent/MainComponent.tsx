import AddNewPrompt from "./AddNewPrompt";
import { tempData } from "@/app/helpers/data";
import { ExistingPrompts } from "./ExistingPrompts";

export default function MainComponent() {
  return (
    /* FIXME: ВИСОТА!!!! якась хуйня!!! */
    <div className="w-full h-[550px] p-5 grid grid-cols-3 gap-3 overflow-y-auto overflow-x-hidden">
      {/* Додати новий промпт */}
      <AddNewPrompt />

      {/* Рендеринг існуючих промптів FIXME: підтягувати ці дані з БД */}
      {tempData.map((el) => {
        return <ExistingPrompts key={el.id} data={el} />;
      })}
    </div>
  );
}
