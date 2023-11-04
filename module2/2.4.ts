{
    // interface - generic

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T,
        bike?: X
    }

    type EmilabWatch = {
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper: Developer<EmilabWatch> = {
        name: 'Jorina',
        computer: {
            brand: 'Asus',
            model: 'X-255UR',
            releaseYear: 2013
        },
        smartWatch: {
            brand: "Emilab",
            model: "kw34",
            display: "OLSH",
        }
    }

    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }
    interface YamahaBike {
        model: string;
        enginecapacity: string
    }

    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: 'Jorina',
        computer: {
            brand: 'Asus',
            model: 'X-255UR',
            releaseYear: 2013
        },
        smartWatch: {
            brand: "Apple",
            model: "kw34",
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            model: 'Yamaha',
            enginecapacity: "100cc"
        }
    }


    //    
}