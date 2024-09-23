import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//carrega a data atual
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
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

    console.log({
      id,
      name,
      when,
    });
  } catch (error) {
    alert("Unable to schedule");
    console.log(error);
  }
};
