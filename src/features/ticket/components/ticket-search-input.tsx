"use client";

import { useQueryState, useQueryStates } from "nuqs";
import { paginationOptions, paginationParser, searchParser } from "../search-params";
import { SearchInput } from "@/components/search-input";

type SearchInputProps = {
    placeholder: string;
} 

const TicketSearchInput = ({ placeholder }: SearchInputProps) => {
    const [search, setSearch] = useQueryState("search", searchParser);
    const [pagination, setPagination] = useQueryStates(paginationParser, paginationOptions);

    const handleSearch = (value: string) => {
        setPagination({ ...pagination, page: 0 });
        setSearch(value);
    }

    return (
        <SearchInput 
            value={search}
            onChange={handleSearch}
            placeholder={placeholder}
        />
    );
}

export { TicketSearchInput }; 