import { createPortal } from "react-dom";
import { useImperativeHandle, useRef } from "react";
import Button from "./Button";
function Modal({ children, modal, buttonCaption }) {
  const dialog = useRef();
  useImperativeHandle(modal, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form
        action="dialog"
        className="mt-4 text-right"
        onSubmit={(e) => {
          e.preventDefault();
          dialog.current.close();
        }}
      >
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.querySelector("#modal-root"),
  );
}

export default Modal;
