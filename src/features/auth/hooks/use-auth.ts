import { User as AuthUser } from 'lucia'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getAuth } from '../queries/get-auth';

const useAuth = () => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [isFetched, setFetched] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        const fetchUser = async () => {
            const { user } = await getAuth();
            setUser(user);
            setFetched(true);
        }

        fetchUser();
    }, [pathName]);

    return { user, isFetched }
}

export { useAuth };