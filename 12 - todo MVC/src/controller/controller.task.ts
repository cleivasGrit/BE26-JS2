import { push, ref, update } from "firebase/database";
import { db } from "../model/firebaseconfig.ts";
import type { Task } from "../model/model.task.ts";

const todoRef = ref(db, "/todo");

export function setupTaskForm(): void {
    const form = document.querySelector<HTMLFormElement>("form");
    if (!form) throw new Error("Task form is missing from the page");

    form.addEventListener("submit", async event => {
        event.preventDefault();
        const input = form.querySelector<HTMLInputElement>("input");
        const taskText = input?.value.trim();
        if (!taskText) return;

        try {
            const taskRef = push(todoRef);
            if (!taskRef.key) throw new Error("Could not create a task id");

            await update(ref(db, `/todo/${taskRef.key}`), { task: taskText, isDone: false });
            form.reset();
        } catch (error) {
            console.error("Could not add task", error);
        }
    });
}

export async function onToggleTask(task: Task): Promise<void> {
    try {
        await task.toggleIsDone();
    } catch (error) {
        console.error("Could not update task", error);
    }
}

export async function onDeleteTask(task: Task): Promise<void> {
    try {
        await task.delete();
    } catch (error) {
        console.error("Could not delete task", error);
    }
}
