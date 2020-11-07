import mongoose from 'mongoose';
import slugify from 'slugify';

const {Schema} = mongoose;

const PollSchema = new Schema(
    {
        question: {
            type: String,
            required: true,
            trim: true,
            min: ['10', 'Spørsmålet må bestå av mer enn 10 tegn'],
            max: ['200', 'Spørsmålet må ha mindre enn 200 tegn'],
        },
        //slug: String, //Eventuell gjøre den til en index?
        answers: [
            {
                answer: String,
                correct: {
                    type: Boolean,
                    default: false
                }
            }
        ]
    },
    { timestamps: true, toJSON: { virtuals: true}, toObject: { virtuals: true} }
);

/*PollSchema.pre('save', function (next) {
    this.slug = slugify.apply(this.name, { lower: true });
    next();
});
*/

const Poll = mongoose.model('Poll', PollSchema);

export default Poll;