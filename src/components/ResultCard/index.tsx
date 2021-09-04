import './styles.css';

type Props = {
    title: string;
    description: string;
}

const ResultCard = ( { title, description} : Props) => {

    return (
        <p className="result-content">{title}: {description}</p>
        );
}

export default ResultCard;
