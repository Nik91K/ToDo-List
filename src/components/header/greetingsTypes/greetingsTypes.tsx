const GetGreeting = (): string => {
    const random = Math.random();
    if (random < 0.4) {
        return "Hello";
    }
    const now = new Date()
    const hours = now.getHours()
    const month = now.getMonth()
    const date = now.getDate()
    if ((month === 11 && date === 31) || (month === 0 && date === 1)) {
        return "Happy New Year"
    }
    if ((hours >=5 && hours < 12)) {
        return "Good Morning"
    } else if (hours >= 12 && hours < 17) {
        return "Good Afternoon"
    } else if (hours >= 17 && hours < 22) {
        return "Good Evening"
    } else {
        return "Good Night"
    }
}


export default GetGreeting