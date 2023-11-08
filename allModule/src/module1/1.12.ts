{
    // Nullable types | Unknown types | never

    // Nullable types
    /* ------------------------------------*/

    const searchName = (value: string | null) => {
        if (value) {
            console.log("Searching...")
        }
        else {

            console.log("There is nothing to search")
        }
    }

    searchName('Upoma');   //result: Searching...
    searchName(null);   //result: There is nothing to search

    // Unknown Types (use typeOf)
    /* --------------------------------------- */

    const getSpeedInMeterPerSecond = (value: unknown) => {
        if(typeof value === 'number'){
            const convertedSpeed = (value * 1000)/3600;
            console.log(`The speed is socnverted to ${convertedSpeed} ms^-1`)
        }
        else if (typeof value === 'string'){
            const [result, unit] = value.split(" ");
            const newConvertedSpeed = (parseFloat(result) * 1000)/3600;
            console.log(newConvertedSpeed,unit)

        }
        else{
            console.log('Wrong input')
        }

    }
    getSpeedInMeterPerSecond(1000);
    getSpeedInMeterPerSecond(`1000 kmh^-1`);
    getSpeedInMeterPerSecond(null);


    // Never type
    /* ------------ */

    const  throwError = (msg: string) : never => {
        throw new Error (msg);
    }

    throwError("It's an error message....!!!!");  //jehetu amra ekhane jani j , ei funtion ta kokhonoi kichu return korbena, tai eta "never" type!
    //
}