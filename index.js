
function adjustGallery() {
    const galleryContainer = document.querySelector('.gallery-container');
    const columns = window.innerWidth > 768 ? 4 : 2; // Set columns based on screen width
    galleryContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  }

  // Adjust gallery on page load and resize
  window.addEventListener('load', adjustGallery);
  window.addEventListener('resize', adjustGallery);






  const images = [
    '../res/img-1.jpg',
    '../res/img-3.jpg',
    '../res/img-2.jpg',
    '../res/img-4.jpg',
    '../res/img-5.jpg',
    '../res/img-6.jpg',
    '../res/img-7.jpg',
    '../res/img-8.jpg',
    '../res/img-9.jpg',
    '../res/img-10.jpg',
    '../res/img-11.jpg',
    '../res/img-12.jpg',
    '../res/img-13.jpg',
    '../res/img-1.jpg',
    '../res/img-2.jpg',
    '../res/main-pic.jpg',
    '../res/img-6.jpg',
    '../res/img-7.jpg'
]

  // Function to dynamically create gallery
  function createGallery(images) {
    const galleryContainer = document.getElementById('gallery-container');
    const columnCount = 3; // Number of columns
    const columns = Array.from({ length: columnCount }, () => document.createElement('div'));

    // Add Bootstrap column classes
    columns.forEach(column => column.classList.add('col-md-4', 'mb-4'));

    // Distribute images into columns
    images.forEach((image, index) => {
      const imgElement = document.createElement('img');
      imgElement.src = image;
      imgElement.alt = `Gallery Image ${index + 1}`;
      imgElement.setAttribute('data-bs-toggle', 'modal');
      imgElement.setAttribute('data-bs-target', '#lightboxModal');
      imgElement.addEventListener('click', () => openLightbox(image));
      imgElement.classList.add('gallery-img');

       // Add AOS attributes for animation
    imgElement.setAttribute('data-aos', 'fade-up'); // Animation type
    imgElement.setAttribute('data-aos-delay', `${(index % columnCount) * 100}`); // Staggered delay


      columns[index % columnCount].appendChild(imgElement);


    });

    // Append columns to the gallery container
    columns.forEach(column => galleryContainer.appendChild(column));

     // Initialize or refresh AOS animations after images are added
  AOS.init();
  }
  // Function to open lightbox
  function openLightbox(imageSrc) {
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = imageSrc;
  }

  // Load the gallery on page load
  createGallery(images);

 


  const rows = [
    {
      id: "row1",
      images: ["res/img-2.jpg", "res/img-2.jpg", "res/main-pic.jpg"],
    },
    {
      id: "row2",
      images: ["res/img-1.jpg", "res/img-2.jpg", "res/main-pic.jpg"],
    },
    {
      id: "row3",
      images: ["res/img-7.jpg", "res/img-2.jpg", "res/main-pic.jpg"],
    },
  ];
  
  // Function to cycle through images
  function cycleBackgroundImages() {
    rows.forEach((row) => {
      const element = document.getElementById(row.id);
      let currentIndex = 0;
  
      setInterval(() => {
        // Update the background image
        element.style.backgroundImage = `url(${row.images[currentIndex]})`;
  
        // Increment the index and reset if it exceeds the array length
        currentIndex = (currentIndex + 1) % row.images.length;
      }, 1000); // Change image every second
      console.log(currentIndex)
    });
  }
  console.log("out");
  // Start cycling images
  cycleBackgroundImages();
  