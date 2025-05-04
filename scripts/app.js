// Set active language
function setActiveLanguage(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
}

// Set country content
function setCountry(countryCode) {
  const country = countryContent[countryCode] || countryContent['US'];
  
  // Update advantages
  const advantagesList = document.getElementById('block1-list');
  if (advantagesList) {
    advantagesList.innerHTML = country.advantages.map(item => 
      `<li><strong>${item}</strong></li>`
    ).join('');
  }
  
  // Update partnership
  const partnershipList = document.getElementById('block2-list');
  if (partnershipList) {
    partnershipList.innerHTML = country.partnership.map(item => 
      `<li><strong>${item}</strong></li>`
    ).join('');
  }
  
  // Update country solution
  const countrySolution = document.getElementById('country-solution');
  if (countrySolution) {
    countrySolution.innerHTML = `
      <div class="country-solution">
        <h3>${country.solution.title}</h3>
        <p>${country.solution.description}</p>
        <ul>
          ${country.solutionItems.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    `;
  }
  
  // Update testimonials
  const businessTestimonials = document.getElementById('business-testimonials');
  if (businessTestimonials) {
    businessTestimonials.innerHTML = country.businessTestimonials.map(testimonial => `
      <div class="testimonial">
        <p>${testimonial.text}</p>
        <div class="testimonial-author">${testimonial.author}</div>
      </div>
    `).join('');
  }
}

// Set language
function setLanguage(lang) {
  const t = translations[lang] || translations['en'];
  
  // Update metadata
  document.title = t.title;
  document.querySelector('meta[name="description"]').setAttribute('content', t.description);
  
  // Update content
  const mainHeading = document.getElementById('main-heading');
  if (mainHeading) mainHeading.textContent = t.heading;
  
  const mainTagline = document.getElementById('main-tagline');
  if (mainTagline) mainTagline.textContent = t.tagline;
  
  const block1Heading = document.getElementById('block1-heading');
  if (block1Heading) block1Heading.textContent = t.block1.heading;
  
  const btnTelegram = document.getElementById('btn-telegram');
  if (btnTelegram) btnTelegram.innerHTML = `<i class="fab fa-telegram"></i> ${t.block1.btn1}`;
  
  const btnWhatsapp = document.getElementById('btn-whatsapp');
  if (btnWhatsapp) btnWhatsapp.innerHTML = `<i class="fab fa-whatsapp"></i> ${t.block1.btn2}`;
  
  const block2Heading = document.getElementById('block2-heading');
  if (block2Heading) block2Heading.textContent = t.block2.heading;
  
  const btnPartner = document.getElementById('btn-partner');
  if (btnPartner) btnPartner.innerHTML = `<i class="fas fa-handshake"></i> ${t.block2.btn}`;
  
  const block3Heading = document.getElementById('block3-heading');
  if (block3Heading) block3Heading.textContent = t.block3.heading;
  
  const btnContact = document.getElementById('btn-contact');
  if (btnContact) btnContact.innerHTML = `<i class="fas fa-envelope"></i> ${t.block3.btn}`;
  
  const footer = document.getElementById('footer');
  if (footer) footer.textContent = t.footer;
  
  // Set RTL if needed
  document.body.setAttribute('
