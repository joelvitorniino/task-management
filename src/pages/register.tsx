export default function Register() {
    return (
        <div className="flex flex-col justify-center items-center">
        <label htmlFor="firstName" className="font-bold">First Name:</label>
        <input type="text" name="firstName" className="bg-whiteSlate ml-1" />

        <label htmlFor="lastName" className="font-bold">Last Name:</label>
        <input type="text" name="lastName" className="bg-whiteSlate ml-1" />

        <label htmlFor="email" className="font-bold">E-mail:</label>
        <input type="email" name="email" className="bg-whiteSlate ml-1" />
        
        <label htmlFor="email" className="font-bold">Password:</label>
        <input type="password" name="password" className="bg-whiteSlate ml-1" />

        <button className="bg-whiteSlate px-3 mt-2 font-bold">Login</button>
    </div>
    )
}