// 1. Data: Molding Textures for the Virtual Framer
const moldings = [
    { name: 'Classic Crown', file: 'assets/moldings/crown_molding.svg' },
    { name: 'Maple Baseboard', file: 'assets/moldings/baseboard.svg' },
    { name: 'Mahogany Rail', file: 'assets/moldings/chair_rail.svg' },
    { name: 'Dark Walnut', file: 'assets/moldings/walnut.svg' },
    { name: 'Light Oak', file: 'assets/moldings/oak.svg' },
    { name: 'Cherry Wood', file: 'assets/moldings/cherry.svg' },
    { name: 'Gold Leaf', file: 'assets/moldings/gold.svg' }
];

// 2. Data: Portfolio Images with Descriptions
const portfolioImages = [
    { file: '20180125_170337.jpg', title: 'Classic Walnut Frame', desc: 'A timeless deep walnut frame custom-built for a family portrait.' },
    { file: '20180202_164440.jpg', title: 'Rustic Oak Shadowbox', desc: 'Hand-finished rustic oak shadowbox designed to preserve memorabilia.' },
    { file: '20180205_165928.jpg', title: 'Modern Gallery Frame', desc: 'Sleek black gallery frame with museum-grade archival matting.' },
    { file: '20180208_184850.jpg', title: 'Ornate Gold Finish', desc: 'Restoration of an antique gold-leaf frame, bringing history back to life.' },
    { file: '20180208_184953.jpg', title: 'Minimalist Maple', desc: 'Natural maple wood frame with a clear finish for a contemporary look.' },
    { file: '20180215_185709.jpg', title: 'Vintage White Wash', desc: 'Distressed white frame perfect for coastal or farmhouse decor.' },
    { file: '20180329_104214.jpg', title: 'Deep Canvas Floater', desc: 'A custom "floater" frame that gives the illusion of the canvas floating inside.' },
    { file: '20180423_193653.jpg', title: 'Double Mat Presentation', desc: 'Elegant double matting in cream and navy to accent the artwork.' },
    { file: '20180503_192206.jpg', title: 'Heirloom Restoration', desc: 'Detailed restoration work on a damaged mid-century frame.' },
    { file: '20180507_183731.jpg', title: 'Corporate Certificate', desc: 'Professional framing for diplomas and corporate awards.' },
    { file: '20180509_151018.jpg', title: 'Artisan Corner Joinery', desc: 'Showcasing our precision corner joinery techniques.' },
    { file: '20180619_213821.jpg', title: 'Large Format Custom', desc: 'Oversized custom frame built reinforced for large-scale photography.' },
    { file: '20180623_194708.jpg', title: 'Sports Jersey Display', desc: 'Deep shadowbox with UV glass to protect a signed jersey.' },
    { file: '20180714_222234.jpg', title: 'Eclectic Mix', desc: 'A unique combination of modern and traditional elements.' },
    { file: '20180819_145754.jpg', title: 'Fine Art Preservation', desc: 'Conservation framing using acid-free materials to protect valuable art.' },
    { file: '20180831_193243.jpg', title: 'Texture & Depth', desc: 'Using a textured frame profile to add depth to a flat print.' },
    { file: 'DSC_0022.JPG', title: 'Gallery Wall Collection', desc: 'Part of a cohesive set designed for a client’s gallery wall.' },
    { file: 'DSC_0100.JPG', title: 'Detailed Wood Carving', desc: 'Close-up of intricate wood carving details on a custom frame.' },
    { file: 'DSC_0871.JPG', title: 'Metallic Accent Frame', desc: 'Brushed metal finish frame suitable for modern industrial interiors.' },
    { file: 'FB_IMG_1516136999466.jpg', title: 'Custom Mirror Framing', desc: 'Transforming a simple mirror into a statement piece.' },
    { file: 'IMG_20180208_185310_102.jpg', title: 'Hand-Stained Finish', desc: 'Custom mixed stain to match the client’s existing furniture.' },
    { file: 'IMG-20180414-WA0023.jpg', title: 'Wedding Photo Series', desc: 'Elegant and romantic framing for wedding photography.' },
    { file: 'IMG-20180414-WA0024.jpg', title: 'Family Heritage', desc: 'Preserving old family photographs with archival standards.' },
    { file: 'IMG-20180415-WA0020.jpg', title: 'Artist Showcase', desc: 'Framing designed to let the art speak for itself.' },
    { file: 'IMG-20180526-WA0038.jpg', title: 'Bold Color Choice', desc: 'A vibrant frame color chosen to pop against a neutral wall.' },
    { file: 'IMG-20180528-WA0014.jpg', title: 'Subtle Elegance', desc: 'Understated design that complements rather than competes.' },
    { file: 'IMG-20180611-WA0045.jpg', title: 'Workshop Process', desc: 'Behind the scenes in our woodshop.' },
    { file: 'IMG-20180611-WA0046.jpg', title: 'Precision Cutting', desc: 'Ensuring every angle is perfect for a seamless joint.' },
    { file: 'IMG-20180611-WA0047.jpg', title: 'Final Assembly', desc: 'The final touches before the piece is ready for delivery.' },
    { file: 'IMG-20180908-WA0022.jpeg', title: 'Completed Project', desc: 'Another happy client’s project ready for their home.' }
];

