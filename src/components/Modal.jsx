import { createPortal } from "react-dom";
import { useImperativeHandle, useRef } from "react";

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
    <dialog ref={dialog}>
      {children}
      <form action="dialog">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.querySelector("#modal-root"),
  );
}

export default Modal;
