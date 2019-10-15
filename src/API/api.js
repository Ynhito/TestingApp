import Axios from "axios"


export const api = {
  getQuestion(data) {
    return Axios.get(`http://localhost:3000/questions/${data}`)
      .then(response => response.data)
  }
}