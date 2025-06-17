const courseData = [
  {
    title: "Web Development",
    description: "Build stunning websites using HTML, CSS & JavaScript.",
    image: "images/webdev.jpg"
  },
  {
    title: "Data Science",
    description: "Analyze data using Python, Pandas, and visualization tools.",
    image: "images/datascience.jpg"
  },
  {
    title: "AI & ML",
    description: "Master Machine Learning and AI with real-world projects.",
    image: "images/aiml.jpg"
  }
];

let currentCourseIndex = 0;

const slide = document.getElementById("carousel-slide");
const title = document.getElementById("carousel-title");
const desc = document.getElementById("carousel-desc");

function updateCarousel() {
  const course = courseData[currentCourseIndex];
  slide.style.backgroundImage = `url('${course.image}')`;
  title.textContent = course.title;
  desc.textContent = course.description;
}

setInterval(() => {
  currentCourseIndex = (currentCourseIndex + 1) % courseData.length;
  updateCarousel();
}, 2000);

// Initialize first slide
updateCarousel();
