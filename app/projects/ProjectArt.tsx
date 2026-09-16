import SurveyScene, { type SceneVariant } from "../components/SurveyScene";

export default function ProjectArt({ variant }: { variant: SceneVariant }) {
  return <SurveyScene variant={variant} />;
}