const svg = {
  uncheck: () => `
    <svg class="uncheck" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="transparent">
      <rect x="2.75439" y="2.75" width="14.5" height="14.5" rx="4.25" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  check: () => `
    <svg class="check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2.75439" y="2.75" width="14.5" height="14.5" rx="4.25" fill="currentcolor" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.6757 8.4267L9.33901 11.7614L7.33301 9.76142" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
};

export default svg;
