import { LoadingComponent } from "../../components/LoadingComponents"

export const CardPeople = ({people}) => {

  if (!people) {
    return <LoadingComponent/>;
  }
    return (
      <>
          <article className="card" style={{'width': '18rem'}}>
          <h1 className="card-title">{people.name}</h1>
          <div className="card-body">
              <h5 className="card-title">{people.name}</h5>
              <p className="card-text">{people.films.length > 0 ? `Films: ${people.films.join(", ")}` : "No films available"}</p>
          </div>
          </article>
      </>
    )
  }