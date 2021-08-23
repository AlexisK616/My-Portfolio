(function () {
  emailjs.init("user_BcrhGRBKXCvvYLaC2HyT2");
})();

forms = document.getElementsByTagName("form");

Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener(
    "submit",
    function (event) {
      emailjs.send("service_ldw7g4q", "template_hzbqtsk", {
        from_name: document.getElementById("fromName").value,
        message: document.getElementById("message").value,
      });

      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (event && form.checkValidity()) {
        messageSend();
        event.preventDefault();
        document.getElementById("fromName").value = "";
        document.getElementById("message").value = "";
      }
      form.classList.add("was-validated");
    },
    false
  );
});

function messageSend() {
  alertMenssageSend = document.getElementById("mensajeEnviado");

  alertMenssageSend.style.display = "block";

  setTimeout(function () {
    alertMenssageSend.style.display = "none";
  }, 3000);
}
