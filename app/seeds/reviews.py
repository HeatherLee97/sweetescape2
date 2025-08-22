from app.models import db, Review, User, environment, SCHEMA
from sqlalchemy.sql import text


def seed_reviews():
    # Get users to create reviews for
    demo = User.query.filter(User.email == 'demo@aa.io').first()
    marnie = User.query.filter(User.email == 'marnie@aa.io').first()
    bobbie = User.query.filter(User.email == 'bobbie@aa.io').first()

    review1 = Review(
        user_id=demo.id,
        review="Great product! Really enjoyed using this.",
        stars=5
    )

    review2 = Review(
        user_id=marnie.id,
        review="Good quality but could be improved.",
        stars=4
    )

    review3 = Review(
        user_id=bobbie.id,
        review="Not bad, met my expectations.",
        stars=3
    )

    review4 = Review(
        user_id=demo.id,
        review="Amazing experience, highly recommend!",
        stars=5
    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.commit()


def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))
        
    db.session.commit()
