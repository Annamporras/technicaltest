const { Schema, model } = require("mongoose");

const pictureSchema = new Schema(
  {
    image: String,
    title: String,
    description: String
  },
  {
    timestamps: true,
  }
);

const Picture = model("Picture", pictureSchema);

module.exports = Picture;
