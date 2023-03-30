export default function Login() {
    return (
        <div className="flex flex-col justify-center items-center">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" className="bg-whiteSlate ml-1" />
            
            <label htmlFor="email">Password:</label>
            <input type="password" name="password" className="bg-whiteSlate ml-1" />

            <button className="bg-whiteSlate px-3 mt-2">Login</button>
        </div>
    )
}