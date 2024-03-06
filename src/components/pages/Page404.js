import { Link } from "react-router-dom";
import ErrorMessage from "../errorMessage/ErrorMessage";

const Page404 = () => {
    return (
        <>
            <ErrorMessage/>
            <p style={{textAlign: "center", marginTop: '15px'}}>Такой страницы не существует</p>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Link to='/' style={{padding: '16px 32px', marginTop: '30px', display: 'inline-block', border: '1px solid red'}}>Вернуться на главную </Link>    
            </div> 
        </>
    )
}

export default Page404;