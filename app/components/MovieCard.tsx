
"use client"
interface MovieCardProps {
    title: string;
    overview: string;
    posterPath: string;
}

const MovieCard = ({title, overview, posterPath}: MovieCardProps) => {

    const imageUrl = posterPath ?
    `https://image.tmdb.org/t/p/w500${posterPath}`
    : '/no-image-available.jpg';

  return (
    <div className="bg-blue-500
                    hover:rounded-[20px]
                    hover:bg-blue-700
                    
                    p-4">
      <img className="w-full 
                    h-64 
                    rounded-[20px]
                    mb-4" src={imageUrl} alt="" />
      <h2 className="text-2x1 
                    text-black 
                    font-bold 
                    mb-2">{title}</h2>
      <p className="text-sm 
                    text-white">{overview.substring(0,150)}</p>
    </div>
  )
}

export default MovieCard;