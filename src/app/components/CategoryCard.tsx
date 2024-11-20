// src/components/CategoryCard.tsx

import Link from "next/link";
import React from "react";

type CategoryCardProps = {
  name: string;
  icon: JSX.Element;
};

export default function CategoryCard({ name, icon }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${name.toLowerCase()}`} // dynamically include category in the link
      className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white"
    >
      <div className="text-4xl mb-2 text-blue-500 ">{icon}</div>
      <h3 className="text-lg font-semibold text-blue-500">{name}</h3>
    </Link>
  );
}
