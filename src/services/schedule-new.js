import { apiConfig } from "./api-config.js";

//Fazendo a requisição para enviar os dados do agendamento
export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });


//exibe mensagem de agendamento realizado
    alert("Successful scheduling!")
  } catch (error) {
    console.log(error);
    alert("It wasn't possible to schedule. Please try again later.");
  }
}
