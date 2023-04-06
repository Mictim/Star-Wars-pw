import { Link } from 'react-router-dom'
import './DetailsList.css'
import formatListNames from '../../utils/formatListNames'
export default function DetailsList ({ list, names, id }) {

  return (
    <ul className={`section__list`}>
      {
        list.map((item, index) => {
          return (
            <li key={index} className={`section__item`} data-testid={`id`}>
              {
                names.map((name, index) => {
                  if (name === 'name' | name === 'title')
                    return (
                      <Link to={id ? `/${id}/${(item.url).match(/[0-9]+/)}` : '#!'} key={index}>
                        <p className={`section__${name}`} data-testid={`${id}-${name}`}>{item[name]}</p>
                      </Link>
                    )
                  else {
                    return (
                      <p key={index} className={`section__${name}`} data-testid={`${id}-${name}`}>
                        {formatListNames(name)}: <span>{item[name]}</span>
                      </p>
                    )
                  }
                })
              }
            </li>
          )
        })
      }
    </ul>
  )
}


