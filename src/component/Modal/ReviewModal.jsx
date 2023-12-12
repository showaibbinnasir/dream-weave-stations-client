import { useState } from "react";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const ReviewModal = ({refetch}) => {

    const [isLoading, setIsLoading] = useState(false);
    const formData = (event) => {

        event.preventDefault();
        setIsLoading(true);
        const form = event.target;
        const name = form.name.value;
        const rating = form.rating.value;
        const des = form.des.value;
        const imagOne = form.image.files[0]
        const formData = new FormData()
        formData.append('image', imagOne)
        let image = '';
        fetch("https://api.imgbb.com/1/upload?key=63ff49e7f3a9f352605525982cb4b330", {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                image = imageData.data?.url;
                const data = { name, rating, des, image };
                fetch("https://dream-weave-stations-server-showaibbinnasir.vercel.app/addreview", {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json)
                    .then(data => {
                        setIsLoading(false);
                        form.reset();
                        console.log(data);
                        toast.success("Added Review")
                        refetch();
                    })
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div>
            <div className="flex justify-center">


                <button onClick={() => document.getElementById('my_modal_3').showModal()} data-aos="fade-down-right" className="btn w-[150px] h-[10px] bg-gradient-to-r from-[#34256C] to-[#612E8D] text-white border-2 border-[#CFAB5B] mt-2">Submit Review</button>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-gradient-to-r from-[#B83CB9] to-[#7C47E7] text-white">
                    <p className="text-center">Submit Your Review</p>
                    <p className="text-center text-xs hidden lg:block">or press [esc] to cancel</p>
                    <div className="modal-action scale-50 block lg:hidden">
                        <form method="dialog">

                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-circle"><span className="text-xs">close</span></button>
                        </form>
                    </div>

                    <div className="flex justify-center">
                        <ul className="steps mt-3">
                            <li className="step step-warning">Submit Review</li>
                            <li className="step step-warning">Write Review</li>
                            <li className="step">Submit</li>

                        </ul>
                    </div>
                    <form onSubmit={formData} className="flex justify-center">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white text-md">Pick a picture</span>

                            </label>
                            <input name="image" accept=".jpg, .png" type="file" className="file-input file-input-warning bg-white text-black file-input-bordered w-full max-w-xs" required />
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-white text-md">What is your name?</span>
                                </label>
                                <input name="name" type="text" placeholder="Type here" className="input bg-white text-black input-bordered w-full max-w-xs" required />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-white text-md">Your rating (out of 5)</span>
                                </label>
                                <input name="rating" type="text" placeholder="Type here" className="input bg-white text-black input-bordered w-full max-w-xs" pattern="^[1-5]$" title="please add 1 -5" required />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-white text-md">What is your thought?</span>
                                </label>

                                <textarea required name="des" placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs bg-white text-black" ></textarea>

                            </div>
                            <div className="flex justify-center mt-2">
                                {
                                    isLoading ? <button disabled className="btn btn-primary bg-[#CFAB5B]"><div className="w-5 h-5 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div></button> :
                                        <button type="submit" className="btn btn-primary bg-[#CFAB5B]">Submit</button>
                                }
                            </div>
                        </div>

                    </form>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>


            </dialog>

        </div>
    );
};

export default ReviewModal;