export const AuthContext = React.createContext({user, setUser})

const AuthStore = props => {
    const [user, setUser] = useState(null)
    
    return (
        <AuthContext.Provider value={{user, setUser}}>
        {props.children}
        </AuthContext.Provider>
    )
}

export default AuthStore