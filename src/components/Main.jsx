import Button from "./Button"

const Main = (props) => {

    return(
        <main>
            <p>{props.saludo}</p>
            <Button text="Login" />
        </main>
    )
}

export default Main;