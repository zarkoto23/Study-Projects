import Cast from "../models/Cast.js"
import Movie from "../models/Movie.js"

export default {
    create(castData){
        return Cast.create(castData)
        
    }
    ,
    getAll(filter={}){
        let casts=Cast.find({})

        if(filter.exclude){
            casts=Cast.find({_id:{$nin: filter.exclude}})
        }
        return casts
    },
    async attachCast(castId,movieId){
        const movie=await Movie.findById(movieId)
        movie.casts.push(castId)
        movie.save()
    }
}