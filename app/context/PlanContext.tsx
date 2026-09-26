"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Workout } from "../lib/api";

type PlanContextType = {
  plan: Workout[];
  saved: Workout[];

  addToPlan: (workout: Workout) => void;
  addToSaved: (workout: Workout) => void;

  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;

  markDone: (id: number) => void;
};

const PlanContext = createContext<PlanContextType | null>(null);

export function PlanProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );
  }, [plan]);

  useEffect(() => {
    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );
  }, [saved]);

  function addToPlan(workout: Workout) {
    if (plan.find((item) => item.id === workout.id)) return;

    if (plan.length >= 5) return;

    setPlan([...plan, workout]);
  }

  function addToSaved(workout: Workout) {
    if (saved.find((item) => item.id === workout.id)) return;

    setSaved([...saved, workout]);
  }

  function removeFromPlan(id: number) {
    setPlan(plan.filter((item) => item.id !== id));
  }

  function removeFromSaved(id: number) {
    setSaved(saved.filter((item) => item.id !== id));
  }

  function markDone(id: number) {
    removeFromPlan(id);
  }

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        markDone,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error(
      "usePlan must be used inside PlanProvider"
    );
  }

  return context;
}