export type Project = {
    id: number;
    title: string;
    key: string;
    groups: Group[];
    document_id: string;
};

export type Group = {
    id: number;
    name: string;
};
