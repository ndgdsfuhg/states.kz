$(document).ready(function() {
  // Initialize with Russian by default
  let currentLang = 'ru';
  let currentCountry = 'KZ';
  
  // Set active language
  function setActiveLanguage(lang) {
    currentLang = lang;
    $('.lang-btn').removeClass('active');
    $(`.lang-btn[data-lang="${lang}"]`).addClass('active');
    $('#mobile-lang-select').val(lang);
    
    // Map language to country
    const langToCountry = {
      'ru': 'KZ',
      'kk': 'KZ',
      'en': 'US',
      'zh': 'CN',
      'ar': 'AR',
      'tr': 'TR'
    };
    currentCountry = langToCountry[lang] || 'US';
  }

  // Update country content
  function updateCountryContent() {
    const country = countryContent[currentCountry] || countryContent['US'];
    
    $('#testimonial1-text').text(country.testimonials[0]);
    $('#testimonial2-text').text(country.testimonials[1]);
    $('#testimonial1-author').text(country.authors[0]);
    $('#testimonial2-author').text(country.authors[1]);
    
    $('#block1-list li').each(function(index) {
      $(this).html('<strong>' + country.advantages[index] + '</strong>');
    });
  }

  // Update translations
  function updateTranslations() {
    const t = translations[currentLang] || translations['ru'];
    
    document.title = t.title;
    $('meta[name="description"]').attr('content', t.description);
    
    $('#main-heading').text(t.heading);
    $('#main-tagline').text(t.tagline);
    
    $('#block1-heading').text(t.block1.heading);
    $('#btn-telegram').text(t.block1.btn1);
    $('#btn-whatsapp').text(t.block1.btn2);
    
    $('#block2-heading').text(t.block2.heading);
    $('#btn-partner').text(t.block2.btn);
    
    $('#block3-heading').text(t.block3.heading);
    $('#btn-contact').text(t.block3.btn);
    
    $('#footer').text(t.footer);
    
    $('body').attr('dir', t.rtl ? 'rtl' : 'ltr');
    document.documentElement.lang = currentLang;
  }

  // Language switcher for desktop
  $('.lang-btn').click(function() {
    const lang = $(this).data('lang');
    setActiveLanguage(lang);
    updateCountryContent();
    updateTranslations();
    localStorage.setItem('preferredLang', lang);
  });

  // Language switcher for mobile
  $('#mobile-lang-select').change(function() {
    const lang = $(this).val();
    setActiveLanguage(lang);
    updateCountryContent();
    updateTranslations();
    localStorage.setItem('preferredLang', lang);
  });

  // Load preferred language
  const savedLang = localStorage.getItem('preferredLang');
  if (savedLang) {
    setActiveLanguage(savedLang);
  }
  
  // Initial update
  updateCountryContent();
  updateTranslations();
});
