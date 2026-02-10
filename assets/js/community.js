// assets/js/community.js
document.addEventListener('DOMContentLoaded', function() {
  const filterInput = document.getElementById('filter');
  
  if (!filterInput) return;

  filterInput.addEventListener('keyup', function(event) {
    const searchTerm = event.target.value.toLowerCase();

    // 1. Reset all display states
    document.querySelectorAll('.org-type').forEach(el => el.style.display = '');
    
    // 2. Filter .org elements
    document.querySelectorAll('.org-type .org').forEach(org => {
      const text = org.textContent || org.innerText;
      if (text.toLowerCase().indexOf(searchTerm) > -1) {
        org.style.display = ''; // Show match
      } else {
        org.style.display = 'none'; // Hide non-match
      }
    });

    // 3. Handle visibility of .org-include containers and .org-type groups
    document.querySelectorAll('.org-include').forEach(include => {
      // Iterate through all type groups in this section
      const typeGroups = include.querySelectorAll('.org-type');
      let hasVisibleOrgInInclude = false;

      typeGroups.forEach(typeGroup => {
        // Check if this group has any visible orgs
        // Using getComputedStyle or checking style.display because the 'display: none' is set inline
        const visibleOrgs = Array.from(typeGroup.querySelectorAll('.org')).filter(org => org.style.display !== 'none');
        
        if (visibleOrgs.length === 0) {
          typeGroup.style.display = 'none';
        } else {
          typeGroup.style.display = '';
          hasVisibleOrgInInclude = true;
        }
      });

      // Handle "No matches" message
      let noMatchesMsg = include.querySelector('.no-matches');
      
      // If the element exists, toggle its visibility
      if (noMatchesMsg) {
        if (!hasVisibleOrgInInclude) {
          noMatchesMsg.style.display = 'block';
        } else {
          noMatchesMsg.style.display = 'none';
        }
      }
    });
  });
});
