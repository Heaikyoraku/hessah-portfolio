import NeuralBackground from "@/components/NeuralBackground";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Identity from "@/components/Identity";
import Journey from "@/components/Journey";
import ProjectsLab from "@/components/ProjectsLab";
import KnowledgeGraph from "@/components/KnowledgeGraph";
import AchievementVault from "@/components/AchievementVault";
import CurrentExperiments from "@/components/CurrentExperiments";
import CommandCenter from "@/components/CommandCenter";
import ContactPortal from "@/components/ContactPortal";

export default function Home() {
  return (
    <main className="relative">
      <LoadingScreen />
      <NeuralBackground />
      <Navigation />

      <div className="relative z-10">
        <Identity />
        <Journey />
        <ProjectsLab />
        <KnowledgeGraph />
        <AchievementVault />
        <CurrentExperiments />
        <CommandCenter />
        <ContactPortal />
      </div>
    </main>
  );
}
