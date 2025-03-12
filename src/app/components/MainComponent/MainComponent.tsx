import AddNewPrompt from "./AddNewPrompt";

export default function MainComponent() {
  return (
    /* FIXME: ВИСОТА!!!! якась хуйня!!! */
    <div className="w-full h-[550px] p-5 grid grid-cols-3 gap-3 overflow-y-auto">
      <AddNewPrompt />
      <AddNewPrompt />
      <AddNewPrompt />
      <AddNewPrompt />
      <AddNewPrompt />
      <AddNewPrompt />
      <AddNewPrompt />
      <AddNewPrompt />
      <AddNewPrompt />
    </div>
  );
}
