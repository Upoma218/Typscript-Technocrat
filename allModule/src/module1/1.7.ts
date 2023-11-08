{
    // Spread operator
    // Rest Operator
    // Destructuring



    // Learning Spread operator
    // for array

    const bros1 : string[] = ['Rifat', 'Rafin', 'Rakib'];
    const bros2 : string[] = ['Dipto', 'Dhrubo','Tanim'];
    bros1.push(...bros2);

    // for object
    const mentors1 = {
        webDevelopment: 'Jhankar Mahbub',
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    };
    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tonmoy',
        cloud: 'Nahid',
    };
    const mentorlist = {
        ...mentors1,
        ...mentors2
    }


    // Learning Rest operator
    const greetFriends = (...friends : string[]) => console.log(`Hi ${friends}`);
    greetFriends('Toma', 'Roma', 'Soma'); //By rest operator, we can dynamically send any number of element in an array
}