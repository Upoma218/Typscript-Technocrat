{
    // Promises

    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean
    }

    const getToDo = async () : Promise<Todo> => {
        const reponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await reponse.json();
        return data;
    }

    getToDo();


    type Something = { something: string }

    // simulate
    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: "Here is the data" };
            if (data) {
                resolve(data);
            }
            else {
                reject('Failed to resolve data')
            }
        })
    }

    // calling create promise function

    const showData = async (): Promise<Something> => {
        const data: Something = await createPromise();
        return (data);
    }

    showData()

    //    
}