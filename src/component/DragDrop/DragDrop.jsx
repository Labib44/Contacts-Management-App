/* eslint-disable react/prop-types */


const DragDrop = ({ imgUrl, setImgUrl }) => {
    const handleOnChange = () => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("image", event.target?.files[0]);
        fetch(
            "https://api.imgbb.com/1/upload?key=9223556d4097bc9742447c10bafbb4cd",
            {
                method: "POST",
                body: formData,
            }
        )
            .then((res) => res.json())
            .then((imgData) => {
                setImgUrl(imgData?.data?.url);
            });
    };
    const handleDeleteImage = () => {
        setImgUrl("");
    };
    return (
        <div className="flex items-center gap-10 lg:flex-row flex-col">
            <div className="w-[50%]">
                <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-40 border-2 border-info border-dashed rounded-lg cursor-pointer bg-gray-50 "
                >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                            aria-hidden="true"
                            className="w-10 h-10 mb-3 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeWidth="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 ">
                            <span className="font-semibold text-primary">
                                Click to upload
                            </span>{" "}
                            or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 ">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                    </div>
                    <input
                        id="dropzone-file"
                        onChange={handleOnChange}
                        type="file"
                        className="hidden"
                    />
                </label>
            </div>
            <div className="w-[30%] flex justify-center">
                {imgUrl && (
                    <div className="relative">
                        <img className="w-full h-[300px]" src={imgUrl} alt="blog image" />
                        <span
                            className="absolute top-0 w-8 h-8 flex justify-center items-center rounded-full bg-black right-0 text-white hover:bg-primary font-extrabold text-lg transition-all cursor-pointer"
                            onClick={handleDeleteImage}
                        >
                            x
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DragDrop;