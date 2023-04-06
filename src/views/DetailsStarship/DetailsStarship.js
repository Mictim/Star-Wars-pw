import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router'

import './DetailsStarship.css'

import { pilotsList, filmsList } from '../../data'
import defaultImage from '../../assets/images/default.jpg'

import getData from '../../utils/getData'
import retrieveList from '../../logic/retrieve-list'
import DetailsList from '../../components/DetailsList/DetailsList'

import axios from 'axios'
import LoadingSpinner from '../../components/Spinner/Spinner'

export default function Details () {
  const { id } = useParams()
  const [starship, setStarship] = useState(null)
  const [pilots, setPilots] = useState(null)
  const [films, setFilms] = useState(null)
  const [dataIsLoading, setDataIsLoading] = useState(true)
  const [imgSrc, setImgSrc] = useState(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`)

  const sourceRef = useRef(axios.CancelToken.source())

  useEffect(() => {
    const source = sourceRef.current
    const getStarship = async () => {
      const dataStarship = await getData(`https://swapi.dev/api/starships/${id}/`)
      setStarship(dataStarship)
      const dataPilots = await retrieveList(dataStarship.pilots)
      setPilots(dataPilots)
      const dataFilms = await retrieveList(dataStarship.films)
      setFilms(dataFilms)
      setDataIsLoading(false)
    }
    getStarship()

    return () => {
      if (source) source.cancel("Landing Component got unmounted");
      setStarship(null)
      setPilots(null)
      setFilms(null)
    }
  }, [id])

  return (
    <>
      <div className="details">
        {
          starship && (
            <>
              <div className="details__image">
                <img src={imgSrc ? imgSrc : defaultImage} onError={() => setImgSrc(defaultImage)} alt="" />
              </div>
              <div className="details__bar"></div>
              <div className="details__info" data-testid="starship-name">
                <h3>{starship.name}</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ipsam corrupti itaque! Quidem similique inventore eius nam esse earum voluptate velit molestias officia, fugit possimus omnis recusandae eaque et laborum ducimus beatae officiis pariatur aliquid. Itaque, cupiditate. Voluptas, adipisci ipsam.</p>
                <div className="details__starship">
                  <div>
                    <p>Model: <span data-testid={'starship-model'}>{starship.model}</span></p>
                    <p>Manufacturer: <span data-testid={'starship-manufacturer'}>{starship.manufacturer}</span></p>
                    <p>Cost in credits: <span data-testid={'starship-cost'}>{starship.cost_in_credits}</span></p>
                  </div>
                  <div>
                    <p>Length: <span data-testid={'starship-length'}>{starship.length}</span></p>
                    <p>Atmospheric Speed: <span data-testid={'starship-speed'}>{starship.max_atmosphering_speed}</span></p>
                    <p>Crew: <span data-testid={'starship-crew'}>{starship.crew}</span></p>
                  </div>
                </div>
              </div>
            </>
          )
        }
      </div>

      <div className="section">
        {
          pilots && pilots.length > 0 && (
            <>
              <h3 className="section__header">PILOTS</h3>
              <DetailsList list={pilots} names={pilotsList} id={'actors'} />
            </>
          )
        }
      </div>

      <div className="section">
        {
          films && films.length > 0 && (
            <>
              <h3 className="section__header">FILMS</h3>
              <DetailsList list={films} names={filmsList} />
            </>
          )
        }
      </div>

      <div className="section">
        {
          dataIsLoading && (
            <LoadingSpinner />
          )
        }
      </div>
    </>
  )
}
