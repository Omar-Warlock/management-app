import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

function NewProject({ onAdd }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDesc = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation...
    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal modal={modal} buttonCaption={"Close"}>
        <h2>Invalid input</h2>
        <p>Oops ... looks like you forgot to enter a value</p>
        <p>Please Make sure you provide a valid value for each input field.</p>
      </Modal>
      <div className="w-[35rem] h-full  text-stone-900 p-10">
        <div className="max-w-3xl mx-auto">
          <menu className="flex items-center justify-end gap-4 mb-8">
            <li>
              <button className="px-4 py-2 text-stone-600 hover:text-stone-900 transition">
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={handleSave}
                className="px-6 py-2 rounded-md bg-stone-900 text-stone-100 hover:bg-stone-700 transition"
              >
                Save
              </button>
            </li>
          </menu>

          <div className="space-y-6">
            <Input ref={title} label="Title" />
            <Input ref={description} label="Description" isTextarea />
            <Input ref={dueDate} label="Due Date" type="date" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewProject;
