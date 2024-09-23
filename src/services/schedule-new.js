import { apiConfig } from "./api-config.js";

//Fazendo a requisição
export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });
  } catch (error) {
    console.log(error);
    alert("It wasn't possible to schedule. Please try again later.");
  }
}
