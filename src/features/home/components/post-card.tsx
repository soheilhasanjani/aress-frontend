import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PostCardProps {
  id: number;
  image: string;
  category: string;
  title: string;
  profile: string;
  fullname: string;
  createDate: string;
}

const PostCard: React.FC<PostCardProps> = (props) => {
  const { id, image, category, title, profile, fullname, createDate } = props;
  return (
    <div className="border border-[#E8E8EA] rounded-xl p-4">
      <div className="mb-4 aspect-[360/240]">
        <Image
          src={image}
          width={360}
          height={240}
          className="size-full object-cover rounded-md "
          alt="post-image"
          priority
        />
      </div>

      <div className="flex flex-col gap-4 p-2">
        <div className="bg-[rgba(75,107,251,0.05)] rounded-md text-sm font-medium text-[#4B6BFB] w-fit px-2.5 py-1">
          {category}
        </div>
        <Link
          prefetch
          href={`/post/${id}`}
          className="text-2xl font-semibold text-[#181A2A] line-clamp-3 h-24"
        >
          {title}
        </Link>
        <div className="flex items-center gap-4">
          <Image
            src={profile}
            width={36}
            height={36}
            className="size-9 object-cover rounded-full"
            alt="profile-image"
            priority
          />
          <div className="text-[#97989F] text-base font-medium">{fullname}</div>
          <div className="text-[#97989F] text-base font-normal">
            {createDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
