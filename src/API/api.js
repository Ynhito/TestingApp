import Axios from "axios"


export const api = {
  getQuestion() {
    return Axios.get('http://localhost:3000/questions/1')
      .then(response => response.data)
  }
}