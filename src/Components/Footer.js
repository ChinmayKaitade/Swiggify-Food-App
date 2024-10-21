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
      >
        Chinmay Kaitade
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Swiggify<span>FoodApp</span>
      </strong>
    </div>
  );
};

export default Footer;
