import DateNavigator from "@/components/DateNavigator/DateNavigator";
import GameGrid from "@/components/GameGrid/GameGrid";
import { useState } from "react";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  return (
    <div>
      <DateNavigator selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <GameGrid selectedDate={selectedDate} />
    </div>
  )
}

export default Home;