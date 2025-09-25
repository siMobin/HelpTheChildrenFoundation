import fs from "fs";
import path from "path";
import Header from "@/components/Header";
import GalleryGrid from "@/components/GalleryGrid";

export default async function Gallery() {
  const galleryDirectory = path.join(
    process.cwd(),
    "public",
    "images",
    "gallary"
  );
  let imageFileNames: string[] = [];

  try {
    const files = await fs.promises.readdir(galleryDirectory);
    imageFileNames = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return (
        ext === ".png" ||
        ext === ".jpg" ||
        ext === ".jpeg" ||
        ext === ".jfif" ||
        ext === ".gif" ||
        ext === ".webp"
      );
    });
  } catch (error) {
    console.error("Failed to read gallery directory:", error);
  }

  return (
    <main>
      <Header />
      <section className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-">Hall Of Fame</h1>
        <p className="text-lg text-center mb-8">Gallery of our past events</p>
        <GalleryGrid images={imageFileNames} />
      </section>
    </main>
  );
}
