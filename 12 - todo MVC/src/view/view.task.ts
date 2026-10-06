import type { Task } from "../model/model.task.ts";
import { onDeleteTask, onToggleTask } from "../controller/controller.task.ts";

export function renderTasks(tasks: Task[]): void {
    const taskWrapper = document.querySelector<HTMLDivElement>("#taskWrapper");
    if (!taskWrapper) throw new Error("Task wrapper is missing from the page");

    const cards = tasks.map(getTaskCard);
    taskWrapper.replaceChildren(...cards);
}

function getTaskCard(task: Task): HTMLDivElement {
    const card = document.createElement("div");
    const label = document.createElement("p");
    const deleteButton = document.createElement("button");

    label.innerText = task.task;
    label.classList.toggle("done", task.isDone);
    label.addEventListener("click", () => onToggleTask(task));

    deleteButton.innerText = "X";
    deleteButton.classList.toggle("hidden", !task.isDone);
    deleteButton.addEventListener("click", () => onDeleteTask(task));

    card.append(label, deleteButton);
    return card;
}
