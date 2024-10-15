import { html } from "@bake-js/-o-id/dom"
import svg from './svg'

function component (self) {
  const adduser = html`
    <button class="icon__button">
      ${svg.adduser()}
    </button>
  `

  const arrowDown = html`
    <button class="icon__button">
      ${svg.arrowDown()}
    </button>
  `

  const arrowLeft = html`
    <button class="icon__button">
      ${svg.arrowLeft()}
    </button>
  `

  const arrowRight = html`
    <button class="icon__button">
      ${svg.arrowRight()}
    </button>
  `

  const arrowTop = html`
    <button class="icon__button">
      ${svg.arrowTop()}
    </button>
  `

  const binocular = html`
    <button class="icon__button">
      ${svg.binocular()}
    </button>
  `

  const camera = html`
    <button class="icon__button">
      ${svg.camera()}
    </button>
  `

  const check = html`
    <button class="icon__button">
      ${svg.check()}
    </button>
  `

  // const delete = html`
  //   <button class="icon__button">
  //     ${svg.delete()}
  //   </button>
  // `

  const dots = html`
    <button class="icon__button">
      ${svg.dots()}
    </button>
  `

  const eyesOff = html`
    <button class="icon__button">
      ${svg.eyesOff()}
    </button>
  `

  const eyesOn = html`
    <button class="icon__button">
      ${svg.eyesOn()}
    </button>
  `

  const filter = html`
    <button class="icon__button">
      ${svg.filter()}
    </button>
  `

  const info = html`
    <button class="icon__button">
      ${svg.info()}
    </button>
  `

  const logout = html`
    <button class="icon__button">
      ${svg.logout()}
    </button>
  `

  const message = html`
    <button class="icon__button">
      ${svg.message()}
    </button>
  `
  const password = html`
    <button class="icon__button">
      ${svg.password()}
    </button>
  `

  const profile = html`
    <button class="icon__button">
      ${svg.profile()}
    </button>
  `

  const search = html`
    <button class="icon__button">
      ${svg.search()}
    </button>
  `

  const trash = html`
    <button class="icon__button">
      ${svg.trash()}
    </button>
  `

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
    
    // case "delete":
    //   return delete
    
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
