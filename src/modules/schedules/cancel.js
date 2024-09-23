import { scheduleCancel } from "../../services/schedule-cancel.js";
import { schedulesDay } from "./load.js";

const periods = document.querySelectorAll(".period");


periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {

      //obtém o pai do elemento clicado
      const item = event.target.closest("li");
      
      //pega o id que vai remover
      const { id } = item.dataset;

      //confirma que o id foi selecionado
      if (id) {
        //confirma se quer realmente remover
        const isConfirm = confirm(
          "Are you sure you want to cancel this appointment"
        );

        if (isConfirm) {
          //faz a requisição na API
          await scheduleCancel({id})

          //recarrega a lista de agendamentos
          schedulesDay()
        }
      }
    }
  });
});
