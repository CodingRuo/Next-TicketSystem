"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { useDebouncedCallback } from 'use-debounce'

type SearchInputProps = {
    placeholder: string;
}

const SearchInput = ({ placeholder }: SearchInputProps) => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();
    const handleSearch = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const params = new URLSearchParams(searchParams);

        if(value) {
            params.set("search", value);
        } else {
            params.delete("search");
        }

        replace(`${pathName}?${params.toString()}`, {
            scroll: false
        })
    }, 250)

    return <Input placeholder={placeholder} onChange={handleSearch} />
}

export { SearchInput };