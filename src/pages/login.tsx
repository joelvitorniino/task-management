export default function Login() {
    return (
        <div className="flex flex-col justify-center items-center">
            <label htmlFor="email" className="font-bold">Email:</label>
            <input type="email" name="email" className="bg-whiteSlate ml-1" />
            
            <label htmlFor="email" className="font-bold">Password:</label>
            <input type="password" name="password" className="bg-whiteSlate ml-1" />

            <button className="bg-whiteSlate px-3 mt-2 font-bold">Login</button>
        </div>
    )
}