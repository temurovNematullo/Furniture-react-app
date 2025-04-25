import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import reviewStar from "../../assets/img/reviewsStar.svg";
import {
  fetchUserReviews,
  updatePage,
} from "../../reduxTK/slices/reviewsSlice";

const ClientReviewsSection: React.FC = () => {
  const { reviews, error, page } = useAppSelector((state) => state.reviews);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserReviews());
  }, [page]);

  return (
    <section className="client__Reviews container">
      <h2>What say clients about us</h2>
      <div className="client__Reviews-title">
        <p className="client__Reviews-lineTitle"></p>
        <p>
          It is a long established fact that a reader will be distracted by the
          service.
        </p>
      </div>

      <div className="Reviews__Conteiner">
        <button
          className="reviews__nextButton hidden-mobile"
          title="Prev Review"
          onClick={() => dispatch(updatePage("decrement"))}
          disabled={page === 1}
        >
          {"<"}
        </button>
        {reviews.map((review) => (
          <div className="client__Reviews-content">
            <div className="client__Reviews-textContainer">
              <div className="client__Reviews-Avatar">
                <img src={review.userAvatar} alt="" />
              </div>
              <div className="client__Reviews-Info">
                <div className="client__Reviews-UserName">
                  {review.userName}
                  <div className="client__Reviews-Date">{review.createdAt}</div>
                </div>

                <div className="client__Reviews-textContainer-title">
                  <p>{review.review}</p>
                </div>

                <div className="client__Reviews-starsContainer">
                  {Array(review?.rating)
                    .fill(0)
                    .map((_, i) => (
                      <img
                        key={i}
                        src={reviewStar}
                        alt=""
                        className="About_us_icon"
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        <button
          className="reviews__prevButton hidden-mobile"
          title="Next Review"
          onClick={() => dispatch(updatePage("increment"))}
          disabled={reviews.length < 2}
        >
          {">"}
        </button>
      </div>
    </section>
  );
};
export default ClientReviewsSection;
