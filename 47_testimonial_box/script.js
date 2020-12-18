const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Mia Khalifa",
    position: "Designer",
    photo: "https://randomuser.me/api/portraits/women/51.jpg",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus nisi hic quibusdam sit alias quasi amet eaque suscipit omnis itaque,autem repellendus quis voluptates ut perspiciatis adipisci fuga provident, minus similique libero, eveniet illum harum quisquam? Magnam debitis fuga possimus, nemo at corrupti dicta pariatur esse velit quas,assumenda quidem",
  },
  {
    name: "Picasso",
    position: "Painter",
    photo: "https://randomuser.me/api/portraits/women/52.jpg",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus nisi hic quibusdam sit alias quasi amet eaque suscipit omnis itaque,autem repellendus quis voluptates ut perspiciatis adipisci fuga provident, minus similique libero, eveniet illum harum quisquam? Magnam debitis fuga possimus, nemo at corrupti dicta pariatur esse velit quas,assumenda quidem",
  },
  {
    name: "Da Vinci",
    position: "Architect",
    photo: "https://randomuser.me/api/portraits/women/53.jpg",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus nisi hic quibusdam sit alias quasi amet eaque suscipit omnis itaque,autem repellendus quis voluptates ut perspiciatis adipisci fuga provident, minus similique libero, eveniet illum harum quisquam? Magnam debitis fuga possimus, nemo at corrupti dicta pariatur esse velit quas,assumenda quidem",
  },
  {
    name: "Jhonny Sins",
    position: "Plumber",
    photo: "https://randomuser.me/api/portraits/women/54.jpg",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus nisi hic quibusdam sit alias quasi amet eaque suscipit omnis itaque,autem repellendus quis voluptates ut perspiciatis adipisci fuga provident, minus similique libero, eveniet illum harum quisquam? Magnam debitis fuga possimus, nemo at corrupti dicta pariatur esse velit quas,assumenda quidem",
  },
];

let idx = 1;

function updateTestimonials() {
  const { name, position, photo, text } = testimonials[idx];

  testimonials.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;
  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonials, 10000);
