from db import *
from flask import jsonify


@app.route("/")
def main():
    json_list = Json.query.all()
    jsonSchema = JsonSchema(many=True)
    return jsonify(jsonSchema.dump(json_list).data)


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=8080)
