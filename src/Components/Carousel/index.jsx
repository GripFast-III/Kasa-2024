import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import logements from "./../../../src/logements.json";
import { getDataById } from "./../../Utils/get";
import Loader from "./../../Components/Loader";
import ChevronLeft from "./../../Assets/left-chevron.png";
import ChevronRight from "./../../Assets/right-chevron.png";
import ErrorPage from "./../../Pages/Error";

const Carousel = () => {
  const { housingId } = useParams();
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const logement = await getDataById("/logements.json", housingId);
        if (logement && logement.pictures) {
          setPictures(logement.pictures);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPictures();
  }, [housingId]);

  if (loading) {
    return <Loader />;
  }

  if (error || pictures.length === 0) {
    return <ErrorPage />;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (pictures.length === 0) {
    return <div>Aucune image disponible</div>;
  }

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <div className="left">
          <img
            src={ChevronLeft}
            alt="Précédent"
            className="carousel__chevron carousel__chevron--left"
            onClick={handlePrev}
          />
        </div>
      )}
      <div className="pictures">
        <img
          src={pictures[currentIndex]}
          alt={`Logement ${currentIndex + 1}`}
          className="carousel__image"
        />
        {pictures.length > 1 && (
          <div className="counter">
            <div className="carousel__counter">
              {currentIndex + 1} / {pictures.length}
            </div>
          </div>
        )}
      </div>
      {pictures.length > 1 && (
        <div className="right">
          <img
            src={ChevronRight}
            alt="Suivant"
            className="carousel__chevron carousel__chevron--right"
            onClick={handleNext}
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;
