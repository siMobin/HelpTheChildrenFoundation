"use client";

import SpotlightCard from "@/components/SpotlightCard";
import React, { useEffect, useState } from "react";

interface Student {
  id: number;
  roll: number;
  name: string;
  photo_url: string;
  class: string;
  gender: string;
  campus: string;
  // Add other student properties as needed
}

const Unsponsored: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("/api/unsponsored");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Student[] = await response.json();
        setStudents(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return <div>Loading unsponsored students...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="  p-4">
      {students.length === 0 ? (
        <p>No unsponsored students found.</p>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {students.map((student) => (
            <div key={student.id} className="relative">
              <SpotlightCard
                className="bg-transparent border !border-accent/30 shadow-lg relative !p-0 rounded-lg "
                spotlightColor="rgba(0, 229, 255, 0.5)"
              >
                <img
                  src={student.photo_url}
                  alt={student.name}
                  loading="lazy"
                  className="w-full aspect-[1/1]     object-cover"
                />
                <div className="p-4 space-y-2">
                  <h2 className="text-xl font-semibold">{student.name}</h2>
                  {/* Render other student details here */}
                  <div className="grid grid-cols-2 gap-2">
                    <span className="inline-flex gap-2 items-center">
                      <strong>Roll:</strong>
                      {student.roll}
                    </span>

                    <span className="inline-flex gap-2 items-center">
                      <strong>Class:</strong>
                      {student.class}
                    </span>
                    <span className="inline-flex gap-2 items-center">
                      <strong>Gender:</strong>
                      {student.gender}
                    </span>
                  </div>
                  <p>{student.campus}&nbsp;Campus</p>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Unsponsored;
