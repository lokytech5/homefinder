import { create } from 'zustand';
import { SearchParams, SortParams } from '../types';
interface CombinedStore {
    searchParams: SearchParams;
    setSearchParams: (params: SearchParams) => void;
    sortParams: SortParams;
    setSortParams: (params: SortParams) => void;
    clearSearchParams: () => void;
    clearSortParams: () => void;
}

const useSearchStore = create<CombinedStore>((set) => ({
    searchParams: {},
    setSearchParams: (params) => set((state) => ({ ...state, searchParams: params })),
    sortParams: {},
    setSortParams: (params) => set((state) => ({ ...state, sortParams: params })),
    clearSearchParams: () => set({ searchParams: {} }),
    clearSortParams: () => set({ sortParams: {} })

}))


export default useSearchStore