from db import *
from flask import jsonify, request
import json


@app.route("/")
def main():
    json_list = Json.query.all()
    jsonSchema = JsonSchema(many=True)
    return jsonify(jsonSchema.dump(json_list).data)


@app.route("/api/login", methods=["POST"])
def login():
    # bytes->JSON->dict
    data = json.loads(request.data.decode("utf-8"))
    # pop out "respond"
    data.pop("respond")
    print(data)
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=8080)
