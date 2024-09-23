import { apiConfig } from "./api-config.js";

export async function scheduleCancel ({id}){
  try{
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    })

    alert("Appointment canceled successfully!")
  }
  catch(error){
    console.log(error)
    alert("Unable to cancel appointment.")
  }
}