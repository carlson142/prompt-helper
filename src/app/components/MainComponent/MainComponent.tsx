import AddNewPrompt from "./AddNewPrompt";
import { tempData } from "@/app/helpers/data";
import { ExistingPrompts } from "./ExistingPrompts";
import { prisma } from "../../../../prisma/seed";

export default async function MainComponent() {
  const allPrompts = await prisma.prompt.findMany();

  return (
    /* FIXME: ВИСОТА!!!! якась хуйня!!! */
    <div className="w-full h-[510px] p-5 grid grid-cols-3 gap-3 overflow-y-auto overflow-x-hidden">
      {/* Додати новий промпт */}
      <AddNewPrompt />

      {allPrompts.map((el) => {
        return <ExistingPrompts key={el.id} data={el} />;
      })}
    </div>
  );
}
