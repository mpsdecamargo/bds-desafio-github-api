import './styles.css';

type Props = {
    image: string;
}

const ImageCard = ( {image} : Props) => {

    return (
        <div className="result-image-container">
            <div className="image-container">
                <img src={image} alt="Imagem" />
            </div>
        </div>
    );
}

export default ImageCard;