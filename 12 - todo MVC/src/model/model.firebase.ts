// One Firebase record stored under each task id.
interface FirebaseTask {
    isDone: boolean;
    task: string;
}

export type FirebaseObjs = Record<string, FirebaseTask>;
