import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarDays,
  faCar,
  faCircleCheck,
  faFaceSmile,
  faLocationDot,
  faMotorcycle,
  faRobot,
  faTriangleExclamation,
  faWandMagicSparkles,
  faWrench,
} from '@fortawesome/free-solid-svg-icons'

const ICONS = {
  calendar: faCalendarDays,
  car: faCar,
  check: faCircleCheck,
  smile: faFaceSmile,
  location: faLocationDot,
  motorcycle: faMotorcycle,
  robot: faRobot,
  sparkle: faWandMagicSparkles,
  warning: faTriangleExclamation,
  wrench: faWrench,
}

export default function IconText({ text }) {
  return text.split(/(\[\[[a-z]+\]\]|\*\*.*?\*\*)/g).map((part, index) => {
    const iconName = part.match(/^\[\[([a-z]+)\]\]$/)?.[1]
    if (iconName && ICONS[iconName]) {
      return <FontAwesomeIcon key={index} icon={ICONS[iconName]} aria-hidden="true" />
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }
    return part.split('\n').map((line, lineIndex) => (
      <React.Fragment key={`${index}-${lineIndex}`}>
        {lineIndex > 0 && <br />}
        {line}
      </React.Fragment>
    ))
  })
}
