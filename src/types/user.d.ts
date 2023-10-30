interface CotentHeaderParam {
    [key: string]: string;
}
interface UserData {
    phone_number?: number;
    password?: string;
    name?: string;
    birth_date?: Dayjs | null;
    gender?: string;
    job?: string;
    region?: string;
    category?: string;
}

declare module 'CotentHeaderParam';
declare module 'UserData';
