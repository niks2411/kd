"use client";

import { use } from "react";
import { redirect } from "next/navigation";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  redirect(`/products?cat=${encodeURIComponent(id)}`);
}
