"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [averageRating, setAverageRating] = useState(null);
  const [sum,setSum]=useState(0);
  const router = useRouter();
  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

      console.log(result)
    setFeedbackList(result);

    if (result && result.length > 0) {
      // Log individual ratings
      // result.forEach(item => console.log("Rating:", item.rating));
  
      // Convert ratings to numbers and sum them
      const totalRating = result.reduce((sum, item) => {
        const ratingValue = Number(item.rating); // Convert rating to number
        return sum + (isNaN(ratingValue) ? 0 : ratingValue); // Add to sum, handle NaN
      }, 0); // Start sum from 0
  
      const avgRating = totalRating / result.length; // Calculate average rating
  
      // console.log("Total Rating:", totalRating); // Log total rating
      // console.log("Average Rating (before clamping):", avgRating); // Log average before clamping
  
      const normalizedAvgRating = Math.min(Math.max(avgRating, 0), 10); // Clamp between 0 and 10
      setAverageRating(normalizedAvgRating.toFixed(1)); // Save the average rating (rounded to 1 decimal)
    }
  
  };
  return (
    <div className="p-10">
      

      {feedbackList?.length==0?
      <h2 className="font-bold text-xl text-gray-500">No Interview Feedback Record Found</h2>
      :
      <>
      <h2 className="text-3xl font-bold text-green-500">Congratulation!</h2>
      <h2 className="font-bold text-2xl">Here is your interview feedback</h2>
      
      {/* Show average rating */}
      {averageRating !== null && (
            <h2 className="text-primary text-lg my-3">
              Your overall interview rating: <strong>{averageRating}/10</strong>
            </h2>
          )}

      <h2 className="text-sm text-gray-500">
        Find below interview question with correct answer, Your answer and
        feedback for improvement
      </h2>

      {feedbackList && feedbackList.length > 0 ? (
      feedbackList.map((item, index) => (
        <Collapsible key={index} className="mt-7">
          <CollapsibleTrigger className="p-2 bg-secondary flex justify-between rounded-lg my-2 text-left gap-7 w-full">
            {item.question} <ChevronsUpDown className="h-5 w-5"/>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex flex-col gap-2">
              <h2 className="text-red-500 p-2 border rounded-lg"><strong>Rating:</strong>{item.rating}</h2>
              <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900"><strong>Your Answer: </strong>{item.userAns}</h2>
              <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900"><strong>Correct Answer: </strong>{item.correctAns}</h2>
              <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-primary"><strong>Feedback: </strong>{item.feedback}</h2>
            
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))
    ) : (
      <p>No feedback available</p>
    )}
    </>}
    <Button onClick={()=>router.replace('/dashboard')}>Go Home</Button>
    </div>
  );
}

export default Feedback;
