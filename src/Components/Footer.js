// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/chinmay-sharad-kaitade/"
        target="_blank"
        title="Chetan Nada's Linkedin Profile"
      >
        Chinmay Kaitade
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <a
        href="https://github.com/ChinmayKaitade/Swiggify-Food-App"
        target="_blank"
        title="Swiggify Food App Github Repository"
      >
        <strong>
          Swiggify<span>FoodApp</span>
        </strong>
      </a>
    </div>
  );
};

export default Footer;
