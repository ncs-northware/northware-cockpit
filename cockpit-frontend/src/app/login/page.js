import { useFetchUser } from "helpers/auth"



export default function Login(props,logout) {
    const {user, loading} = useFetchUser();
    return(
        <div>
            {!loading && !user ? (
                <div className="p-9" >
                    <h1 className='text-center'>Login</h1>
                    <form onSubmit={props.handleSubmit} className="flex flex-col">
                        <div class="form-floating my-3">
                            <input type="text" name="identifier" id="input-identifier" onChange={props.handleChange} required class="form-control-lg peer" placeholder=" " />
                            <label for="input-identifier" class="peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Benutzername</label>
                        </div>
        
                        <div class="form-floating my-3">
                            <input type="password" name="password" id="input-password" onChange={props.handleChange} required class="form-control-lg peer" placeholder=" " />
                            <label for="input-password" class="peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Passwort</label>
                        </div>
                        <button class="btn-lg btn-primary w-full my-3" type="submit">Login</button>
                    </form>
                </div>
            ) : ''}
            <>
                <span>Sie sind bereits eingeloggt.</span>
                <a
                    className="md:p-2 py-2 block hover:text-purple-400"
                    onClick={logout}
                    style={{ cursor: 'pointer' }}
                >
                    Logout
                </a>
            </> 
        </div>
    )
}