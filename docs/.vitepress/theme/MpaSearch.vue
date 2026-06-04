<template>
  <div class="mpa-search-container" style="position: relative; font-family: sans-serif;">
    <input 
      type="text" 
      id="mpa-search-input" 
      placeholder="Search wiki..." 
      style="padding: 6px 12px; border: 1px solid #33d17a; border-radius: 8px; background: transparent; color: inherit; width: 180px;"
    >
    <div id="mpa-search-results" style="position: absolute; top: 40px; right: 0; background: #1a1a1a; border: 1px solid #33d17a; border-radius: 8px; width: 250px; display: none; max-height: 200px; overflow-y: auto; z-index: 999; box-shadow: 0 4px 12px rgba(0,0,0,0.5);"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  let searchData = [];

  // Fetch the local search index
  async function loadSearchIndex() {
    try {
      const res = await fetch('/playstation-linux-tutorial/search-index.json');
      searchData = await res.json();
    } catch (e) {
      console.error("Search index failed to load", e);
    }
  }

  function initSearchLogic() {
    const input = document.getElementById('mpa-search-input');
    const resultsDiv = document.getElementById('mpa-search-results');
    if (!input || !resultsDiv) return;

    input.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        resultsDiv.style.display = 'none';
        return;
      }

      const matches = searchData.filter(item => 
        item.title.toLowerCase().includes(query) || item.text.toLowerCase().includes(query)
      );

      if (matches.length === 0) {
        resultsDiv.innerHTML = '<div style="padding:10px; color:#aaa; font-size:14px;">No results found</div>';
      } else {
        resultsDiv.innerHTML = matches.map(match => `
          <a href="${match.url}" style="display:block; padding:10px; color:#33d17a; text-decoration:none; border-bottom:1px solid #333; font-size:14px;">
            <strong>${match.title}</strong>
          </a>
        `).join('');
      }
      resultsDiv.style.display = 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !resultsDiv.contains(e.target)) {
        resultsDiv.style.display = 'none';
      }
    });
  }

  // Initialize
  loadSearchIndex();
  initSearchLogic();

  // Keep it working across Turbo page transitions!
  document.addEventListener('turbo:load', initSearchLogic);
})
</script>