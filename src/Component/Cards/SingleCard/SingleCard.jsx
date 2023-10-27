import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const SingleCard = ({ card }) => {
  const { id, title, category, image, color_dark, color_medium, color_light } =
    card;
  return (
    <Link to={`/donation/${id}`}>
      <img className="w-full object-cover" src={image} alt="donation card" />
      <div
        className="p-4 rounded-b space-y-3"
        style={{ backgroundColor: `${color_light}` }}
      >
        <div
          style={{ color: `${color_dark}`, backgroundColor: `${color_medium}` }}
          className="badge font-medium rounded border-none "
        >
          {category}
        </div>
        <h1
          className="font-semibold text-xl"
          style={{ color: `${color_dark}` }}
        >
          {title}
        </h1>
      </div>
    </Link>
  );
};
SingleCard.propTypes = {
  card: PropTypes.object,
};

export default SingleCard;
