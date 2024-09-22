import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")


//carrega a data atual

selectedDate.value = inputToday

selectedDate.min = inputToday

form.onsubmit = (event) => {
  //previne o comportamento padrão do form
  event.preventDefault()

  console.log("enviado")
}