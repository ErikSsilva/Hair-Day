import { openingHours } from "../../utils/opening-hours.js";
import dayjs from "dayjs";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

//carrega as horas depois da verificação
export function hoursLoad({ date, dailySchedules }) {
  hours.innerHTML = "";

  //obtem a lista de todos os horários ocupados
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm"))



  const opening = openingHours.map((hour) => {
    //recupera somente a hora
    const [scheduleHour] = hour.split(":");

    //adiciona hora e verifica se está no passado
    const isHourPast = dayjs(date)
      .set("hour", scheduleHour)
      .set("minute", 0)
      .set("second", 0)
      .isBefore(dayjs());

      const available = !unavailableHours.includes(hour) && !isHourPast

    return {
      hour,
      available,
    };
  });

  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");

    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour;

    if (hour === "9:00") {
      hourHeaderAdd("Morning");
    } else if (hour === "13:00") {
      hourHeaderAdd("Afternoon");
    } else if (hour === "18:00") {
      hourHeaderAdd("Night");
    }

    hours.append(li);
  });

  hoursClick();
}

function hourHeaderAdd(tittle) {
  const header = document.createElement("li");
  header.classList.add("hour-period");

  header.textContent = tittle;
  hours.append(header);
}
