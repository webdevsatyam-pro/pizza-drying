const TeamCard = ({ name, role, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-indigo-500"
      />

      <h3 className="mt-4 text-xl font-semibold text-gray-800">{name}</h3>

      <p className="text-indigo-600 font-medium">{role}</p>
    </div>
  );
};

export default TeamCard;
