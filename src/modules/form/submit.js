import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new"
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//carrega a data atual
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  //previne o comportamento padrão do form
  event.preventDefault();

  try {
    const name = clientName.value.trim();

    if (!name) {
      return alert("Enter the client name");
    }

    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Select Time");
    }

    const [hour] = hourSelected.innerText.split(":");

    const when = dayjs(selectedDate.value).add(hour, "hour");

    const id = new Date().getTime();

    
    //faz o agendamento
    await scheduleNew({
      id,
      name,
      when,
    });

    //recarrega os agendamentos
    await schedulesDay()


    //limpa o input de nome
    clientName.value = ""
  } catch (error) {
    alert("Unable to schedule");
    console.log(error);
  }
};
