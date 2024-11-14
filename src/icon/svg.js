const svg = {
  adduser: () =>
    `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12C11.7614 12 14 9.76142 14 7C14 4.23858 11.7614 2 9 2C6.23858 2 4 4.23858 4 7C4 9.76142 6.23858 12 9 12Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 11V13M18 15H16V17M18 15H16M20 13H18V11" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 21V19C5 16.2386 7.23858 14 10 14H11.76C14.2386 14 16 15.7614 16 18.24V21" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,

  arrowdown: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 10L12 14L16 10" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  arrowleft: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 8L10 12L14 16" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  arrowright: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 8L14 12L10 16" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  arrowtop: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 14L12 10L16 14" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  binocular: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 4V8M17 4V8M12 4V8M7 8H4V14C4 15.6569 5.34315 17 7 17H8.5M17 8H20V14C20 15.6569 18.6569 17 17 17H15.5M12 12H11M12 12H13M12 12V21" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  camera: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7H7L8 5H16L17 7H20C21.1046 7 22 7.89543 22 9V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V9C2 7.89543 2.89543 7 4 7Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  check: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12L9 16L19 6" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  delete: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 7L5 7M9 7V5C9 4.44772 9.44772 4 10 4H14C14.5523 4 15 4.44772 15 5V7M16 7V19C16 19.5523 15.5523 20 15 20H9C8.44772 20 8 19.5523 8 19V7H16Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  dots: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentcolor"/>
      <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" fill="currentcolor"/>
      <path d="M5 13C5.55224 13 6 12.5523 6 12C6 11.4477 5.55224 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" fill="currentcolor"/>
    </svg>
  `,

  eyesoff: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3L21 21M9.868 9.879C9.315 10.432 9 11.189 9 12C9 13.6569 10.3431 15 12 15C12.8107 15 13.568 14.684 14.121 14.132" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.218 6.158C10.806 6.054 11.4 6 12 6C15.727 6 18.863 8.238 20.486 11.508C19.972 12.566 19.257 13.487 18.389 14.218M17.446 17.446C16.197 18.35 14.655 19 13 19C9.273 19 6.137 16.762 4.514 13.492C4.999 12.478 5.683 11.53 6.514 10.782" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  eyeson: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22 12C20.218 16.838 16.364 20 12 20C7.636 20 3.782 16.838 2 12C3.782 7.162 7.636 4 12 4C16.364 4 20.218 7.162 22 12Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  filter: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6H20M7 11H17M10 16H14" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  info: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 17V12M12 7H12.01" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  logout: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 16L5 12M5 12L9 8M5 12H15" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H12" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  message: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 14V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V14C4 15.1046 4.89543 16 6 16H11L12 17L13 16H18C19.1046 16 20 15.1046 20 14Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  password: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 11V7C6 5.89543 6.89543 5 8 5H16C17.1046 5 18 5.89543 18 7V11" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6 11H18C19.1046 11 20 11.8954 20 13V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V13C4 11.8954 4.89543 11 6 11Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  profile: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4 19V17C4 15.3431 5.34315 14 7 14H17C18.6569 14 20 15.3431 20 17V19" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  search: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20 20L16.65 16.65" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  trash: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 9V17M15 9V17M4 7H20M16 7V5C16 4.44772 15.5523 4 15 4H9C8.44772 4 8 4.44772 8 5V7M19 7V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V7H19Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  checkbox: () => `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2.75439" y="2.75" width="14.5" height="14.5" rx="4.25" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  checked: () => `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2.75439" y="2.75" width="14.5" height="14.5" rx="4.25" fill="currentcolor" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.6757 8.4267L9.33901 11.7614L7.33301 9.76142" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  unchecked: () => `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2.75439" y="2.75" width="14.5" height="14.5" rx="4.25" fill="currentcolor" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.3633 9.85941L7.6459 9.858" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  educash: () => `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M13.6001 5H11.2002V7H13.6001V5Z" fill="currentcolor"/>
      <path d="M16 9.66667V7.66667H8V14.4C8 15.4667 9.04004 16.3333 10.3198 16.3333H16V14.3333H10.3999V9.66667H16Z" fill="currentcolor"/>
      <path d="M11.2002 11H15.2002V13H11.2002V11Z" fill="currentcolor"/>
      <path d="M11.2002 17H13.6001V19H11.2002V17Z" fill="currentcolor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37256 24 0 18.6274 0 12C0 5.37258 5.37256 0 12 0C18.6274 0 24 5.37258 24 12ZM22 12C22 17.5224 17.5229 22 12 22C6.47705 22 2 17.5224 2 12C2 6.47715 6.47705 2 12 2C17.5229 2 22 6.47715 22 12Z" fill="currentcolor"/>
    </svg>
  `,

  home: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.939229 7.12669C0.333496 8.23332 0.333496 9.56823 0.333496 12.238V14.0127C0.333496 18.5636 0.333496 20.8392 1.70033 22.2529C3.06717 23.6668 5.26705 23.6668 9.66683 23.6668H14.3335C18.7332 23.6668 20.9332 23.6668 22.3 22.2529C23.6668 20.8392 23.6668 18.5636 23.6668 14.0127V12.238C23.6668 9.56823 23.6668 8.23332 23.0611 7.12669C22.4554 6.02007 21.3488 5.33326 19.1355 3.95964L16.8022 2.51151C14.4625 1.0595 13.2927 0.333496 12.0002 0.333496C10.7076 0.333496 9.53778 1.0595 7.1982 2.51151L4.86486 3.95965C2.6516 5.33326 1.54496 6.02007 0.939229 7.12669ZM8.50016 18.1252C8.01692 18.1252 7.62516 18.5169 7.62516 19.0002C7.62516 19.4834 8.01692 19.8752 8.50016 19.8752H15.5002C15.9834 19.8752 16.3752 19.4834 16.3752 19.0002C16.3752 18.5169 15.9834 18.1252 15.5002 18.1252H8.50016Z" fill="#1F4D6B"/>
    </svg>
  `,
  trail: () => `
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.3334 22.1668L23.8637 22.6972C24.0043 22.5565 24.0834 22.3657 24.0834 22.1668C24.0834 21.9679 24.0043 21.7772 23.8637 21.6365L23.3334 22.1668ZM21.5304 19.3032C21.2375 19.0103 20.7626 19.0103 20.4697 19.3032C20.1768 19.5961 20.1768 20.0709 20.4697 20.3638L21.5304 19.3032ZM20.4697 23.9698C20.1768 24.2627 20.1768 24.7376 20.4697 25.0305C20.7626 25.3234 21.2375 25.3234 21.5304 25.0305L20.4697 23.9698ZM16.0417 21.4168C15.6275 21.4168 15.2917 21.7526 15.2917 22.1668C15.2917 22.581 15.6275 22.9168 16.0417 22.9168V21.4168ZM11.6667 22.9168C12.0809 22.9168 12.4167 22.581 12.4167 22.1668C12.4167 21.7526 12.0809 21.4168 11.6667 21.4168V22.9168ZM12.8334 6.5835C13.2476 6.5835 13.5834 6.24771 13.5834 5.8335C13.5834 5.41928 13.2476 5.0835 12.8334 5.0835V6.5835ZM9.33335 5.0835C8.91914 5.0835 8.58335 5.41928 8.58335 5.8335C8.58335 6.24771 8.91914 6.5835 9.33335 6.5835V5.0835ZM17.5 5.0835C17.0858 5.0835 16.75 5.41928 16.75 5.8335C16.75 6.24771 17.0858 6.5835 17.5 6.5835V5.0835ZM8.75002 14.7502H19.25V13.2502H8.75002V14.7502ZM23.8637 21.6365L21.5304 19.3032L20.4697 20.3638L22.803 22.6972L23.8637 21.6365ZM22.803 21.6365L20.4697 23.9698L21.5304 25.0305L23.8637 22.6972L22.803 21.6365ZM24.0834 9.91683C24.0834 7.24745 21.9194 5.0835 19.25 5.0835V6.5835C21.091 6.5835 22.5834 8.07588 22.5834 9.91683H24.0834ZM19.25 14.7502C21.9194 14.7502 24.0834 12.5862 24.0834 9.91683H22.5834C22.5834 11.7578 21.091 13.2502 19.25 13.2502V14.7502ZM5.41669 18.0835C5.41669 16.2425 6.90907 14.7502 8.75002 14.7502V13.2502C6.08064 13.2502 3.91669 15.4141 3.91669 18.0835H5.41669ZM8.75002 21.4168C6.90907 21.4168 5.41669 19.9244 5.41669 18.0835H3.91669C3.91669 20.7529 6.08064 22.9168 8.75002 22.9168V21.4168ZM23.3334 21.4168H16.0417V22.9168H23.3334V21.4168ZM11.6667 21.4168H8.75002V22.9168H11.6667V21.4168ZM12.8334 5.0835H9.33335V6.5835H12.8334V5.0835ZM19.25 5.0835H17.5V6.5835H19.25V5.0835Z" fill="#393939"/>
      <ellipse cx="7.00002" cy="5.83333" rx="2.33333" ry="2.33333" stroke="#393939" stroke-width="1.5"/>
    </svg>
  `,
};

export default svg;
