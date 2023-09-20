import { useState } from "react";
import toast from "react-hot-toast";

const Modal = () => {
    const [isLoading, setIsLoading] = useState(false);

    const formData = (event) => {

        event.preventDefault();
        setIsLoading(true);
        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const confirmation = false;
        if (confirm(`Place Order?
                    Name: ${name}
                    category : ${category}
                    phone : ${phone}
                    email : ${email}`) == true) {
            const formData = { name, category, phone, email, confirmation}
            fetch("https://dream-weave-stations-server.vercel.app/addorders", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsLoading(false);
                    toast.success('successfully Placed Order', {
                        style: {
                            zIndex: '99999999999 !important'
                        }
                    })
                    
                    setTimeout(() => {
                        window.location.href = "https://dreamweavestations.com/";
                    }, 500)


                })
        } else {
            alert('canceled')
            window.location.href = "https://dreamweavestations.com/";
        }

    }


    return (
        <div>
            <div className="flex justify-center">


                <button onClick={() => document.getElementById('my_modal_2').showModal()} className="btn w-[150px] h-[10px] bg-gradient-to-r from-[#B83CB9] to-[#7C47E7] text-white border-[#CFAB5B] scale-75">Book Now</button>
            </div>
            <dialog id="my_modal_2" className="modal">

                <div className="modal-box bg-gradient-to-r from-[#B83CB9] to-[#7C47E7] text-white">
                    <p className="text-lg font-semibold text-center">Please add order details here...</p>
                    <p className="text-center text-xs hidden lg:block">or press [esc] to cancel</p>
                    <div className="modal-action scale-50 block lg:hidden">
                        <form method="dialog">

                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-circle"><span className="text-xs">close</span></button>
                        </form>
                    </div>


                    <div>
                        <ul className="steps mt-3">
                            <li className="step step-warning">Book</li>
                            <li className="step step-warning">Add details</li>
                            <li className="step">Confirm</li>
                            <li className="step">Receive Order</li>
                        </ul>
                    </div>

                    <div>
                        <form onSubmit={formData} className="card-body text-black">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Your name</span>
                                </label>
                                <input type="text" name="name" placeholder="text" className="input input-bordered bg-white" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Order Category</span>
                                </label>
                                <select name="category" className="select select-warning bg-white w-full max-w-xs">
                                    <option disabled selected>Select a Category</option>
                                    <option>Logo Design</option>
                                    <option>Banner Design</option>
                                    <option>Poster Design</option>
                                    <option>Ui/Ux</option>
                                    <option>Web Application</option>
                                    <option>Web Design</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Your phone</span>
                                </label>
                                <input name="phone" type="text" placeholder="text" className="input input-bordered bg-white" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Your email</span>
                                </label>
                                <input name="email" type="email" placeholder="text" className="input input-bordered bg-white" />
                            </div>
                            <div className="form-control mt-6">
                                {
                                    isLoading ? <button disabled className="btn btn-primary bg-[#CFAB5B]"><div className="w-5 h-5 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div></button> :
                                        <button type="submit" className="btn btn-primary bg-[#CFAB5B]">Place Order</button>
                                }

                            </div>
                        </form>
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