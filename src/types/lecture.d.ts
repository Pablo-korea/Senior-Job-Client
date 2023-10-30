interface CotentHeaderParam {
    [key: string]: string;
}
interface LectureData {
    create_id?: number;
    creator: string;
    max_participants: number;
    current_participants?: number;
    category?: string;
    bank_name?: string;
    account_name?: string;
    account_number?: string;
    price?: number;
    title: string;
    content?: string;
    cycle?: string;
    count?: number;
    cycle?: string;
    count?: number;
    start_date: Dayjs | null;
    end_date: Dayjs | null;
    recruitEnd_date?: Dayjs | null;
    region: string;
    image_url?: string;
    createdDate?: Date;
    status?: string;
}

interface LectureState {
    recruit: boolean;
    wait: boolean;
    progress: boolean;
}

interface LectureCategory {
    home: boolean;
    business: boolean;
    design: boolean;
    development: boolean;
    health: boolean;
    beauty: boolean;
    cooking: boolean;
    etc: boolean;
}

interface lectureFilter {
    region: string;
    status: string[];
    category: string[];
}
interface LectureListOptions {
    sortCondition: string;
    searchKeyword: string;
    filterCondition: lectureFilter;
    page: number;
}

interface LectureListResponse {
    content?: LectureData[];
    totalElements: number;
    totalPages: number;
    number: number;
}

declare module 'CotentHeaderParam';
declare module 'LectureData';
declare module 'LectureState';
declare module 'LectureCategory';
declare module 'lectureFilter';
declare module 'LectureListOptions';
declare module 'LectureListResponse';
