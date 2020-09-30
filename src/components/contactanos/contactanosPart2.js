import React, { useState } from "react"
import styles from "../../css/contactanos/contactanosPart2.module.css"
import emailjs from "emailjs-com"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const ContactanosPart2 = () => {
  const [inputs, setInputs] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  })

  const [errores, setErrores] = useState(false)

  const onChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  const sendEmail = e => {
    e.preventDefault()

    if (
      inputs.nombre === "" ||
      inputs.telefono === "" ||
      inputs.nombre === "" ||
      inputs.email === "" ||
      inputs.mensaje === ""
    ) {
      setErrores(true)
    } else {
      setErrores(false)
      emailjs
        .sendForm(
          "gmail",
          "template_DK6mG0JN",
          e.target,
          "user_uwUTku3u3ACJlco465i2I"
        )
        .then(
          result => {
            toast.success("Email mandado, Listo!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          },
          error => {
            toast.error("Hubo en problema, intentalo de nuevo mas tarde", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          }
        )
      setInputs({
        nombre: "",
        telefono: "",
        email: "",
        mensaje: "",
      })
    }
  }

  return (
    <div className={styles.container}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <h2 className={styles.formTitle}>Empecemos el proyecto</h2>
          {errores ? (
            <p className={styles.error}>Algun campo se encuentra vacio</p>
          ) : null}
          <form onSubmit={sendEmail}>
            <label className={styles.inputLabel} htmlFor="nombre">
              Nombre:
            </label>
            <input
              className={styles.formInputs}
              type="text"
              placeholder="Nombre Completo"
              name="nombre"
              id="nombre"
              value={inputs.nombre}
              onChange={onChange}
            />
            <label className={styles.inputLabel} htmlFor="telefono">
              Telefono:
            </label>
            <input
              className={styles.formInputs}
              type="tel"
              placeholder="Telefono"
              name="telefono"
              id="telefono"
              value={inputs.telefono}
              onChange={onChange}
            />
            <label className={styles.inputLabel} htmlFor="email">
              Email:
            </label>
            <input
              className={styles.formInputs}
              type="email"
              placeholder="Correo"
              name="email"
              id="email"
              value={inputs.email}
              onChange={onChange}
            />
            <label className={styles.inputLabel} htmlFor="mensaje">
              Mensaje:
            </label>
            <textarea
              className={styles.descripcion}
              placeholder="Descripcion del problema"
              name="mensaje"
              id="mensaje"
              value={inputs.mensaje}
              onChange={onChange}
            />
            <button type="submit" className={styles.formButton}>
              Listo?
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactanosPart2
