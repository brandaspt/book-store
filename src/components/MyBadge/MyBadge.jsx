import { Badge } from "react-bootstrap"

const MyBadge = props => {
  return (
    <div className="MyBadge text-center mb-5">
      <Badge variant={props.color}>{props.text}</Badge>
    </div>
  )
}

export default MyBadge
