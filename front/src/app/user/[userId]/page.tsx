"use client"

import ButtonLight from '@/components/Button/ButtonLight'
import Heading4xl from '@/components/Text/Heading4xl'
import UserDetail from "@/components/User/UserDetail"

const User = ({ params }: { params: { userId: number } }) => {
    return (
        <>
            <Heading4xl>Profile</Heading4xl>
            <UserDetail />
            <div className="mt-8">
                <ButtonLight>Logout</ButtonLight>
            </div>
        </>
    )
}

export default User