import { useApi } from "./useApi";
import { AuthResponse, AuthResquest } from "@/model/auth";

export default function useAdminApi() {
    const { post } = useApi(`${process.env.NEXT_PUBLIC_BACKOFFICE_BACK_URL}/admin`)

    const authenticate = async (request: AuthResquest): Promise<AuthResponse> => {
        return await post("/auth", request)
    }

    return { authenticate }
}