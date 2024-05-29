import Heading4xl from '@/components/Text/Heading4xl'
import UserDetail from "@/components/User/UserDetail"

const User = ({ params }: { params: { userId: number } }) => {
    return (
        <>
            {/* User: {params.userId} */}
            <Heading4xl>Profile</Heading4xl>
            <UserDetail />
        </>
    )
}

export default User