import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
function Form() {
  const [formContent, setFormContent] = useState('')

  useEffect(() => {
    // Realiza una solicitud GET para obtener el contenido del formulario
    axios
      .get(
        'https://survey.euro.confirmit.com/wix/4/p805779578144.aspx?clientID=AAAA123'
      )
      .then((response) => {
        // Al recibir la respuesta, establece el contenido del formulario en el estado
        setFormContent(response.data)
      })
      .catch((error) => {
        console.error('Error al cargar el formulario:', error)
      })
  }, [])

  return (
    <div>
      {/* Renderiza el contenido del formulario una vez que se obtiene */}
      <div dangerouslySetInnerHTML={{ __html: formContent }} />
    </div>
  )
}

export default Form