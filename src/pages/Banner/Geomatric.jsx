

export default function GeometricFrame({
  dimensions,
  className,
  imagePath
}) {
  return (
    <div className={className}>
      <div className="relative w-[500px] h-[600px] sm:w-[250px] sm:h-[250px] md:w-[500px] md:h-[600px]">
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <img
            src={imagePath}
            alt={`Geometric Frame ${dimensions}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0  bg-opacity-30 rounded-lg" />
        {/* <div className="absolute bottom-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
          {dimensions}
        </div> */}
      </div>
    </div>
  )
}

