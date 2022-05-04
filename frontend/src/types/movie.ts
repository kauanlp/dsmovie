export type Movie = {
    id: number;
    image: string;
    name: string;
    price: number;
    publicationHour: string;
    link: string;
}

export type MoviePage = {
    content: Movie[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}