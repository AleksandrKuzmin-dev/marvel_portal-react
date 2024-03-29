import SingleCharacter from '../singleCharacter/SingleCharacter'
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const SingleCharacterPage = () => {
    return (
        <ErrorBoundary>
            <SingleCharacter />
        </ErrorBoundary>
    )
}

export default SingleCharacterPage;