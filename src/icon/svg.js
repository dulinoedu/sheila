const svg = {
  adduser: () => `
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5daaf7"><path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"/></svg>
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

  discord: () => `
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5daaf7"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
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
      <path d="M14.5582 14.3331C13.9186 15.4115 12.6764 15.979 11.4426 15.7565C10.2087 15.5339 9.24301 14.5682 9.02048 13.3344C8.79795 12.1005 9.36544 10.8583 10.4438 10.2188" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.9969 17.77C16.2721 19.0782 14.1651 19.7833 12.0003 19.7767C8.41322 19.8406 5.09886 17.8692 3.44275 14.6866C2.84786 13.4808 2.84786 12.0668 3.44275 10.861C4.271 9.21165 5.5913 7.86039 7.22105 6.99414" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.4272 14.9085C20.4674 14.8324 20.5196 14.7642 20.5576 14.6867C21.1524 13.4809 21.1524 12.067 20.5576 10.8611C18.9015 7.67857 15.5871 5.70716 12 5.77104C11.7751 5.77104 11.5565 5.80105 11.3345 5.81568" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21.0037 20.7786L3.99658 3.77148" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
      <path d="M9 16L5 12M5 12L9 8M5 12H15" stroke="#5daaf7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H12" stroke="#5daad7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
      <path d="M12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14Z" stroke="#5daaf7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4 19V17C4 15.3431 5.34315 14 7 14H17C18.6569 14 20 15.3431 20 17V19" stroke="#5daad7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
      <path d="M9 9V17M15 9V17M4 7H20M16 7V5C16 4.44772 15.5523 4 15 4H9C8.44772 4 8 4.44772 8 5V7M19 7V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V7H19Z" stroke="#f55753" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  edit: () => `
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5daaf7"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
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

  mail: () => `
    <svg width="100%" height="100%" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.23438 5.13754L16.5009 17.904L29.7549 5.12354" stroke="#F5B93F" stroke-width="2" stroke-miterlimit="10"/>
      <path d="M1.5 6.9043V25.9043C1.5 26.5673 1.76339 27.2032 2.23223 27.6721C2.70107 28.1409 3.33696 28.4043 4 28.4043H28C28.663 28.4043 29.2989 28.1409 29.7678 27.6721C30.2366 27.2032 30.5 26.5673 30.5 25.9043V6.9043C30.5 6.24126 30.2366 5.60537 29.7678 5.13653C29.2989 4.66769 28.663 4.4043 28 4.4043H4C3.33696 4.4043 2.70107 4.66769 2.23223 5.13653C1.76339 5.60537 1.5 6.24126 1.5 6.9043Z" stroke="#F5B93F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
    </svg>
  `,

  phone: () => `
    <svg width="100%" height="100%" viewBox="0 0 32 33" fill="transparent" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.6934 19.6976L18.4114 22.5476C14.8776 20.4709 11.9323 17.5267 9.85436 13.9936L12.7069 11.7116C13.0411 11.444 13.2774 11.0731 13.3787 10.657C13.48 10.241 13.4407 9.80303 13.2669 9.41164L10.6669 3.55665C10.4804 3.13661 10.1509 2.79645 9.73693 2.59682C9.323 2.39718 8.85163 2.35105 8.40686 2.46665L3.45686 3.75065C2.99508 3.87135 2.59361 4.15723 2.32849 4.55411C2.06338 4.951 1.95303 5.43134 2.01836 5.90415C2.887 12.0898 5.74582 17.8245 10.1627 22.2413C14.5795 26.6582 20.3142 29.517 26.4999 30.3856C26.9727 30.451 27.453 30.3406 27.8499 30.0755C28.2468 29.8104 28.5326 29.4089 28.6534 28.9471L29.9374 23.9971C30.0527 23.5524 30.0065 23.0812 29.807 22.6674C29.6075 22.2535 29.2676 21.9239 28.8479 21.7371L22.9934 19.1371C22.602 18.9631 22.1639 18.9237 21.7478 19.0252C21.3316 19.1266 20.9608 19.3631 20.6934 19.6976Z" stroke="#F5B93F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
    </svg>
  `,
};

export default svg;
