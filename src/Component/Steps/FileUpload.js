import React, { useRef, useEffect } from "react";

const FileUpload = ({
    selectedFiles,
    setSelectedFiles,
    handleRemoveLogobtn,
}) => {
    const fileInputRef = useRef(null);

    const handleFileUploadChange = (event) => {
        const files = Array.from(event.target.files);
        const allowedExtensionsOnce = ["pdf"];
        const allowedExtensionsMultiple = ["jpg", "jpeg", "png", "webp"];
        let newSelectedFiles = [...selectedFiles];

        let pdfAlreadyAdded = newSelectedFiles.some((file) =>
            allowedExtensionsOnce.includes(file.name.split(".").pop().toLowerCase())
        );
        let imageAlreadyAdded = newSelectedFiles.some((file) =>
            allowedExtensionsMultiple.includes(file.name.split(".").pop().toLowerCase())
        );

        files.forEach((file) => {
            const extension = file.name.split(".").pop().toLowerCase();
            if (allowedExtensionsOnce.includes(extension)) {
                if (pdfAlreadyAdded || imageAlreadyAdded) {
                    alert("You can only add one PDF file or multiple image files.");
                } else {
                    pdfAlreadyAdded = true;
                    newSelectedFiles.push(file);
                }
            } else if (allowedExtensionsMultiple.includes(extension)) {
                if (pdfAlreadyAdded) {
                    alert("You can only add one PDF file or multiple image files.");
                } else {
                    imageAlreadyAdded = true;
                    newSelectedFiles.push(file);
                }
            } else {
                alert(`File with extension ${extension} is not allowed`);
            }
        });

        setSelectedFiles(newSelectedFiles);

        // Clear the input value to allow the same file to be uploaded again
        event.target.value = "";
    };

    const handleRemoveButtonClick = (index) => {
        const updatedFiles = selectedFiles.filter((file, i) => i !== index);
        setSelectedFiles(updatedFiles);
    };

    useEffect(() => {
        if (selectedFiles?.length > 0) {
            const formData = new FormData();
            selectedFiles.forEach((file) => {
                formData.append("files", file);
            });

            // Example: Sending formData to backend automatically
            // Replace with your own logic to send formData whenever selectedFiles change
            fetch('/upload', {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                console.log('Files uploaded successfully:', data);
                // Optionally, perform any actions after successful upload
            })
            .catch(error => {
                console.error('Error uploading files:', error);
                // Handle error if needed
            });
        }
    }, [selectedFiles]); // Trigger upload whenever selectedFiles change

    return (
        <>
            <div style={{ position: "relative" }}>
                <input
                    accept="image/*,application/pdf"
                    type="file"
                    id="select-image"
                    multiple
                    onChange={handleFileUploadChange}
                    ref={fileInputRef}
                    className={`${selectedFiles?.length === 0
                        ? "featureImages_upload_file_input"
                        : "featureImages_upload_file_input featureImages_addzindex"
                        }`}
                />

                {selectedFiles?.length > 0 ? (
                    <div
                        className="quote-imgs-thumbs"
                        style={{
                            maxHeight: "300px",
                            overflowY: "auto",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {selectedFiles.map((file, index) => {
                            const extension = file.name
                                .split(".")
                                .pop()
                                .toLowerCase();
                            const fileName = file.name;
                            const maxLength = 80;
                            return (
                                <div
                                    key={index}
                                    className="multiple_image_upload_box"
                                    style={{
                                        width:
                                            extension === "pdf"
                                                ? "100%"
                                                : "fit-content",
                                        gap: "0px",
                                        position: "relative",
                                    }}
                                >
                                    {["jpg", "jpeg", "png", "webp"].includes(
                                        extension
                                    ) ? (
                                        <img
                                            src={URL.createObjectURL(file)}
                                            alt="uploaded"
                                            className="img-preview-thumb show"
                                        />
                                    ) : (
                                        extension === "pdf" && (
                                            <div
                                                style={{
                                                    marginRight: "30px",
                                                    display: "flex",
                                                    gap: "5px",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <div className="pdf-icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="26"
                                                        height="26"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M8.4636 12.2103C8.4636 11.7543 8.1468 11.4819 7.5882 11.4819C7.3602 11.4819 7.206 11.5041 7.125 11.5257V12.9903C7.221 13.0119 7.3386 13.0197 7.5 13.0197C8.0958 13.0197 8.4636 12.7179 8.4636 12.2103ZM11.9232 11.4963C11.673 11.4963 11.511 11.5185 11.415 11.5407V14.7855C11.511 14.8077 11.6652 14.8077 11.805 14.8077C12.8202 14.8149 13.4826 14.2557 13.4826 13.0713C13.4904 12.0411 12.8868 11.4963 11.9232 11.4963Z"
                                                            fill="#E03838"
                                                        />
                                                        <path
                                                            d="M18.5508 9.58994H18.144V7.62734C18.1437 7.61487 18.1425 7.60244 18.1404 7.59014C18.1411 7.5112 18.1131 7.4347 18.0618 7.37474L14.796 3.64514L14.7936 3.64274C14.7521 3.59773 14.6993 3.56477 14.6406 3.54734L14.6226 3.54134C14.5977 3.53512 14.5721 3.5319 14.5464 3.53174H6.5202C6.1536 3.53174 5.856 3.82994 5.856 4.19594V9.58994H5.4492C4.9248 9.58994 4.5 10.0147 4.5 10.5391V15.4759C4.5 15.9997 4.9254 16.4251 5.4492 16.4251H5.856V19.8049C5.856 20.1709 6.1536 20.4691 6.5202 20.4691H17.4798C17.8458 20.4691 18.144 20.1709 18.144 19.8049V16.4251H18.5508C19.0752 16.4251 19.5 15.9997 19.5 15.4759V10.5391C19.5 10.0147 19.0746 9.58994 18.5508 9.58994ZM6.5202 4.19594H14.214V7.59434C14.214 7.77794 14.3628 7.92614 14.5464 7.92614H17.4804V9.58994H6.5202V4.19594ZM14.6742 13.0339C14.6742 13.9831 14.3286 14.6383 13.8492 15.0427C13.3272 15.4765 12.5328 15.6829 11.5614 15.6829C10.98 15.6829 10.5684 15.6457 10.2882 15.6097V10.7383C10.7004 10.6723 11.2374 10.6357 11.8044 10.6357C12.7458 10.6357 13.3566 10.8049 13.8348 11.1655C14.3502 11.5477 14.6742 12.1585 14.6742 13.0339ZM6.0126 15.6319V10.7383C6.3582 10.6795 6.8442 10.6357 7.5282 10.6357C8.22 10.6357 8.7132 10.7683 9.0438 11.0329C9.36 11.2831 9.573 11.6953 9.573 12.1807C9.573 12.6667 9.4116 13.0783 9.117 13.3579C8.7342 13.7185 8.1678 13.8805 7.5054 13.8805C7.3584 13.8805 7.2258 13.8733 7.1232 13.8583V15.6319H6.0126ZM17.4798 19.6249H6.5202V16.4251H17.4798V19.6249ZM18.4422 11.5921H16.536V12.7255H18.3168V13.6381H16.536V15.6319H15.411V10.6723H18.4422V11.5921Z"
                                                            fill="#E03838"
                                                        />
                                                        <path
                                                            d="M4.44336 11.5554L11.5545 4.44434"
                                                            stroke="white"
                                                            strokeWidth="1.2"
                                                        />
                                                        <path
                                                            d="M11.5545 11.5557L4.44336 4.44455"
                                                            stroke="white"
                                                            strokeWidth="1.2"
                                                        />
                                                    </svg>
                                                </div>
                                                <a
                                                    href={URL.createObjectURL(file)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ color: "#333333" }}
                                                >
                                                    {fileName?.length > maxLength
                                                        ? `${fileName.slice(
                                                            0,
                                                            maxLength
                                                        )}...`
                                                        : fileName}
                                                </a>
                                            </div>
                                        )
                                    )}

                                    <div
                                        className="featureImages_btnContainer"
                                        style={{
                                            position: "absolute",
                                            left: extension !== "pdf" ? "124px" : "",
                                            right: extension === "pdf" ? "4px" : "",
                                            top: extension === "pdf" ? "6px" : "6px",
                                        }}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveButtonClick(index)}
                                            className="featureImages_removeLogobtn"
                                            style={{ backgroundColor: "transparent" }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                            >
                                                <circle
                                                    cx="8"
                                                    cy="8"
                                                    r="8"
                                                    fill="#3968ED"
                                                />
                                                <path
                                                    d="M4.44336 11.5554L11.5545 4.44434"
                                                    stroke="white"
                                                    strokeWidth="1.2"
                                                />
                                                <path
                                                    d="M11.5545 11.5557L4.44336 4.44455"
                                                    stroke="white"
                                                    strokeWidth="1.2"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div
                        className="featureImages_uplaodFile_displaytext_container"
                        style={{ position: "relative ", height: "80px" }}
                    >
                        <p
                            className="featured_image_text fs-13"
                            style={{
                                backgroundColor: "#ECF1FD",
                                color: "#3968ED",
                                marginBottom: "6px",
                                marginTop: "6px",
                            }}
                        >
                            Add Files
                        </p>
                        <p
                            className="featured_image_text_dragdrop fs-13"
                            style={{ color: "#3968ED", marginBottom: "6px" }}
                        >
                            or drop JPG, PNG & PDF images here
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};

export default FileUpload;
