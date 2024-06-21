// utils/emailUtils.ts
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export const sendEmail = (
  e: React.FormEvent<HTMLFormElement>,
  formRef: React.RefObject<HTMLFormElement>,
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  e.preventDefault();

  if (!formRef.current) {
    console.error("Form ref is null");
    return;
  }
  emailjs
    .sendForm(
      "service_2i1edhy",
      "template_3hfzy2d",
      formRef.current,
      "tUJ4gzC6m5Wh8bXbK"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert(`${name}, your message was sent`);
        setName("");
        setEmail("");
        setMessage("");
      },
      (error) => {
        console.log(error.text);
      }
    );
};
