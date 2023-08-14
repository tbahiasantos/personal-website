import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import getGithubRepos from '../hooks/githubrepos';
import './css/carousel.css';

const Carousel = () => {
  const repos = getGithubRepos('tbahiasantos');
  const items = repos.map(repo => (
    <div className="carousel-card">
      <h2 className="carousel-title">{repo.name.toUpperCase()}</h2>
      <div className="title-underline"></div>
      <div className="spacer"></div>
      <p className="carousel-description">{repo.description}</p>
      <div className="spacer"></div>
      <a href={repo.html_url} target="_blank" rel="noreferrer" className="carousel-btn">Acessar</a>
    </div>
  ));

  return (
    <div className="carousel-container">
      <AliceCarousel 
        autoPlay 
        infinite 
        items={items}
        responsive={{
          0: { items: 1 },
          568: { items: 2 },
          1024: { items: 3 },
        }}
        autoPlayInterval={5000}
      />
    </div>
  );
}

export default Carousel;
