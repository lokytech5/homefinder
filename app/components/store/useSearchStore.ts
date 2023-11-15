import { create } from 'zustand';

interface SearchParams {
    city?: string;
    bedrooms?: number;
    type?: string;
}

interface SearchStore {
    searchParams: SearchParams;
    setSearchParams: (params: SearchParams) => void;
}

const useSearchStore = create<SearchStore>((set) => ({
    searchParams: {},
    setSearchParams: (params) => set({searchParams: params})
}))


export default useSearchStore