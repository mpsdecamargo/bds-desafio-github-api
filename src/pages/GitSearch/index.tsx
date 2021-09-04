import axios from 'axios';
import ResultCard from 'components/ResultCard';
import ImageCard from 'components/ImageCard';
import { useState } from 'react';
import './styles.css';

type FormData = {
  username: string;
};

type Address = {
  avatar_url: string;
  html_url: string;
  followers: string;
  location: string;
  name: string;
};

const GitSearch = () => {
  const [address, setAddress] = useState<Address>();

  const [formData, setFormData] = useState<FormData>({
    username: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.username}`)
      .then((response) => {
        setAddress(response.data);
      })
      .catch((error) => {
        setAddress(undefined);
        console.log(error);
      });
  };
  return (
    <div className="git-search-container">
      <div className="container search-container">
        <h1 className="container-text">Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="username"
              value={formData.username}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {address && (
        <>
          <div className="result-container">
            <div className="image-card-container">
              <ImageCard image={address.avatar_url} />
            </div>
            <div className="info-container">
              <div className="info-container-title">
              <h3>Informações:</h3>
              </div>
              <div className="info-container-content">
              <ResultCard title="Perfil" description={address.html_url} />
              </div>
              <div className="info-container-content">
              <ResultCard title="Seguidores" description={address.followers} />
              </div>
              <div className="info-container-content">
              <ResultCard title="Localidade" description={address.location} />
              </div>
              <div className="info-container-content">
              <ResultCard title="Nome" description={address.name} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GitSearch;
