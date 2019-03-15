from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/hello.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)


class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    age = db.Column(db.Integer, nullable=False)


class Json(db.Model):
    __tablename__ = "json"
    id = db.Column(db.Integer, primary_key=True)
    status = db.Column(db.JSON, nullable=False)


class JsonSchema(ma.ModelSchema):
    class Meta:
        model = Json


class UserSchema(ma.ModelSchema):
    class Meta:
        model = User


def main():
    db.create_all()


if __name__ == "__main__":
    with app.app_context():
        main()
