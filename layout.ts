function updateLayout() {
    const width = window.innerWidth;
  
    if (width < 768) {
      console.log("Phone layout");
      // Apply phone-specific changes
    } else if (width < 1024) {
      console.log("Tablet layout");
      // Apply tablet-specific changes
    } else {
      console.log("Desktop layout");
      // Apply desktop-specific changes
    }
  }
  
  // Listen to window resize events
  window.addEventListener("resize", updateLayout);
  
  // Initialize layout
  updateLayout();
  