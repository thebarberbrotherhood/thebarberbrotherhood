"use client";

import { generateUploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "../api/uploadthing/core";

const UploadButton = generateUploadButton<OurFileRouter>();

export default function ImageUpload({
  onUpload,
}: {
  onUpload: (url: string) => void;
}) {
  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        if (res?.[0]?.url) {
          onUpload(res[0].url);
        }
      }}
      onUploadError={(error: Error) => {
        alert(`Upload failed: ${error.message}`);
      }}
    />
  );
}