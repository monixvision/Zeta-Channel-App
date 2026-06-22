import Btn from "../components/Btn"

const Home = () => {
    return (
        <div className="pt-[52px]">
            <h1>Home</h1>
            <p>Welcome to the Home page!</p>
            <div className="flex justify-center">
                <Btn to="/Cartelera" text="prueba" variant='solidgreen' color='green' size='xs' font='sans' />
            </div>
        </div>
    )
}
export default Home