document.addEventListener('DOMContentLoaded', function() {
  // Create and inject CSS
  const style = document.createElement('style');
  style.textContent = `
    body {
      --sidebar-width: 300px;
      transition: margin-left 0.3s;
    }
    body.sidebar-collapsed {
      --sidebar-width: 0px;
    }
    #quarto-sidebar {
      transition: margin-left 0.3s, width 0.3s;
    }
    body.sidebar-collapsed #quarto-sidebar {
      margin-left: -300px !important;
      width: 300px !important;
    }
    #quarto-margin-sidebar {
      transition: margin-left 0.3s, width 0.3s;
    }
    body.sidebar-collapsed #quarto-margin-sidebar {
      margin-left: 0 !important;
      width: 0 !important;
    }
    .page-columns {
      transition: margin-left 0.3s, width 0.3s;
    }
    body.sidebar-collapsed .page-columns {
      margin-left: 0 !important;
      width: 100% !important;
    }
    #quarto-content {
      transition: width 0.3s, margin-left 0.3s;
    }
    body.sidebar-collapsed #quarto-content {
      width: 100% !important;
      margin-left: 0 !important;
      max-width: none !important;
    }
    #sidebar-toggle {
      position: fixed;
      top: 10px;
      left: 10px;
      z-index: 1031;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #333;
      padding: 5px;
      border-radius: 5px;
      transition: all 0.3s;
    }
    body.sidebar-collapsed #sidebar-toggle {
      left: 10px;
    }
    #sidebar-toggle:hover {
      background-color: rgba(0,0,0,0.1);
    }
    @media (max-width: 991.98px) {
      #sidebar-toggle {
        display: none;
      }
    }
  `;
  document.head.appendChild(style);

  // Create and inject toggle button
  const toggleButton = document.createElement('button');
  toggleButton.id = 'sidebar-toggle';
  toggleButton.innerHTML = '☰';
  toggleButton.setAttribute('aria-label', 'Toggle Sidebar');
  document.body.insertBefore(toggleButton, document.body.firstChild);

  // Function to toggle sidebar
  function toggleSidebar() {
    document.body.classList.toggle('sidebar-collapsed');
    const isCollapsed = document.body.classList.contains('sidebar-collapsed');
    
    // Force content shift
    const content = document.querySelector('#quarto-content');
    if (content) {
      content.style.marginLeft = isCollapsed ? '0' : '';
      content.style.width = isCollapsed ? '100%' : '';
    }

    // Adjust toggle button
    if (isCollapsed) {
      toggleButton.innerHTML = '☰';
      toggleButton.setAttribute('aria-label', 'Expand Sidebar');
    } else {
      toggleButton.innerHTML = '✖';
      toggleButton.setAttribute('aria-label', 'Collapse Sidebar');
    }
  }

  // Add event listener to toggle button
  toggleButton.addEventListener('click', toggleSidebar);

  // Initialize sidebar state based on screen size
  function initSidebar() {
    if (window.innerWidth <= 991.98) {
      document.body.classList.remove('sidebar-collapsed');
      toggleButton.style.display = 'none';
    } else {
      toggleButton.style.display = 'block';
    }
  }

  // Call initSidebar on page load and window resize
  initSidebar();
  window.addEventListener('resize', initSidebar);
});
