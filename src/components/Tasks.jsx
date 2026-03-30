import React from "react";
import NewTask from "./NewTask";

export default function Tasks({ onAdd, onDelete, tasks, id }) {
  return (
    <section className="bg-stone-100 p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>

      <NewTask onAdd={onAdd} />

      {tasks.length === 0 && (
        <p className="text-stone-500 my-4 italic">
          This project has no tasks yet.
        </p>
      )}

      {tasks.length > 0 && (
        <ul className="mt-6 space-y-3">
          {tasks.map((task) => {
            return task.projectId === id ? (
              <li
                key={task.id}
                className="flex justify-between items-center bg-white px-4 py-2 rounded-md shadow-sm"
              >
                <span className="text-stone-700">{task.text}</span>

                <button
                  className="text-red-500 hover:text-red-700 font-medium"
                  onClick={() => onDelete(task.id)}
                >
                  Delete
                </button>
              </li>
            ) : (
              ""
            );
          })}
        </ul>
      )}
    </section>
  );
}
