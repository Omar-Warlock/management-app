import Input from "./Input";

function NewProject() {
  return (
    <div className="w-[35rem] h-full  text-stone-900 p-10">
      <div className="max-w-3xl mx-auto">
        <menu className="flex items-center justify-end gap-4 mb-8">
          <li>
            <button className="px-4 py-2 text-stone-600 hover:text-stone-900 transition">
              Cancel
            </button>
          </li>
          <li>
            <button className="px-6 py-2 rounded-md bg-stone-900 text-stone-100 hover:bg-stone-700 transition">
              Save
            </button>
          </li>
        </menu>

        <div className="space-y-6">
          <Input label="Title" />
          <Input label="Description" isTextarea />
          <Input label="Due Date" type="date" />
        </div>
      </div>
    </div>
  );
}

export default NewProject;
