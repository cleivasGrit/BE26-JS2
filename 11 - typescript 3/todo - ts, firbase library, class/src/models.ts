// objektet vid varje firebase id
interface FirebaseTask {
    isDone: boolean,
    task: string
}

// Key value pair som det stora firebase objektet kommer innehålla
export type FirebaseObjs = Record<string, FirebaseTask>;




/**
 * 
 * //Här behöver vi definiera en typ 
 * Record kan beskriva ett key value pair
 * {
 *      firebaseid: {
 *              isDone: boolean
 *              task: string
 *          },
 *      firebaseid: {
 *              isDone: boolean
 *              task: string
 *          },
 * }
 * 
 * //en array med instanser av en Task-klass
 * [
 *      {
 *          isDone: boolean
 *          task: string
 *          id: string
 *      },
 *  *      {
 *          isDone: boolean
 *          task: string
 *          id: string
 *      },
 * ]
 * 
 */