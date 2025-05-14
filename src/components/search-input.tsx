"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Input } from "./ui/input";

type SearchInputProps = {
    placeholder: string;
}

const SearchInput = ({ placeholder }: SearchInputProps) => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    };

    return <Input placeholder={placeholder} onChange={handleSearch} />
}

export { SearchInput };