"use client";

export default function Filters({ filters, setFilters }: any) {
  return (
    <div className="flex flex-wrap gap-4 mb-10">

      {/* 🔥 Level */}
      <select
        value={filters.level}
        onChange={(e) =>
          setFilters((prev: any) => ({
            ...prev,
            level: e.target.value,
          }))
        }
        className="bg-black border border-white/20 text-white px-4 py-2 rounded-lg"
      >
        <option value="">All Levels</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      {/* 🔥 Goal */}
      <select
        value={filters.goal}
        onChange={(e) =>
          setFilters((prev: any) => ({
            ...prev,
            goal: e.target.value,
          }))
        }
        className="bg-black border border-white/20 text-white px-4 py-2 rounded-lg"
      >
        <option value="">All Goals</option>
        <option value="LoseFat">Lose Fat</option>
        <option value="BuildMuscle">Build Muscle</option>
        <option value="GetStronger">Get Stronger</option>
        <option value="ImproveEndurance">Endurance</option>
      </select>

    </div>
  );
}