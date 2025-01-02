
function addImportantStyle() {
  // Get all elements with the class 'H'
  var elements = document.getElementsByClassName("H");

  // Check if there are any elements with this class
  if (elements.length > 0) {
    // Loop through all the elements and apply the style
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

     
      element.style.setProperty('color', 'red', 'important');
      element.style.setProperty('font-weight', '500', 'important');
      
      
      console.log("Style applied to element:", element);
    }
  } else {
    console.log("No elements with class 'H' found.");
  }
}
document.addEventListener('DOMContentLoaded', function() {
  addImportantStyle();
});



const rows = [
    {
      id: "row1",
      images: ["res/img-2.jpg", "res/img-1.jpg", "res/main-pic.jpg"],
    },
    {
      id: "row2",
      images:["res/main-pic.jpg", "res/img-2.jpg","res/img-1.jpg" ],
    },
    {
      id: "row3",
      images: ["res/img-1.jpg", "res/main-pic.jpg","res/img-2.jpg" ],
    },
  ];
  
  // Function to cycle through images
  function cycleBackgroundImages() {
    rows.forEach((row) => {
      const element = document.getElementById(row.id);
      let currentIndex = 0;
      element.style.backgroundImage = `url(${row.images[currentIndex]})`;
      setInterval(() => {
        // Update the background image
        element.style.backgroundImage = `url(${row.images[currentIndex]})`;
        element.style.transition = "background-image 1s ease-in-out"; // Smooth transition
      element.style.backgroundImage = `url(${row.images[currentIndex]})`;
  
        // Increment the index and reset if it exceeds the array length
        currentIndex = (currentIndex + 1) % row.images.length;
      },60000); // Change image every second
    });
  }
  // Start cycling images
  cycleBackgroundImages();

 