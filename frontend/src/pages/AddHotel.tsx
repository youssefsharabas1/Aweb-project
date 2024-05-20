import { useMutation } from "react-query";
import ManageHotelFormwithoutdelete from "../forms/ManageHotelFormwithoutdelete/ManageHotelForm";
import { useAppContext } from "../contexts/AppContext";
import * as apiClient from "../api-client";

const AddHotel = () => {
  const { showToast } = useAppContext();

  const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      showToast({ message: "Hotel Saved!", type: "SUCCESS" });
      window.location.href = "/"; 
    },
    onError: () => {
      showToast({ message: "Error Saving Hotel", type: "ERROR" });
    },
  });

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };

  return <ManageHotelFormwithoutdelete onSave={handleSave}  isLoading={isLoading} />;
};

export default AddHotel;
