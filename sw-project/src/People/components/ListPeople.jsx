import { CardPeople } from "./CardPeople"

export const ListPeople = ({people}) => {

  return (
    <div> 
        {
            people.map( (people,index) => {
                return <div key={index}> <CardPeople people={people}/> </div>  })
        }
    </div>
  )
}
