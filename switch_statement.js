const day = "Tuesday"

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log(`今日は${day}。平日です。`)
        break;
    case "Saturday":
        console.log(`今日は${day}。週末です。リラックスしましょう`)
        break;
    default:
        console.log(`今日は${day}。普通の日ですね。`)
}

const fruit = "orange";

switch(fruit) {
    case "apple":
        console.log(`${fruit}は赤いです`)
        break;
    case "banana":
        console.log(`${fruit}は黄色いです`)
        break;
    case "grape":
        console.log(`${fruit}は紫です`)
        break;
    default:
        console.log(`${fruit}は知らない果物です`)
}