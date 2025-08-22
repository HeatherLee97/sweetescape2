import { useState, useEffect } from "react";
import './reviewspage.css'
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { FaStar } from "react-icons/fa";


function ReviewsPage() {

    const [review, setReview] =useState('');
    const [starRating, setStarRating] = useState(0);
    const [starHover, setStarHover] = useState(0);
    const [reviews, setReviews] = useState(() => {
        const item = localStorage.getItem("reviews");
        return item ? JSON.parse(item) : [];
    });

    useEffect(() => {
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }, [reviews]);

    const handleReviewChange = (e) => {
        setReview(e.target.value)

    };

    const handleStarRating = (rating) => {
        setStarRating(rating);
    };

    const handleStarHover = (hover) => {
        setStarHover(hover)
    };

    const handleMouseLeave = () => {
        setStarHover(0)
    };

    const handleReviewSubmit = () => {
        if(review.trim() && starRating > 0) {
            const newReviews = {text: review, rating: starRating}
            setReviews([...reviews, newReviews]);
            setStarRating(0);
            setReview('');
        }
    };

    const deleteReview = (index) => {
        setReviews(reviews.filter((_, i) => i !== index));
    }

    return (
        <div className="review-container">
            <h3> Leave a Review!</h3>



        <div className="stars-container">
        {[...Array(5)].map((_, index) => (
            <span
            key={index}
            className={`star ${index < (starHover || starRating) ? 'selected' : '' }`}
            onClick={() => handleStarRating(index + 1)}
            onMouseOver={() => handleStarHover(index + 1)}
            onMouseLeave={handleMouseLeave}
            >
                ★

            </span>
        ))}
        </div>

        <textarea
        className="textbox"
        placeholder="tell us what you think!"
        value={review}
        onChange={handleReviewChange}

        />

        <button onClick={handleReviewSubmit}>
            submit
        </button>

        <div className="reviews-container">
            {reviews.map((review, index) => (
                <span key={index} className="review">
                    <p>{Array(review.rating).fill('★')}</p>

                    <p>{review.text} </p>
                    <button onClick={() => deleteReview(index)}>Delete</button>

                </span>
            ))}

        </div>

        </div>
    )



} //reviewspage function end

export default ReviewsPage;
