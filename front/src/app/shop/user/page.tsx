import ButtonLight from '@/components/Button/ButtonLight'

const User = () => {
    return (
        <div className="w-full max-w-sm bg-white border border-black rounded-lg">
            <div className="flex flex-col items-center p-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                <h5 className="mb-4 text-xl font-bold">Agostina Giannelli</h5>
                <p>Email: agostina@mail.com</p>
                <p>Address: Calle 123</p>
                <p>Phone: 665665665</p>
                <div className="mt-8">
                    <ButtonLight>Logout</ButtonLight>
                </div>
            </div>
        </div>
    )
}

export default User