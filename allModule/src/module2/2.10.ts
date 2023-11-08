{
    // mapped types
    /* ----------------------- */

    const arrOfNumber: number[] = [2, 4, 5, 6];

    // const arrOfString : string[] = ['2','4','5','6'];

    const arrOfString: string[] = arrOfNumber.map(
        (number) => number.toString()
    )
    console.log(arrOfString); //[ '2', '4', '5', '6' ]


type AreaNumber = {
    height : number;
    width : number;

}

type Height = AreaNumber['height']; //look up type

// type AreaString = {
//     height : string;
//     width : string;
// }


/* --------------------------------------------- */

// Here,
// ------------

// keyof AreaNumber => "height" | "width"
// T => {height: string; width: string}

// key => T["height"]
// key => T["width"]
/* ----------------------------------------------*/


type AreaString<T> = {
    [ key in keyof T] : T[key];
}

const area1 : AreaString <{height: string; width: number}> = {
    height : '100',
    width: 50
}

    //    
}