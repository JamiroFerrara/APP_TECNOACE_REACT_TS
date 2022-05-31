import Toggle from "rn-toggle"
import {useState} from "react"

function ToggleButton() {
    const [isActive, setIsActive] = useState(false);

    return (
        <Toggle isActive={isActive} toggle={() => setIsActive(value => !value)} />
    )
}

export default ToggleButton
