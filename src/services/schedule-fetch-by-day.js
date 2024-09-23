import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

//requisição para ler os dados agendados
export async function scheduleFetchByDay({date}){
  try{
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    const data = await response.json()

    const dailySchedules = data.filter((schedule) => dayjs(date)
  .isSame(schedule.when, "day"))

    return dailySchedules

  }
  catch(error){
    console.log(error)
    alert("it wasn't possible to found the schedules of the selected day.")
  }
}