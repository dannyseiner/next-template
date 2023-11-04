import { useQuery } from 'react-query';
import api from '@/api';

export const useFetchPerson = (personId: string) => {
    return useQuery<any, Error>(
        ['person', personId],
        () => api.get(`/people/${personId}`).then((response) => response.data),
        {
            staleTime: 1000 * 60 * 5,
        }
    );
};