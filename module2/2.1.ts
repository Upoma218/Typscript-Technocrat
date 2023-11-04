{
    // type assertion   (Here developer understand the type better than typescript)
    /* ------------------------------- */

    let anything: any;

    anything = 'Next level Web development';
    anything = 222;

    // (anything as string).
    // (anything as number).

    const kgToGram = (value: string | number): string | number | undefined=> {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return ` the converted value is ${convertedValue}`;
        } if(typeof value === "number"){
            return value * 1000;
        }
    }
    kgToGram(1000) as number;
    kgToGram('1000') as string;


    type ErroMessage = {
        message: string
    }

try{

} catch(error){
    console.log((error as ErroMessage).message)
}



    // 
}