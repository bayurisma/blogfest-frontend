import axios from 'axios';

interface Articles {
    id: number;
    title: string;
    description: string;
    body: string;
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const fetchURL: string = 'http://localhost:8000';

const getArticles = async () => {
    const response = await axios.get<Articles[]>(`${fetchURL}/articles`);
    return response.data;
};

const getArticleById = async (id: number) => {
    const res = await axios.get<Articles[]>(`${fetchURL}/articles/${id}`);
    return res.data;
};

export { getArticleById, getArticles };
