const Modal = () => {
    return (
        <div>
            <div className="flex justify-center">
                <button onClick={() => document.getElementById('my_modal_2').showModal()} className="btn w-[150px] h-[10px] bg-gradient-to-r from-[#B83CB9] to-[#7C47E7] text-white border-[#CFAB5B] scale-75">Book Now</button>
            </div>

            <dialog id="my_modal_2" className="modal ">
                <div className="modal-box bg-gradient-to-r from-[#B83CB9] to-[#7C47E7] text-white">
                    <p className="text-lg font-semibold text-center">Please add order details here...</p>
                    <p className="text-center text-xs">or press [esc] to cancel</p>
                    <div>
                        <ul className="steps mt-3">
                            <li className="step step-warning">Book</li>
                            <li className="step step-warning">Add details</li>
                            <li className="step">Confirm</li>
                            <li className="step">Receive Order</li>
                        </ul>
                    </div>
                    <div className="alert bg-gradient-to-r from-[#B83CB9] border-0 shadow-xl to-[#7C47E7] mt-5 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>Currently this part is under construction. Available soon.</span>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default Modal;