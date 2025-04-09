export const uploadImageToCloudinary = async (image: File) => {
  
  const preset_key = "assignment-4";
  const cloud_name = "difnonimq";
  const formData = new FormData();


  formData.append("file", image);
  formData.append("upload_preset", preset_key);
  
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  const result = await res.json();
  return result.secure_url;
};
