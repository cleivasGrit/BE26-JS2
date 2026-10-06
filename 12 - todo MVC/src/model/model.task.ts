import { ref, update, remove } from "firebase/database";
import type { DatabaseReference } from "firebase/database";
import { db } from "./firebaseconfig.ts";

export class Task {
    public readonly id: string;
    public readonly task: string;
    public readonly isDone: boolean;
    private readonly taskRef: DatabaseReference;

    constructor(id: string, task: string, isDone: boolean) {
        this.id = id;
        this.task = task;
        this.isDone = isDone;
        this.taskRef = ref(db, `/todo/${id}`);
    }

    async toggleIsDone(): Promise<void> {
        await update(this.taskRef, { isDone: !this.isDone });
    }

    async delete(): Promise<void> {
        await remove(this.taskRef);
    }
}
