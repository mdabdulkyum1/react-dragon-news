import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { FaEye } from "react-icons/fa";

function SingleNews({ news }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showReadMoreBtn, setShowReadMoreBtn] = useState(false);

  const pRef = useRef(null);

  useEffect(() => {
    if (pRef.current) {
      setShowReadMoreBtn(
        pRef.current.scrollHeight !== pRef.current.clientHeight
      );
    }
  }, []);

  const { author, details, title, image_url, rating, total_view } = news;
  return (
    <div className="mx-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={author.img} alt="" className="h-10 w-10 rounded-full" />
          <div className="">
            <h1 className="text-lx font-bold">{author?.name || "N/A"}</h1>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="">share</div>
      </div>
      <div className="">
        <h1 className="text-xl font-bold my-2">{title}</h1>
        <div className="my-2">
          <img src={image_url} alt="" />
        </div>
        <div className="">
          <p ref={pRef} className={`${isOpen ? "" : "line-clamp-2"}`}>
            {details}
          </p>

          {showReadMoreBtn ? (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-500 underline font-bold"
            >
              {isOpen ? "Read Less" : "Read More"}
            </button>
          ) : null}
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-2">
            <ReactStars
              edit={false}
              count={5}
              value={rating.number}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <span>{parseFloat(rating.number)}</span>
          </div>
          <div className="flex items-center gap-2"><FaEye /> <span>{total_view}</span></div>
        </div>
      </div>
    </div>
  );
}

SingleNews.propTypes = {
  news: PropTypes.object,
};

export default SingleNews;
