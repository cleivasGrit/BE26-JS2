import { ref, update, remove } from "firebase/database";
import {type DatabaseReference} from "firebase/database";
import { db } from "./firebaseconfig";

export class Task {
    public readonly id: string;
    public readonly task: string;
    public isDone: boolean;
    private readonly taskRef: DatabaseReference; //ts kan inte infer typen av taskRef här eftersom den inte tilldelas ett värde än (en firebase reference), därför behöver vi importera typen från firebase

    constructor(id:string, task: string, isDone: boolean){
        this.id = id;
        this.task = task;
        this.isDone = isDone;

        this.taskRef = ref(db, '/todo/'+id); //Referensen till en enskild task skapas med hjäl av id:t
    }

    async toggleIsDone(){
        try{
            update(this.taskRef, {isDone: !this.isDone})
        }
        catch(error){
            throw new Error('Toggle isDone failed');
        }
    }

    async delete(){
        try{
            remove(this.taskRef);
        }
        catch(error){
            throw new Error('Delete failed');
        }
    }
}