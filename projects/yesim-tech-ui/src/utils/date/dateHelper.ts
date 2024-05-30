import dayjs from "dayjs";



export function getToday(): string {

    return dayjs(new Date()).format("DD.MM.YYYY");
}


export function getDay(date: Date): string {
    return dayjs(date).format("DD");
}