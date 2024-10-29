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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.93874 9.12669C2.33301 10.2333 2.33301 11.5682 2.33301 14.238V16.0127C2.33301 20.5636 2.33301 22.8392 3.69984 24.2529C5.06668 25.6668 7.26656 25.6668 11.6663 25.6668H16.333C20.7327 25.6668 22.9327 25.6668 24.2995 24.2529C25.6663 22.8392 25.6663 20.5636 25.6663 16.0127V14.238C25.6663 11.5682 25.6663 10.2333 25.0606 9.12669C24.4549 8.02007 23.3483 7.33326 21.135 5.95964L18.8017 4.51151C16.462 3.0595 15.2922 2.3335 13.9997 2.3335C12.7071 2.3335 11.5373 3.0595 9.19771 4.51151L6.86438 5.95965C4.65112 7.33326 3.54447 8.02007 2.93874 9.12669ZM10.4997 20.1252C10.0164 20.1252 9.62467 20.5169 9.62467 21.0002C9.62467 21.4834 10.0164 21.8752 10.4997 21.8752H17.4997C17.9829 21.8752 18.3747 21.4834 18.3747 21.0002C18.3747 20.5169 17.9829 20.1252 17.4997 20.1252H10.4997Z" fill="#3481B2"/>
    </svg>

`,
};

export default svg;
