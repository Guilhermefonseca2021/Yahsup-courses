export interface User {
    _id: Object;
    email: string
    name:  string;
    created_at: Date;
    updated_at: Date;
    videos: []
}