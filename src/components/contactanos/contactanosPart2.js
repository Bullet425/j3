import React from "react"
import styles from "../../css/contactanos/contactanosPart2.module.css"
import emailjs from "emailjs-com"

const ContactanosPart2 = () => {
  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        "gmail",
        "template_DK6mG0JN",
        e.target,
        "user_uwUTku3u3ACJlco465i2I"
      )
      .then(
        result => {
          console.log("Checa tu correo")
        },
        error => {
          console.log("Error al mandar correo")
        }
      )
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <h2 className={styles.formTitle}>Empezemos el proyecto</h2>
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
            />
            <label className={styles.inputLabel} htmlFor="email">
              Email:
            </label>
            <input
              className={styles.formInputs}
              type="email"
              placeholder="Correo"
              name="mail"
              id="email"
            />
            <label className={styles.inputLabel} htmlFor="mensaje">
              Mensaje:
            </label>
            <textarea
              className={styles.descripcion}
              placeholder="Descripcion del problema"
              name="mensaje"
              id="mensaje"
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
