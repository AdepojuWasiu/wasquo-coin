import { Schema, model, models } from "mongoose";

const PointSchema = new Schema({
    owner:{
        type:Schema.Types.ObjectId,
        ref: 'User'
    },
    point: {
        type: String,
        required: [true, 'Point is required']
    },
})


const Point = models.Point || model('point', PointSchema);

export default Point;