// --- DOM Elements ---
const moldingList = document.getElementById('molding-list');
const previewWrapper = document.getElementById('frame-preview-wrapper');
const previewImage = document.getElementById('preview-image');
const uploadInput = document.getElementById('image-upload');
const portfolioGrid = document.getElementById('portfolio-grid');
const navLinks = document.querySelectorAll('.main-nav li');
const views = document.querySelectorAll('.view-section');

// Lightbox Elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionContainer = document.getElementById('caption');
const closeBtn = document.querySelector('.close-lightbox');

// --- Initialization ---
function init() {
    loadMoldingCatalog();
    loadPortfolioGallery();
    setupNavigation();
    setupLightbox();
    setupUpload();
}

// --- Virtual Framer Logic ---
function loadMoldingCatalog() {
    moldingList.innerHTML = ''; 
    moldings.forEach(molding => {
        const item = document.createElement('div');
        item.className = 'molding-item';
        item.innerHTML = `
            <img src="${molding.file}" alt="${molding.name}" loading="lazy">
            <p>${molding.name}</p>
        `;
        item.onclick = () => applyFrame(molding.file);
        moldingList.appendChild(item);
    });
}

function applyFrame(texturePath) {
    previewWrapper.style.border = '40px solid transparent';
    previewWrapper.style.borderImageSource = `url('${texturePath}')`;
    previewWrapper.style.borderImageSlice = '50 fill'; 
    previewWrapper.style.borderImageRepeat = 'round'; 
}

function setupUpload() {
    uploadInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                previewImage.src = event.target.result;
            }
            reader.readAsDataURL(file);
        }
    });
}

// --- Gallery Logic ---
function loadPortfolioGallery() {
    portfolioGrid.innerHTML = '';
    portfolioImages.forEach(item => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        const imgPath = `assets/${item.file}`;
        
        card.innerHTML = `
            <img src="${imgPath}" loading="lazy" alt="${item.title}">
            <div class="gallery-overlay">
                <h4 class="card-title">${item.title}</h4>
                <p class="card-desc">${item.desc}</p>
            </div>
        `;
        card.onclick = () => openLightbox(imgPath, item.title, item.desc);
        portfolioGrid.appendChild(card);
    });
}

// --- Navigation Logic ---
function setupNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetId = link.getAttribute('data-target');
            if (!targetId) return; // Ignore links without targets

            // Update Nav State
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Switch Views
            views.forEach(view => {
                if(view.id === targetId) {
                    view.style.display = 'flex'; // Or block/flex based on css
                    // Small timeout to allow display:block to apply before opacity transition
                    setTimeout(() => view.classList.add('active'), 10);
                } else {
                    view.classList.remove('active');
                    setTimeout(() => view.style.display = 'none', 500); // Wait for fade out
                }
            });
        });
    });
}

// --- Lightbox Logic ---
function setupLightbox() {
    closeBtn.onclick = () => {
        lightbox.style.display = "none";
    };
    
    lightbox.onclick = (e) => {
        if(e.target === lightbox) {
            lightbox.style.display = "none";
        }
    }
}

function openLightbox(src, title, desc) {
    lightbox.style.display = "flex";
    lightboxImg.src = src;
    
    // Set Caption
    captionContainer.innerHTML = `
        <h3>${title}</h3>
        <p>${desc}</p>
    `;
}

// Start
document.addEventListener('DOMContentLoaded', init);