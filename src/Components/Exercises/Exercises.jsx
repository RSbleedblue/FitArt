import React, { useEffect, useState } from "react";

const Exercises = ({ muscle }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${muscle}?limit=21`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '3e967742ccmshe87417d50838fa0p19bae3jsn6d941a75f7da',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setExercises(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [muscle]);

  return (
    <div className="w-full p-4 flex flex-col justify-center items-center">
      <p className="text-3xl text-white mt-10">Popular Exercises</p>
      <div className="rounded-lg p-4 text-sm text-white flex items-center flex-wrap gap-4 justify-center">
        {exercises.map((exercise, index) => (
          <div key={index} className="shadow-xl rounded-lg bg-skye-600 bg-opacity-100 p-2 w-[180px] h-[250px] flex flex-col items-center justify-between">
            <p className="text-xl text-white text-center">{exercise.name}</p>
            <img src={exercise.gifUrl} className="rounded-lg shadow-xl w-full h-[150px] object-cover" alt={exercise.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
