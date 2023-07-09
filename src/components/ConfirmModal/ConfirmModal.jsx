
const ConfirmModal = ({ message, setConfirm }) => {
    const handleClickDelete = () => { setConfirm("delete") }
    const handleClickClose = () => { setConfirm("close") }

    return (
        <div className="text-md">
            {/* Open the modal using ID.showModal() method */}
            {/* <button className="btn" onClick={() => window.my_modal_1.showModal()}>
                open modal
            </button> */}
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box border-2 border-secondary shadow-md">
                    <h3 className="font-bold text-lg">Warning!</h3>
                    <p className="py-4">Are you sure {message}?</p>
                    <div className="modal-action flex gap-1">
                        {/* if there is a button in the form, it will close the modal */}
                        <button className="btn btn-warning font-bold tracking-wide" onClick={handleClickDelete}>
                            Delete
                        </button>
                        <button className="btn btn-secondary tracking-wide font-extrabold" onClick={handleClickClose}>
                            Close
                        </button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default ConfirmModal;