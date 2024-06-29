import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataById } from "./../../Utils/get";
import Dropdown from "../../Components/Dropdown";
import Carousel from "../../Components/Carousel";
import ErrorPage from "../Error";
import Loader from "./../../Components/Loader";

const Housing = () => {
  const { housingId } = useParams();
  console.log("🚀 ~ Housing ~ housingId:", housingId);
  // Trouve le logement correspondant
  const [logement, setLogement] = useState();
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLogement = async () => {
      try {
        const logement = await getDataById("/logements.json", housingId);
        setLogement(logement);
        console.log("🚀 ~ Housing ~ logement:", logement);
      } catch (error) {
        return <ErrorPage />;
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };
    fetchLogement();
  }, [housingId]);

  if (loading) {
    return <Loader />;
  } else {
    if (logement && logement.length !== 0) {
      return (
        <section className="houses">
          <div className="housingContainer">
            <div className="placeCarousel">
              <Carousel pictures={logement.pictures} />
            </div>
            <div className="titleTags">
              <div className="titleLogement">
                <h3 className="logementName">{logement.title}</h3>
                <p className="logementLocation">{logement.location}</p>
              </div>
              <div className="tags">
                {logement.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="proprioAndRate">
              <div className="proprioData">
                <div className="proprioName">{logement.host.name}</div>
                <div className="proprioPic">
                  <img src={logement.host.picture} alt="Propriétaire" />
                </div>
              </div>
              <div className="rate">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={
                      index < logement.rating ? "filled-star" : "empty-star"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div className="dropdownsLogement">
              <div className="dropdownDescription">
                <Dropdown title="Description" content={logement.description} />
              </div>
              <div className="dropdownEquipements">
                <Dropdown title="Équipements" content={logement.equipments} />
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
};

export default Housing;
