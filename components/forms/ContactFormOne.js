import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Alert from "./Alert";
import Input from "./Input";

const ContactFormOne = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_th50k1e",
        "template_vjtwz5q",
        form.current,
        "HB7SW8Vsiv8VQVRrZ"
      )
      .then(
        (result) => {
          console.log(result);

          setShowAlert(true);
          setIsMessageSent(true);

          setTimeout(() => {
            setShowAlert(false);
          }, 4000);
        },
        (error) => {
          console.log(error.text);

          setIsMessageSent(false);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Input name="name" label="İsim" isClear={isMessageSent} />
      <Input name="email" label="Email" type="email" isClear={isMessageSent} />
      <Input name="company" label="Şirket İsmi" isClear={isMessageSent} />
      <Input name="phone" label="Telefon" isClear={isMessageSent} />
      <div className="form-group">
        <button className="axil-button btn-large btn-transparent w-100">
          <span className="button-text">Gönder</span>
          <span className="button-icon" />
        </button>
      </div>
      {showAlert && (
        <Alert
          message={
            isMessageSent
              ? "Mesajınız İletildi Teşekkür ederiz."
              : "Birşeyler Ters gitti."
          }
          type={isMessageSent ? "Başarılı" : "Gönderilemedi"}
        />
      )}
    </form>
  );
};

export default ContactFormOne;
