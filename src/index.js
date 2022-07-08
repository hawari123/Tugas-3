import ReactDOM from "react-dom/client";

function Welcome(props) {
    return <h1> selamat datang {props.name}</h1> ;
}

let pengguna = "Burhanudin Hawari";

function App(){
    if (pengguna) {
        return <Welcome name = {pengguna} />
    }else{
        return <button>Login</button>
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);