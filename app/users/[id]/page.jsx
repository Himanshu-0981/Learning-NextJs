import { getUserDetails } from "@/app/utils/features";

const page = async({params}) => {
    const user = await getUserDetails(params.id)
    return (
        <>
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
        </>
    )
}

export default page;