import mongoose, { mongo } from "mongoose";
import { Video } from "../types/video";

const videoSchema = new mongoose.Schema<Video>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

export default mongoose.model('video', videoSchema)