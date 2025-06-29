import Swal from "sweetalert2";
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

type SweetAlertIcon = "success" | "error" | "warning" | "info" | "question";

export function notificationAltert(icon: SweetAlertIcon, mensagem: string) {
  Toast.fire({
    icon: icon,
    title: mensagem,
  });
}
