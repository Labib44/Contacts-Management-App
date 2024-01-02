import { useState } from "react";
import { useForm } from "react-hook-form";
import ContactInput from "./ContactInput";
import DragDrop from "../../component/DragDrop/DragDrop";
import toast from "react-hot-toast";


const Contact = () => {
    const [imgUrl, setImgUrl] = useState("");
    const { register, formState: { errors }, handleSubmit, reset } = useForm();



    const handleProduct = (data) => {
        if (!imgUrl || !data.name || !data.email || !data.number || !data.address) {
            return toast.error("Invalid or Empty Input Field!");
        }
        const addData = {
            imageUrl: imgUrl,
            name: data.name,
            email: data.email,
            number: data.number,
            address: data.address,
            // userId: "645675e5233f4bd047ae8bc8",
        };
        console.log('data.....', addData);
        fetch(`${import.meta.env.VITE_SERVER_URI}/blogs`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addData),
        })
            .then((res) => res.json())
            .then(() => {
                toast.success("Contact Added Successfully!");
                reset();
                setImgUrl("");
            });
    };
    return (
        <form
            action=""
            className="flex flex-col mx-auto "
            onSubmit={handleSubmit(handleProduct)}
        >
            <div className="mb-8 mt-4">
                <h2 className="text-gray-700 font-bold pb-5">Upload Profile Picture </h2>

                <DragDrop setImgUrl={setImgUrl} imgUrl={imgUrl} />
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                <div className="h-12 mb-12 mt-4">
                    <label className="text-gray-700 font-bold">Enter Your Name</label>
                    <ContactInput
                        typeName={"text"}
                        register={register}
                        error={errors.name}
                        errorMessagePattern={{
                            required: "Name is required!",
                        }}
                        placeholderName={"Type your Name"}
                        name={"name"}
                    />
                </div>
                <div className="h-12 mb-12 mt-4">
                    <label className="text-gray-700 font-bold">Enert Your Email</label>
                    <ContactInput
                        typeName={"email"}
                        register={register}
                        error={errors.name}
                        errorMessagePattern={{
                            required: "Email is required!",
                        }}
                        placeholderName={"Type your Email"}
                        name={"email"}
                    />
                </div>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                <div className="h-12 mb-12 mt-4">
                    <label className="text-gray-700 font-bold">Enter Your Phone Number</label>
                    <ContactInput
                        typeName={"number"}
                        register={register}
                        error={errors.name}
                        errorMessagePattern={{
                            required: "Phone number is required!",
                        }}
                        placeholderName={"Type your phone number"}
                        name={"number"}
                    />
                </div>
                <div className="h-12 mb-12 mt-4">
                    <label className="text-gray-700 font-bold">Enert Your Address</label>
                    <ContactInput
                        typeName={"text"}
                        register={register}
                        error={errors.name}
                        errorMessagePattern={{
                            required: "Author Name is required!",
                        }}
                        placeholderName={"Type your Address"}
                        name={"address"}
                    />
                </div>
            </div>


            <button
                className="bg-info w-24 rounded-2xl text-white focus:outline-none font-semibold py-4 my-4 text-center"
                type="submit"
            >
                Add
            </button>
        </form>
    );
};

export default Contact;