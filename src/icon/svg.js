const svg = {
  adduser: () => `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12C11.7614 12 14 9.76142 14 7C14 4.23858 11.7614 2 9 2C6.23858 2 4 4.23858 4 7C4 9.76142 6.23858 12 9 12Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 11V13M18 15H16V17M18 15H16M20 13H18V11" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 21V19C5 16.2386 7.23858 14 10 14H11.76C14.2386 14 16 15.7614 16 18.24V21" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,

  arrowdown: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 10L12 14L16 10" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  arrowleft: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 8L10 12L14 16" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  arrowRight: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 8L14 12L10 16" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  arrowTop: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 14L12 10L16 14" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  binocular: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 4V8M17 4V8M12 4V8M7 8H4V14C4 15.6569 5.34315 17 7 17H8.5M17 8H20V14C20 15.6569 18.6569 17 17 17H15.5M12 12H11M12 12H13M12 12V21" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  camera: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7H7L8 5H16L17 7H20C21.1046 7 22 7.89543 22 9V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V9C2 7.89543 2.89543 7 4 7Z" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  check: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12L9 16L19 6" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  delete: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 7L5 7M9 7V5C9 4.44772 9.44772 4 10 4H14C14.5523 4 15 4.44772 15 5V7M16 7V19C16 19.5523 15.5523 20 15 20H9C8.44772 20 8 19.5523 8 19V7H16Z" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  dots: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="#888888"/>
      <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" fill="#888888"/>
      <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" fill="#888888"/>
    </svg>
  `,

  eyesOff: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3L21 21M9.868 9.879C9.315 10.432 9 11.189 9 12C9 13.6569 10.3431 15 12 15C12.8107 15 13.568 14.684 14.121 14.132" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.218 6.158C10.806 6.054 11.4 6 12 6C15.727 6 18.863 8.238 20.486 11.508C19.972 12.566 19.257 13.487 18.389 14.218M17.446 17.446C16.197 18.35 14.655 19 13 19C9.273 19 6.137 16.762 4.514 13.492C4.999 12.478 5.683 11.53 6.514 10.782" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  eyesOn: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22 12C20.218 16.838 16.364 20 12 20C7.636 20 3.782 16.838 2 12C3.782 7.162 7.636 4 12 4C16.364 4 20.218 7.162 22 12Z" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  filter: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6H20M7 11H17M10 16H14" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  info: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 17V12M12 7H12.01" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21Z" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  logout: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 16L5 12M5 12L9 8M5 12H15" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H12" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  message: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 14V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V14C4 15.1046 4.89543 16 6 16H11L12 17L13 16H18C19.1046 16 20 15.1046 20 14Z" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  password: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 11V7C6 5.89543 6.89543 5 8 5H16C17.1046 5 18 5.89543 18 7V11" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15Z" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6 11H18C19.1046 11 20 11.8954 20 13V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V13C4 11.8954 4.89543 11 6 11Z" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  profile: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14Z" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4 19V17C4 15.3431 5.34315 14 7 14H17C18.6569 14 20 15.3431 20 17V19" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  search: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20 20L16.65 16.65" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  trash: () => `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 9V17M15 9V17M4 7H20M16 7V5C16 4.44772 15.5523 4 15 4H9C8.44772 4 8 4.44772 8 5V7M19 7V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V7H19Z" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
};

export default svg;
