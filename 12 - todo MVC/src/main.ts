import { onValue, ref } from "firebase/database";
import { db } from "./model/firebaseconfig.ts";
import type { FirebaseObjs } from "./model/model.firebase.ts";
import { Task } from "./model/model.task.ts";
import { setupTaskForm } from "./controller/controller.task.ts";
import { renderTasks } from "./view/view.task.ts";

setupTaskForm();

const todoRef = ref(db, "/todo");
onValue(todoRef, snapshot => {
    const todos = snapshot.val() as FirebaseObjs | null;
    const tasks = todos
        ? Object.entries(todos).map(([id, data]) => new Task(id, data.task, data.isDone))
        : [];

    renderTasks(tasks);
});
