import {schedulesDay} from "..//schedules/load"

const selectedDate = document.getElementById("date")

//recarregando as datas com base no dia

selectedDate.onchange = () => schedulesDay()