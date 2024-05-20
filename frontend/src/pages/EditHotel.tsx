import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api-client";
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";
import { useAppContext } from "../contexts/AppContext";

const EditHotel = () => {
  const { hotelId } = useParams();
  const { showToast } = useAppContext();

  const { data: hotel } = useQuery(
    "fetchMyHotelById",
    () => apiClient.fetchMyHotelById(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

  const { mutate, isLoading } = useMutation(apiClient.updateMyHotelById, {
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

  const deleteHotel = async () => {
    try {
      if (hotelId) {
        await apiClient.deleteMyHotelById(hotelId);
        showToast({ message: "Hotel Deleted!", type: "SUCCESS" });
        window.location.href = "/"; 
      } else {
        throw new Error("Invalid hotel ID");
      }
    } catch (error) {
      showToast({ message: "Error Deleting Hotel", type: "ERROR" });
    }
  };
  

  return (
    <ManageHotelForm hotel={hotel} onSave={handleSave} onDelete={deleteHotel} isLoading={isLoading} />
  );
};

export default EditHotel;
