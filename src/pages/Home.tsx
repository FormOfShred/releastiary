import DateNavigator from "@/components/DateNavigator/DateNavigator";
import GameGrid from "@/components/GameGrid/GameGrid";
import { useState } from "react";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedPlatform, setSelectedPlatform] = useState<number | undefined>();
  
  return (
    <div>
      <DateNavigator 
        selectedDate={selectedDate} 
        setSelectedDate={setSelectedDate} 
        setSelectedPlatform={setSelectedPlatform}
      />
      <GameGrid 
        selectedDate={selectedDate}
        selectedPlatform={selectedPlatform}
      />
    </div>
  )
}

export default Home;