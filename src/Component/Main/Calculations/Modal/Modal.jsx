const Modal = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal bg-white/10 backdrop-blur-md">
        <div className="modal-box ">
          <h3 className="font-bold text-lg">Attention!</h3>
          <p className="py-4">
          You have already added this recipe
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="bg-pColor rounded-full py-2 px-7 font-medium ">Got it!</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
