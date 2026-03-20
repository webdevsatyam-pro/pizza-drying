import TeamCard from "../components/TeamCard";
import teamData from "../components/teamData";

const OurStory = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Team
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teamData.map((member) => (
          <TeamCard
            key={member.id}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
};

export default OurStory;
