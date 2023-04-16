import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastSuccess = (message) => {
  console.log("************", message);
  toast.success(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

export const toastError = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
