<style>
  .button-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
    gap: 25px;
    margin: 40px auto 40px 10%; /* Added 10% margin-left to nudge it right */
    max-width: 1000px;
  }

  .guide-card {
    flex: 1;
    min-width: 280px;
    max-width: 350px;
    padding: 35px 20px;
    text-align: center;
    background-color: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    border-radius: 20px;
    text-decoration: none !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .guide-card:hover {
    border-color: var(--vp-c-brand);
    transform: translateY(-8px);
    background-color: var(--vp-c-bg-mute);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

  .guide-img {
    width: 140px; /* Slightly bigger icons */
    height: auto;
    margin-bottom: 20px;
    filter: drop-shadow(0 5px 10px rgba(0,0,0,0.1));
  }

  .guide-title {
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--vp-c-text-1);
    margin-bottom: 10px;
  }

  .guide-desc {
    font-size: 0.95rem;
    color: var(--vp-c-text-2);
    line-height: 1.4;
  }
</style>

# Choose your platform

<div class="button-container">

  <a href="/playstation-linux-tutorial/ps4/information" class="guide-card">
    <img src="/ps4.webp" alt="PS4 Pro" class="guide-img" />
    <div class="guide-title">PS4 Guide</div>
    <div class="guide-desc">Fat, Slim, and Pro models</div>
  </a>

  <a href="/playstation-linux-tutorial/ps5/information" class="guide-card">
    <img src="/ps5.webp" alt="PS5" class="guide-img" />
    <div class="guide-title">PS5 Guide</div>
    <div class="guide-desc">Digital and Disc versions</div>
  </a>

</div>