const UserDetail = () => {
    const user = {
        name: 'John Smith',
        email: 'jsmith@mail.com',
        address: '123 Main St',
        phone: '(123) 456-7890'
    };

    return (
        <div className="overflow-hidden border border-black rounded-lg">
            <div className="px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-black">
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-contrast">
                            Full name
                        </dt>
                        <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                            {user.name}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-contrast">
                            Email address
                        </dt>
                        <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                            {user.email}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-contrast">
                            Phone number
                        </dt>
                        <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                            {user.phone}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-contrast">
                            Address
                        </dt>
                        <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                            {user.address}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export default UserDetail