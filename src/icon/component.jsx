import { html } from "@bake-js/-o-id/dom"
import svg from './svg'

function component (self) {
  const adduser = html `${svg.adduser()}`
  const arrowDown = html `${svg.arrowDown()}`
  const arrowLeft = html `${svg.arrowLeft()}`
  const arrowRight = html `${svg.arrowRight()}`
  const arrowTop = html `${svg.arrowTop()}`
  const binocular = html `${svg.binocular()}`
  const camera = html `${svg.camera()}`
  const check = html `${svg.check()}`
  const dots = html `${svg.dots()}`
  const eyesOff = html `${svg.eyesOff()}`
  const eyesOn = html `${svg.eyesOn()}`
  const filter = html `${svg.filter()}`
  const info = html `${svg.info()}`
  const logout = html `${svg.logout()}`
  const message = html `${svg.message()}`
  const password = html `${svg.password()}`
  const profile = html `${svg.profile()}`
  const search = html `${svg.search()}`
  const trash = html `${svg.trash()}`

  switch (self.type) {
    case "adduser": 
      return adduser

    case "arrowDown":
      return arrowDown
    
    case "arrowLeft":
      return arrowLeft
    
    case "arrowRight":
      return arrowRight
    
    case "arrowTop":
      return arrowTop
    
    case "binocular":
      return binocular
    
    case "camera":
      return camera
    
    case "check":
      return check
    
    case "dots":
      return dots
    
    case "eyesOff":
      return eyesOff
    
    case "eyesOn":
      return eyesOn
    
    case "filter":
      return filter
    
    case "info":
      return info
    
    case "logout":
      return logout
    
    case "message":
      return message
    
    case "password":
      return password
    
    case "profile":
      return profile
    
    case "search":
      return search
    
    case "trash":
      return trash

    default:
      return ""
  }
}

export default component
