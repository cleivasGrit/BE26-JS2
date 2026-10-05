# Todo-app

En enkel todo-app byggd med TypeScript, Vite och Firebase Realtime Database. Användaren kan lägga till uppgifter, markera dem som klara och ta bort klara uppgifter.

## Filstruktur

```text
.
├── index.html                 # HTML- formuläret för att lägga till uppgifter och div där alla uppgifter visas
└── src/
    ├── main.ts                # Appens startpunkt
    ├── firebaseconfig.ts      # Initierar Firebase-appen och databasen
    ├── models.ts              # Typ för task-data från Firebase
    ├── Task.ts                # Task-klassen med funktioner för ändring och borttagning
    ├── rendertask.ts          # Bygger HTML-kort för en task och hanterar klick
```

## Vad koden gör

- `index.html` innehåller formuläret och elementet `#taskWrapper` där uppgifterna visas. Den laddar `src/main.ts`.
- `firebaseconfig.ts` ansluter appen till Firebase Realtime Database och exporterar databasobjektet `db`.
- `main.ts` importerar db och skapar en referens till todo-noden i databasen. Lyssnar på databasändringar vid todo-referensen med onValue. Så fort en ändring sker skapas ett `Task`-objektför varje task i databasen och ett DOM-kort renderas för varje task. Den hanterar även formulärets submit för att spara en ny uppgift. Så fort en ny ppgift har skapats registereras en ändring vid todo-referensen och Task-objekten renderas igen.
- `models.ts` beskriver strukturen för uppgiftsdata som hämtas från databasen: texten `task` och statusen `isDone`.
- `Task.ts` representerar en uppgift med id, text och status. Klassen kan växla status och ta bort motsvarande post i Firebase.
- `rendertask.ts` skapar ett DOM-kort för uppgiften. Klick på texten växlar isDone. Färdiga uppgifter får en överstrykning och delete-knappen visas. Vid varje änring av isDone och vid varje radering av en upgift registerear firebase en ändring under todo-referensen och alla Tasks renderas igen. 

- `style.css` visar klara uppgifter med överstruken text och styr layouten samt när radera-knappen döljs.

