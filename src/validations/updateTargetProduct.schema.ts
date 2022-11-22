import * as yup from "yup"

const targetProductSchema = yup.object({
      produto: yup.string(),
      valor: yup.number().min(1, "'valor' must be greater than 0"),
      descricao: yup.string()
    })

export default targetProductSchema
