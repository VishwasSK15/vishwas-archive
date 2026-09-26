import { HomeView } from "@/components/home/HomeView";
import { getFramePhotos } from "@/lib/frameImages";

export default function HomePage() {
  const framePhotos = getFramePhotos();
  return <HomeView framePhotos={framePhotos} />;
}

