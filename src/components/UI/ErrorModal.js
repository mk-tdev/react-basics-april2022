import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

const ErrorModal = ({ closeModal, error, message }) => {
  return ReactDOM.createPortal(
    <div
      className="fixed back-drop-modal w-screen z-50 top-0 left-0 h-screen justify-center items-center flex align-middle"
      onClick={closeModal}
    >
      <div className="z-10">
        <Card>
          <header className="bg-slate-600 text-white -mx-4 -mt-4 p-3">
            {error ? error : "Something went wrong!"}
          </header>

          <div className="my-4 mx-10">
            <h2 className="text-xl text-red-500">
              {message ? message : "Something went wrong!"}
            </h2>
          </div>

          <footer>
            <button className="p-4 text-white bg-teal-800" onClick={closeModal}>
              Okay!
            </button>
          </footer>
        </Card>
      </div>
    </div>,
    document.querySelector("#backdrop-modal-root")
  );
};

export default ErrorModal;
