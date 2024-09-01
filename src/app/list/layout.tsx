import Header from "../common/Header";
import TaskBar from "../common/TaskBar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-b from-black to-blue-700 mix-blend-lighten h-[100vh]">
      <Header />
      <div className="relative z-10">{children}</div>
      <TaskBar />
    </div>
  );
}
