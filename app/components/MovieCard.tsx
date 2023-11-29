// ... (import statements)

interface MovieCardProps {
  title: string;
  overview: string;
  posterPath: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, overview, posterPath }) => {
  const imageUrl = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : '/no-image-available.jpg';

  const handleCardClick = () => {
    // Create a Blob with movie information
    const movieInfo = `Title: ${title}\nOverview: ${overview}`;
    const blob = new Blob([movieInfo], { type: 'text/plain' });

    // Create an anchor element to trigger the download
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = title+'.txt';

    // Append the anchor to the document and trigger the click event
    document.body.appendChild(a);
    a.click();

    // Remove the anchor from the document
    document.body.removeChild(a);
  };

  return (
    <div
      className="
        bg-transparent
        transition-rounded ease-in duration-200
        hover:rounded-[25px]
        hover:bg-green-700
        p-4"
      onClick={handleCardClick} // Attach the click event handler
    >
      <img
        className="w-full h-64 rounded-[25px] mb-4"
        src={imageUrl}
        alt=""
      />
      <h2 className="text-2xl text-white font-bold mb-2">{title}</h2>
      <p className="text-sm text-black">{overview.substring(0, 150)}</p>
    </div>
  );
};

export default MovieCard;
