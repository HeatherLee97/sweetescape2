from app.models import db, Itinerary, User, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date


def seed_itineraries():
    # Get users to create itineraries for
    demo = User.query.filter(User.email == 'demo@aa.io').first()
    marnie = User.query.filter(User.email == 'marnie@aa.io').first()
    bobbie = User.query.filter(User.email == 'bobbie@aa.io').first()

    itinerary1 = Itinerary(
        user_id=demo.id,
        title="Tokyo Adventure",
        destination="Tokyo, Japan",
        start_date=date(2025, 9, 1),
        end_date=date(2025, 9, 10),
        description="Exploring the bustling streets of Tokyo, visiting temples, and trying authentic Japanese cuisine."
    )

    itinerary2 = Itinerary(
        user_id=marnie.id,
        title="European Road Trip",
        destination="Paris, France",
        start_date=date(2025, 10, 15),
        end_date=date(2025, 10, 25),
        description="A romantic getaway through Paris, visiting museums, cafes, and iconic landmarks."
    )

    itinerary3 = Itinerary(
        user_id=bobbie.id,
        title="California Coast",
        destination="San Francisco, CA",
        start_date=date(2025, 8, 20),
        end_date=date(2025, 8, 27),
        description="Road trip along the California coast, visiting beaches, redwoods, and wine country."
    )

    itinerary4 = Itinerary(
        user_id=demo.id,
        title="NYC Weekend",
        destination="New York City, NY",
        start_date=date(2025, 11, 5),
        end_date=date(2025, 11, 8),
        description="Quick weekend trip to see Broadway shows, visit Central Park, and explore downtown."
    )

    db.session.add(itinerary1)
    db.session.add(itinerary2)
    db.session.add(itinerary3)
    db.session.add(itinerary4)
    db.session.commit()


def undo_itineraries():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.itineraries RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM itineraries"))
        
    db.session.commit()
