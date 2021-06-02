import { Alert } from "react-bootstrap"

const WarningSign = props => {
  return (
    <Alert className="text-center" variant="danger">
      {props.message}
    </Alert>
  )
}

export default WarningSign
