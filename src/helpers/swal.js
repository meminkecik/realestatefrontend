import Swal from "sweetalert2";

export const swalAlert = (title, icon = "info", text = "") => {
    // icon: info, error, success, warning, question
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonColor: "rgb(7, 84, 112)",
  });
};

export const swalConfirm = (
  title,
  icon = "question",
  text = "",
  confirmButtonText = "Yes",
) => {
  return Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonText,
    confirmButtonColor: "rgb(7, 84, 112)",
  });
};