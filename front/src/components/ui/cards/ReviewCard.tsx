import Image, { StaticImageData } from "next/image";
import Card from "public/img/svg/review-card.svg";
import Icon from "public/img/svg/review-card-icon.svg";

interface ReviewCardProps {
  reviewPicture: StaticImageData;
  reviewName: string;
  reviewInfo: string;
  review: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  reviewPicture,
  reviewName,
  reviewInfo,
  review,
}) => {
  return (
    <div className="relative w-full h-full overflow-hidden z-20">
      {/* Card background */}
      <div className="absolute inset-0">
        <Image
          src={Card}
          alt=""
          className="w-full h-full"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="relative z-10 px-[24px] py-[32px] text-white h-full">
        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={reviewPicture}
                alt={reviewName}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-semibold">{reviewName}</div>
              <div className="text-sm opacity-80">{reviewInfo}</div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image src={Icon} alt="" width={43} height={31} />
          </div>
        </div>

        <div className="overflow-hidden">
          <p className="line-clamp-4">{review}</p>
        </div>
      </div>
    </div>
  );
};
