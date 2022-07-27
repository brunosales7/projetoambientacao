export default function scrollDown() {
    const linksInternos = document.querySelectorAll("ul a[href^='#']");
  
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
  Footer
  © 2022 GitHub, Inc.
  Footer navigation
  Terms
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms