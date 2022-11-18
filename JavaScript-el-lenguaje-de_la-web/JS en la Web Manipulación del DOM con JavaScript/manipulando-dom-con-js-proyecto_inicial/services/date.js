export const uniqueDates = (task) =>{
    const unique = [];
    task.forEach(task => {
        console.log(task.dateFormat);
        if (!unique.includes(task.dateFormat)) {
            unique.push(task.dateFormat)
        }
    });

    return unique;
}