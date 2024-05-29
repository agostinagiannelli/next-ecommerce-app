import Heading3xl from "../Text/Heading3xl"

const UserDetail = () => {
    const user = {
        name: 'John Smith',
        email: 'jsmith@mail.com',
        address: '123 Main St',
        phone: '(123) 456-7890'
    };

    return (
        <div>
            <Heading3xl>{user.name}</Heading3xl>
            <p className="my-5 text-lg text-contrast">Email: {user.email}</p>
            <p className="my-5 text-lg text-contrast">Address: {user.address}</p>
            <p className="my-5 text-lg text-contrast">Phone: {user.phone}</p>
        </div>
    )
}

export default UserDetail