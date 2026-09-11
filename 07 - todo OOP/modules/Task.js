import { baseURL } from "./firebaserequests.js";

export class Task {
    #id;
    #task;
    #isDone;
    #url;

    constructor(id, task, isDone) {
        this.#id = id;
        this.#task = task;
        this.#isDone = isDone;
        this.#url = `${baseURL}/${this.#id}.json`;
    }

    // Firebase methods
    async patchIsDone() {
        const options = {
            method: 'PATCH',
            body: JSON.stringify({ isDone: !this.#isDone }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await fetch(this.#url, options);
            if (!response.ok) {
                throw new Error('Patch failed')
            }
            const data = await response.json();

            // Om patchen lykades behöver vi ändrat värdet å isDone här i klassen så att den stämmer överens med databasen.
            this.#isDone = !this.#isDone;
            return 'Patch succeded!'
        }
        catch (error) {
            throw error;
        }
    }
    async delete() {
        const options = {
            method: 'DELETE'
        };
        try {
            const response = await fetch(this.#url, options);
            if (!response.ok) {
                throw new Error('Delete failed')
            }
            const data = await response.json();
            return 'Task deleted!'
        }
        catch (error) {
            throw error;
        }
    }

    // Getters
    getTask() {
        return this.#task;
    }
    getIsDone() {
        return this.#isDone;
    }
}