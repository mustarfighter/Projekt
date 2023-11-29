
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
    <div className="
                    bg-transparent-800
                    transition-rounded ease-in duration-300
                    hover:rounded-[25px]
                    hover:bg-green-700
                   
                    
                    p-4">
      <img className="w-full 
                    h-64 
                    rounded-[25px]
                    mb-4" src={imageUrl} alt="" />
      <h2 className="text-2x1 
                    text-black 
                    font-bold 
                    mb-2">{title}</h2>
      <p className="text-sm 
                    text-black">{overview.substring(0,150)}</p>
    </div>
  )
}

export default MovieCard;