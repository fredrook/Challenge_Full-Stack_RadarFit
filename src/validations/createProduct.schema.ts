import * as yup from "yup"

const schema = yup.object({
      produto: yup.string().required("'produto' is a required information"),
      valor: yup.number().min(1, "'valor' must be greater than 0").required("'number' is a required information"),
      descricao: yup.string().required("'descricao' is a required information")
    })
    .required("'products' is a required information")

export default schema
