import './searchChar.scss';

import { Formik, Form, Field, ErrorMessage as ErrorMessageFormik } from 'formik';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

const validate = (values) => {
    const errors = {};

    if(!values.charName) errors.charName = "This field is required";

    return errors;
}

const SearchChar = () => {
    const [foundChar, setFoundChar] = useState(null);
    const { getCharacterByName, loading, error } = MarvelService();

    const searchChar = (name) => {
        getCharacterByName(name)
            .then(char => {
                char ? setFoundChar(char) : setFoundChar(false);
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="searchChar">
            <h2 className="searchChar__title">Or find a character by name:</h2>
            <Formik
                initialValues={{ charName: '' }}
                validate={validate}
                onSubmit={({charName}) => searchChar(charName)}
            >
                <Form>
                    <div className="searchChar__search-wrapper">
                        <Field 
                            className="searchChar__input"
                            name="charName"
                            placeholder="Введите имя"
                         />
                        <button className="searchChar__btn-search button button__main" type="submit" disabled={loading}><div className="inner">FIND</div></button>
                    </div>
                    
                    <div className='searchChar__message-block'>
                        <ErrorMessageFormik name="charName" component="div" className="searchChar__message searchChar__message_error"/>
                    </div>
                    
                </Form>
                
            </Formik>
            {foundChar != null && !error ? <VisitPage foundChar={foundChar}/> : null}
            {error ? <ErrorMessage /> : null}
                
        </div>
    )
}

const VisitPage = ({ foundChar }) => {
 
    return (
        <div className="searchChar__message-block">    
            {foundChar ?
            <>
                <p className="searchChar__message">There is! Visit {foundChar.name} page?</p>
                <Link to={`/char/${foundChar.id}`} className="searchChar__message-btn button button__secondary"><div className="inner">TO PAGE</div></Link>
            </> 
            :
            <p className="searchChar__message searchChar__message_error">The character was not found. Check the name and try again</p>}
        </div>
    )
}

export default SearchChar;