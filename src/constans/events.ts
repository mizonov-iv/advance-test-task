export interface Event {
    id: number,
    name: string
    address: string
    date: string
    status: string
    comment?: string
}

export const events = [
    {
        "id": 1,
        "name": "Иван Иванов",
        "address": "Самара, проспект Ленина, 26-25",
        "date": "05 февраля 2022",
        "status": "Новый",
        "comment": "доставить до 18:00"
    },
    {
        "id": 2,
        "name": "Петр Петров",
        "address": "Москва, проспект Московский, д.100 кв.1",
        "date": "11 июля 2022",
        "status": "Новый",
        "comment": "нет домофона"
    },
    {
        "id": 3,
        "name": "Степан Степанов",
        "address": "Екатеринбург, улица Челюскинцев, 222",
        "date": "11 июля 2022",
        "status": "Новый",
        "comment": "нет домофона"
    },
    {
        "id": 4,
        "name": "Семен Семенович",
        "address": "Екатеринбург, улица Мамина Сибиряка, 101",
        "date": "01 августа 2023",
        "status": "Новый",
        "comment": "Домофон: 317"
    },
    {
        "id": 5,
        "name": "Афанасий Афанасиевич",
        "address": "Екатеринбург, улица Малышева, 51",
        "date": "16 октября 2023",
        "status": "Новый",
        "comment": "1-ый подъезд"
    },
]
